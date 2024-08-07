const { Router } = require("express");
const handlerPostNov = require("../handlers/handlersNov/handlerPostNov");
const handlerGetNov = require("../handlers/handlersNov/handlerGetNov");

const novRouter = Router();

novRouter.post("/create", handlerPostNov);
novRouter.get("/:id?", handlerGetNov);



module.exports = novRouter;
