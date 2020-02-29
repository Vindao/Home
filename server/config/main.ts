const DayMs = 1000 * 60 * 60 * 24;

export const port = process.env.PORT || 5000;
export const tokenExpires = {
  confirmationMail: 1800, // 15 minutes
  userAuth: 604800 // one Week
};
export const sessMaxAge = 7 * DayMs;

export const endPoints = {
  register: {
    path: 'api/user/register',
    requires: [
      'name',
      'email',
      'password',
      'confPassword',
      'company',
      'phone',
      'language'
    ],
    responses: {}
  },
  login: {
    path: 'api/user/login',
    requires: ['email', 'password']
  },
  sendConfirmationMail: {
    path: 'api/user/sendConfMail',
    requires: ['email']
  }
};
