import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { auth, EnrichedSession } from '@/auth';
import { decodeBase64,getBody } from '@/lib/helpers';

async function getMessage(auth:any, messageId:string) {
  const gmail = google.gmail({ version: 'v1', auth });
  const res = await gmail.users.messages.get({
      userId: 'me',
      id: messageId,
  });

  const message = res.data;
  const headers = message?.payload?.headers;
  const subjectHeader = headers?.find(header => header.name === 'Subject');
  const subject = subjectHeader ? subjectHeader.value : '(No Subject)';

  const parts = message?.payload?.parts;
  let body = '';
  if (parts && parts.length) {
      body = getBody(parts);
  } else {
      body = message?.payload?.body?.data;
  }

  // Decode base64 content
  // const decodedBody = Buffer.from(body, 'base64').toString('utf-8');
  const decodedBody = Buffer.from(body, 'base64').toString('utf-8');
  const regex = /(?:https?|ftp):\/\/[\n\S]+|\[([^[]*)\]|\(([^()]*)\)|<([^<>]*)>/g;

  // Replace all matches of the pattern with an empty string
  const plainText = decodedBody.replace(regex, '');
  
  
  return {
      subject: subject,
      body: plainText,
  };
}

export async function GET(request: Request) {

  const {searchParams} = new URL(request.url);
  const emailno = searchParams.get("emailno");
  const session = (await auth()) as EnrichedSession;


  console.log('Session inside the route ', session);

  if (!session) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  const clientId = process.env.AUTH_GOOGLE_ID;
  const clientSecret = process.env.AUTH_GOOGLE_SECRET;
  const accessToken = session?.accessToken;
  const refreshToken = session?.refreshToken;

  const oauth2Client = new OAuth2Client({
    clientId,
    clientSecret,
  });

  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  // Use the provider token to authenticate with the Google Calendar API
  const gmail = google.gmail({
    version: 'v1',
    auth: oauth2Client,
  });

  // Use the Google Calendar API to access the calendar
  const gmailRes = await gmail.users.messages.list({
    userId: 'me',
    maxResults: Number(emailno),
    q: 'in:inbox',
  });

  const messages = gmailRes.data.messages;

  const messagesWithBody = [];

  // Use for...of loop to handle asynchronous operations
  for (const message of messages) {
      try {
          const messageDetails = await getMessage(oauth2Client, message.id as string);
          messagesWithBody.push(messageDetails);
      } catch (err) {
          console.error(`Error fetching message with ID ${message.id}:`, err);
      }
  }

  console.log("Response Data: ", messagesWithBody);
  
  return Response.json({ message:"success",data:messagesWithBody });
}