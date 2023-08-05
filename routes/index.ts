import express, { NextFunction, Request, Response, Router } from "express";
import moment from "moment";
import { Message } from "../models/Message";

const router: Router = express.Router();

interface MessageInterface {
	text: string;
	user: string;
	added: string;
}

router.get("/", async function (req: Request, res: Response, next: NextFunction): Promise<void> {
	const messages: MessageInterface[] = await Message.find();
	res.render("index", { title: "Mini Message Board | Home", messages: messages });
});

router.get("/new", function (req: Request, res: Response, next: NextFunction): void {
	console.log(req.body);
	res.render("form", { title: "Mini Message Board | New" });
});

router.post(
	"/new",
	async function (req: Request, res: Response, next: NextFunction): Promise<void> {
		const { username, message }: { username: string; message: string } = req.body;
		const currentDate: string = moment().format("MMMM Do YYYY, h:mm a");

		await Message.create({ user: username, text: message, added: currentDate });
		res.redirect("/");
	},
);

module.exports = router;
