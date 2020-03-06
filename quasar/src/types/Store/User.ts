import { UserI } from '../../../../types/User';
import { LangCodeT } from '../../../../types/language';

export type UserErrorT = 'signup' | 'login' | 'confirm';

export interface UserStateI {
  user: UserI;
  language: LangCodeT;
  authenticated: boolean;
  error: null | UserErrorT;
  socket: any;
}
