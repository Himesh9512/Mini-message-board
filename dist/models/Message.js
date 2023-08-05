"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const MessasgeSchema = new Schema({
    user: { type: String, maxLength: 20, minLength: 2 },
    text: { type: String, maxLength: 100, minLength: 1 },
    added: String,
});
exports.Message = mongoose_1.default.model("Message", MessasgeSchema);
