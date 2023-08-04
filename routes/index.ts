import express, { NextFunction, Request, Response, Router } from "express";
import moment from "moment";

const router: Router = express.Router();

interface Message {
	text: string;
	user: string;
	added: string;
}

const messages: Message[] = [
	{
		text: "Hi there!",
		user: "Amando",
		added: moment().format("MMMM Do YYYY, h:mm a"),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: moment().format("MMMM Do YYYY, h:mm a"),
	},
	{
		text: "Hello, how are you?",
		user: "user123",
		added: moment().format("MMMM Do YYYY, h:mm a"),
	},
	{
		user: "late_night_coder",
		text: "Coding late into the night!",
		added: moment().format("MMMM Do YYYY, h:mm a"),
	},
	{
		user: "music_lover",
		text: "Jamming to my favorite tunes!",
		added: moment().format("MMMM Do YYYY, h:mm a"),
	},
	{
		user: "travel_bug",
		text: "Wanderlust kicking in!",
		added: moment().format("MMMM Do YYYY, h:mm a"),
	},
	{
		user: "coding_enthusiast",
		text: "Building cool projects!",
		added: moment().format("MMMM Do YYYY, h:mm a"),
	},
	{
		user: "random_user",
		text: "Random text from a random user!",
		added: moment().format("MMMM Do YYYY, h:mm a"),
	},
];

router.get("/", function (req: Request, res: Response, next: NextFunction): void {
	res.render("index", { title: "Mini Message Board | Home", messages: messages });
});

router.get("/new", function (req: Request, res: Response, next: NextFunction): void {
	console.log(req.body);
	res.render("form", { title: "Mini Message Board | New" });
});

router.post("/new", function (req: Request, res: Response, next: NextFunction): void {
	const { username, message }: { username: string; message: string } = req.body;
	const currentDate: string = moment().format("MMMM Do YYYY, h:mm a");
	messages.push({ text: message, user: username, added: currentDate });
	res.redirect("/");
});

module.exports = router;
