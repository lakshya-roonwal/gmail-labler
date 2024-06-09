function decodeBase64(base64: string): string {
    let decodedString = Buffer.from(base64, 'base64').toString('utf-8');
    return decodedString;
  }

  
  function getBody(parts:any) {
    let body = '';
    for (let part of parts) {
        if (part.mimeType === 'text/plain' && part.body && part.body.data) {
            body = part.body.data;
            break;
        }
        if (part.parts) {
            body = getBody(part.parts);
        }
    }
    return body;
  }

export {getBody,decodeBase64}