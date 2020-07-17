const express = require("express");
const recipesRouter = require("../auth/recipesRouter.js");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("api/recipes", recipesRouter)

server.get("/", (req, res) => {
    res.send("This is backend week 2, 4th project and server is running")
})

module.exports = server