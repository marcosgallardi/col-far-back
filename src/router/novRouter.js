const { Router } = require("express");
const handlerPostNov = require("../handlers/handlersNov/handlerPostNov");

const novRouter = Router();

novRouter.post("/create", handlerPostNov);


module.exports = novRouter;
