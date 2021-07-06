const express = require("express");

const projectRouter = require("./api/projectRouter");
const resourcesRouter = require("./api/resourcesRouter");
const taskRouter = require("./api/taskRouter");

const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/task", taskRouter);

module.exports = server;
