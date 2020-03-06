import { LangCodeT } from "../language";

export interface UserI {
  ID: string;
  language: LangCodeT;
  name?: string;
  email?: string;
  messages?: UserMessagesI;
  company?: string;
  phone?: string;
  confirmed?: boolean;
}

// Messages
export interface MessageI {
  sender: UserI["ID"];
  receiver: UserI["ID"];
  message: string;
  time: Date;
}

export interface MessagesI {
  [key: string]: MessageI;
}

export interface UserMessagesI {
  [key: string]: MessagesI;
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

export interface RegisterObjectI {
  id?: string;
  name: string;
  email: string;
  password: string;
  company: string;
  phone: string;
  language: LangCodeT;
  confirmed: boolean;
}

export interface SessionUserI {
  ID: string;
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
