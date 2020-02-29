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
  logout
} from "./api/user";

const router = express.Router();

// SETUP

router.get("/", (req: express.Request, res: express.Response) => {
  res.send(endPoints);
});

router.post("/register", register, sendConfirmationMail, login, sendResponse);

router.post("/login", login, sendResponse);

router.get("/logout", logout, sendResponse);

router.get("/loggedin", checkLoggedIn, sendResponse);

router.post("/sendconfmail", sendConfirmationMail, sendResponse);

router.get("/confirmaccount/:token", confirmAccount);

export default router;
