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
  authenticate,
  logout,
  checkEmailExists,
  changeLanguage,
  getUser
} from "./api/user";

const router = express.Router();

// SETUP

router.get("/", (req: express.Request, res: express.Response) => {
  res.send(endPoints);
});

router.post(
  "/register",
  checkEmailExists,
  register,
  login,
  sendConfirmationMail,
  sendResponse
);

router.post("/emailexists", checkEmailExists, sendResponse);

router.post("/login", login, sendResponse);

router.get("/logout", logout, sendResponse);

router.get("/user", getUser, sendResponse);

router.post("/sendconfmail", authenticate, sendConfirmationMail, sendResponse);

router.get("/confirmaccount/:token", confirmAccount);

router.post("/changelanguage", changeLanguage, sendResponse);

export default router;
