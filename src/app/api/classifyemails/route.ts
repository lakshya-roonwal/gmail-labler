import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function POST(request: Request) {
  const { emails } = await request.json();

  const classifiedEmails = await Promise.all(emails.map(async (email: any) => {
    const result = await model.generateContent([
        `I want you to classify this email into one of these categories 
            subject: ${email.subject}
            body: ${email.body}
            Important: Emails that are personal or work-related and require immediate attention.
            Promotions: Emails related to sales, discounts, and marketing campaigns.
            Social: Emails from social networks, friends, and family.
            Marketing: Emails related to marketing, newsletters, and notifications.
            Spam: Unwanted or unsolicited emails.
            General: If none of the above are matched, use General`
    ]);

    const response = await result.response;
    
    let classification = "General";
    
    const text = await response.text();
    console.log("Response of Gemini:", text);

    classification=text;

    return { ...email, classification };
}));

  return NextResponse.json({ classifiedEmails });
}
