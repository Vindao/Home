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
  id: string;
  name: string;
  email: string;
  password: string;
  company: string;
  phone: string;
  language: LangCodeT;
}

export interface SessionUserI {
  id: string;
  language: LangCodeT;
  loggedIn: boolean;
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  confirmed?: boolean;
}

export interface LoginBodyI {
  email: string;
  password: string;
}

export interface CreateUserI {
  _id: string;
  name: string;
  email: string;
  password: string;
  company: string;
  phone: string;
  language: LangCodeT;
}
