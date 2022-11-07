import * as dotenv from 'dotenv' 
dotenv.config()

import fetch from 'node-fetch'
const { EMAIL_TOKEN } = process.env



exports.handler = async event => {
  console.log(JSON.parse(event.body).payload);
  const email_address = JSON.parse(event.body).payload.data.email_address
  console.log(`Recieved a submission: ${email_address}`)

  const body = JSON.stringify({"api_key": EMAIL_TOKEN, "email_address": email_address})
  console.log(`Sending: ${body}`)
  
  
  const response = await fetch(
    'https://emailoctopus.com/api/1.6/lists/:listId/contacts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    }
  );
  let responseText = await response.text();
  console.log('response:', responseText);
  return {
      statusCode: response.status,
      body: responseText,
  };
}