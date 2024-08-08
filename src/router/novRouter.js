const { Router } = require("express");
const handlerPostNov = require("../handlers/handlersNov/handlerPostNov");
const handlerGetNov = require("../handlers/handlersNov/handlerGetNov");
const handlerPutNov = require("../handlers/handlersNov/handlerPutNov");
const handlerDeleteNov = require("../handlers/handlersNov/handlerDeleteNov");

const novRouter = Router();

novRouter.get("/:id?", handlerGetNov);
novRouter.post("/create", handlerPostNov);
novRouter.put("/update", handlerPutNov);
novRouter.delete("/delete/:id", handlerDeleteNov);

module.exports = novRouter;
