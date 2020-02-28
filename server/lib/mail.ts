import axios from 'axios';
import { sendinBlue_API } from '../config/secrets';

// types
import { LangCodeT } from '../../src/types/language';

export const sendConfMail = async (
  receiver: string,
  link: string,
  language: LangCodeT
) => {
  const body = {
    emailTo: [receiver],
    attributes: { Link: link, Email: receiver }
  };

  switch (language) {
    // case 'de':
    //   return axios.post(
    //     'https://api.sendinblue.com/v3/smtp/templates/4/send',
    //     body,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'api-key': sendinBlue_API
    //       }
    //     }
    //   );

    // case 'nl':
    //   return fetch(
    //     `https://api.sendinblue.com/v3/smtp/templates/8/send`,
    //     options
    //   ).then(res => res.json());
    // case 'es':
    //   return fetch(
    //     `https://api.sendinblue.com/v3/smtp/templates/9/send`,
    //     options
    //   ).then(res => res.json());
    default:
      return axios.post(
        'https://api.sendinblue.com/v3/smtp/templates/4/send',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': sendinBlue_API
          }
        }
      );
  }
};

export const SendResetPassMail = async (
  receiver: string,
  link: string,
  code: string,
  language: LangCodeT
) => {
  const body = {
    emailTo: [receiver],
    attributes: { Link: link, Code: code }
  };
  const options = {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', 'api-key': sendinBlue_API }
  };

  switch (language) {
    case 'de':
      return fetch(
        'https://api.sendinblue.com/v3/smtp/templates/10/send',
        options
      ).then(res => res.json());
    case 'nl':
      return fetch(
        'https://api.sendinblue.com/v3/smtp/templates/6/send',
        options
      ).then(res => res.json());

    default:
      return fetch(
        'https://api.sendinblue.com/v3/smtp/templates/6/send',
        options
      ).then(res => res.json());
  }
};
