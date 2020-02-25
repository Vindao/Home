"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: false
    },
    Company: {
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
exports.default = mongoose_1.model("User", UserSchema);
