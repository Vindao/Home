import { LangCodeT } from '../../../../types/language';

export interface UserI {
  _id: string;
  language: LangCodeT;
  name: string;
  email: string;
  messages: Object[];
  company: string;
  phone: string;
  confirmed: boolean;
  loggedIn: boolean;
}

export type UserErrorT = 'signup' | 'login' | 'confirm';

export interface UserStateI {
  user: UserI;
  error: null | UserErrorT;
}
