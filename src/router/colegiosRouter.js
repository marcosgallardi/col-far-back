const { Router } = require("express");
const handlerGetCol = require("../handlers/handlersCol/handlerGetCol");
const handlerPostCol = require("../handlers/handlersCol/handlerPostCol");

const colRouter = Router();

colRouter.get("/", handlerGetCol);
colRouter.post("/create", handlerPostCol);
colRouter.put("/");

module.exports = colRouter;
