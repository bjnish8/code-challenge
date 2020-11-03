const express = require("express");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const {handleErrors, handleNotFoundError} = require('./middlewares')

const app = express();
const cors = require("cors");

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(indexRouter)
app.use(handleNotFoundError);
app.use(handleErrors);

module.exports = app;