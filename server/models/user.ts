import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: false
  },
  company: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  language: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  messages: {
    type: Object,
    required: false
  },
  confirmed: {
    type: Boolean,
    required: false
  },
  confMail: {
    type: Object,
    required: false
  },
  registered: {
    type: Date,
    default: Date.now
  }
});

export default model("User", UserSchema);
