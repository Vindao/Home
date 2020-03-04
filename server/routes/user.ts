import express from "express";

// config
import { endPoints } from "../config/main";

// api
import {
  register,
  sendConfirmationMail,
  login,
  sendResponse,
  confirmAccount,
  checkLoggedIn,
  logout,
  checkEmailExists,
  changeLanguage,
  initSession
} from "./api/user";

const router = express.Router();

// SETUP

router.get("/", (req: express.Request, res: express.Response) => {
  res.send(endPoints);
});

router.post(
  "/register",
  initSession,
  checkEmailExists,
  register,
  sendConfirmationMail,
  login,
  sendResponse
);

router.post("/emailexists", initSession, checkEmailExists, sendResponse);

router.post("/login", initSession, login, sendResponse);

router.post(
  "/changelanguage",
  initSession,
  checkLoggedIn,
  changeLanguage,
  sendResponse
);

router.get("/logout", logout, sendResponse);

router.get("/loggedin", initSession, checkLoggedIn, sendResponse);

router.post("/sendconfmail", sendConfirmationMail, sendResponse);

router.get("/confirmaccount/:token", confirmAccount);

export default router;
