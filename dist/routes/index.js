"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const Message_1 = require("../models/Message");
const router = express_1.default.Router();
router.get("/", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const messages = yield Message_1.Message.find();
        res.render("index", { title: "Mini Message Board | Home", messages: messages });
    });
});
router.get("/new", function (req, res, next) {
    console.log(req.body);
    res.render("form", { title: "Mini Message Board | New" });
});
router.post("/new", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, message } = req.body;
        const currentDate = (0, moment_1.default)().format("MMMM Do YYYY, h:mm a");
        yield Message_1.Message.create({ user: username, text: message, added: currentDate });
        res.redirect("/");
    });
});
module.exports = router;
