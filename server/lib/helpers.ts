import { validate } from "../../lib/formVal";
import { v4 as uuid } from "uuid";
// types
import { RegisterBodyI, SessionUserI } from "../../types/User";

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

export const createRegisterBody = ({
  id,
  name,
  email,
  password,
  company,
  phone,
  language
}: RegisterBodyI) => {
  return {
    id: id,
    name: name,
    email: email,
    company: company,
    phone: phone,
    language: language,
    password: password
  };
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

export const createUserSessionInfo = (
  id = uuid(),
  language = "en",

  name = "",
  email = "",
  messages = [],
  company = "",
  phone = "",
  confirmed = false,
  loggedIn = false
) => {
  return {
    ID: id,
    name: name,
    email: email,
    messages: messages,
    company: company,
    phone: phone,
    language: language,
    confirmed: confirmed,
    loggedIn: loggedIn
  };
};
