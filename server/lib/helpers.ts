import { validate } from "../../lib/formVal";
// types
import { RegisterObjectI, SessionUserI } from "../../types/User";

export const arrayIncludes = (requiredArray: any[], actualArray: any[]) => {
  for (let val of requiredArray) {
    if (!actualArray.includes(val)) {
      console.log(val);
      console.log(actualArray);
      return false;
    }
  }
  return true;
};

export const validateRequest = (required: string[], body: any) => {
  if (!arrayIncludes(required, Object.keys(body))) {
    return false;
  }

  for (const index in body) {
    if (validate(index, body[index]) !== true) {
      return false;
    }
  }
  return true;
};

export const createSessionUser = ({
  id,
  language,
  loggedIn,
  name,
  email,
  company,
  phone,
  confirmed
}: SessionUserI) => {
  return {
    id,
    language,
    loggedIn,
    name,
    email,
    company,
    phone,
    confirmed
  };
};
