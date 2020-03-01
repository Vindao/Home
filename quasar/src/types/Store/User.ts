export interface UserI {
  _id: string;
  name: string;
  email: string;
  messages: Object[];
  company: string;
  phone: string;
  confirmed: boolean;
  loggedIn: boolean;
}

export type UserT = UserI | null;

export type UserErrorT = 'signup' | 'login' | 'confirm';

export interface UserStateI {
  user: UserT;
  error: null | UserErrorT;
}
