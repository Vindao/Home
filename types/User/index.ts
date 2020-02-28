export interface DBUserI {
  name: string;
  email: string;
  password: string;
  confPassword: string;
  company: string;
  phone: string;
  language: string;
}

export interface RegisterBodyI {
  name: string;
  email: string;
  password: string;
  confPassword: string;
  company: string;
  phone: string;
  language: string;
}
