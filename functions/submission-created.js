require('dotenv').config()
const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
exports.handler = async event => {
  const email_address = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email_address}`)
  return fetch('https://emailoctopus.com/api/1.6/lists/:listId/contacts', {
    method: 'POST',
    headers: {    
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({api_key: EMAIL_TOKEN, email_address: email_address}),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}