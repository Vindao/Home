import axios from 'axios';

export async function handler(event, context) {
  const body = JSON.parse(event.body);
  const { SENDINBLUE_API } = process.env;
  const attributes = {
    name: body.name,
    email: body.email,
    company: body.company === '' ? 'not provided' : body.company,
    phone: body.phone === '' ? 'not provided' : body.phone,
    message: body.message
  };
  return axios
    .post(
      'https://api.sendinblue.com/v3/smtp/templates/12/send',
      {
        emailTo: ['vindao@outlook.com'],
        attributes: attributes
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': SENDINBLUE_API
        }
      }
    )
    .then(res => {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    })
    .catch(err => {
      console.log(err);
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: err })
      };
    });
}
