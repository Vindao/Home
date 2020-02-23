import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true
  },
  Language: {
    type: String,
    required: true
  },
  Company: {
    type: String,
    required: false
  },
  Phone: {
    type: String,
    required: false
  },

  Password: {
    type: String,
    required: true
  },
  Confirmed: {
    type: Boolean,
    default: false
  },
  RegisterDate: {
    type: Date,
    default: Date.now
  }
});

export default model('User', UserSchema);
