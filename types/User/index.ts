import { LangCodeT } from 'types/language';

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

export interface RegisterBodyI {
  name: string;
  email: string;
  password: string;
  confPassword: string;
  company: string;
  phone: string;
  language: LangCodeT;
}

export interface CreateUserI {
  name: string;
  email: string;
  password: string;
  confPassword: string;
  company: string;
  phone: string;
  language: LangCodeT;
}
