"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const router = express_1.default.Router();
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: (0, moment_1.default)().format("MMMM Do YYYY, h:mm a"),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: (0, moment_1.default)().format("MMMM Do YYYY, h:mm a"),
    },
    {
        text: "Hello, how are you?",
        user: "user123",
        added: (0, moment_1.default)().format("MMMM Do YYYY, h:mm a"),
    },
    {
        user: "late_night_coder",
        text: "Coding late into the night!",
        added: (0, moment_1.default)().format("MMMM Do YYYY, h:mm a"),
    },
    {
        user: "music_lover",
        text: "Jamming to my favorite tunes!",
        added: (0, moment_1.default)().format("MMMM Do YYYY, h:mm a"),
    },
    {
        user: "travel_bug",
        text: "Wanderlust kicking in!",
        added: (0, moment_1.default)().format("MMMM Do YYYY, h:mm a"),
    },
    {
        user: "coding_enthusiast",
        text: "Building cool projects!",
        added: (0, moment_1.default)().format("MMMM Do YYYY, h:mm a"),
    },
    {
        user: "random_user",
        text: "Random text from a random user!",
        added: (0, moment_1.default)().format("MMMM Do YYYY, h:mm a"),
    },
];
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Message Board | Home", messages: messages });
});
router.get("/new", function (req, res, next) {
    console.log(req.body);
    res.render("form", { title: "Mini Message Board | New" });
});
router.post("/new", function (req, res, next) {
    const { username, message } = req.body;
    const currentDate = (0, moment_1.default)().format("MMMM Do YYYY, h:mm a");
    messages.push({ text: message, user: username, added: currentDate });
    res.redirect("/");
});
module.exports = router;
