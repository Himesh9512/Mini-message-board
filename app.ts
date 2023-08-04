import express, { Express, NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { Mongoose } from "mongoose";
<<<<<<< HEAD
=======
import * as dotenv from "dotenv";
>>>>>>> cd031aa (Make connection key secure)

var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const indexRouter = require("./routes/index");

var app: Express = express();

<<<<<<< HEAD
=======
dotenv.config();

// mongodb configuration
const mongoose: Mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main() {
	const mongoDB: string = process.env.CONNECTION_KEY as string;
	await mongoose.connect(mongoDB);
}

main().catch((err: ErrorCallback) => console.log(err));

>>>>>>> cd031aa (Make connection key secure)
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err: HttpError, req: Request, res: Response, next: NextFunction): void {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
