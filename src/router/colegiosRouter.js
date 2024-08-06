const { Router } = require("express");
const handlerGetCol = require("../handlers/handlersCol/handlerGetCol");
const handlerPostCol = require("../handlers/handlersCol/handlerPostCol");
const handlerPutCol = require("../handlers/handlersCol/handlerPutCol");

const colRouter = Router();

colRouter.get("/", handlerGetCol);
colRouter.post("/create", handlerPostCol);
colRouter.put("/update", handlerPutCol);

module.exports = colRouter;
