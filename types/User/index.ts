import { LangCodeT } from "../language";

export interface DBUserI {
  _id: string;
  name: string;
  email: string;
  password: string;
  confPassword: string;
  company: string;
  phone: string;
  language: LangCodeT;
  messages: Object[];
  confirmed: boolean;
}

export interface ConfMailDataI {
  link: string;
  code: string;
  name: string;
  email: string;
}

export interface RegisterBodyI {
  name: string;
  email: string;
  password: string;
  company: string;
  phone: string;
  language: LangCodeT;
}

export interface CreateUserI {
  name: string;
  email: string;
  password: string;
  company: string;
  phone: string;
  language: LangCodeT;
}
