const DayMs = 1000 * 60 * 60 * 24;

export const BaseClientUrl = "https://vindao.herokuapp.com";
export const BaseServerUrl = "https://vindaoapi.herokuapp.com";
export const port = process.env.PORT || 5000;
export const maxConfMailTokenAge = Math.floor(Date.now() / 1000) + DayMs;
export const sessMaxAge = 7 * DayMs;

export const endPoints = {
  register: {
    path: "api/user/register",
    requires: ["name", "email", "password", "company", "phone", "language"],
    responses: {}
  },
  login: {
    path: "api/user/login",
    requires: ["email", "password"]
  },
  sendConfirmationMail: {
    path: "api/user/sendConfMail",
    requires: ["email"]
  },
  emailExists: {
    path: "api/user/emailexists",
    requires: ["email"]
  }
};
