import mongoose, { Mongoose } from "mongoose";

const Schema = mongoose.Schema;

const MessasgeSchema = new Schema({
	user: { type: String, maxLength: 20, minLength: 2 },
	text: { type: String, maxLength: 100, minLength: 1 },
	added: String,
});

export const Message = mongoose.model("Message", MessasgeSchema);
