const { Router } = require("express");
const handlerPostFarm = require("../handlers/handlersFarm/handlerPostFarm");
const handlerGetFarm = require("../handlers/handlersFarm/handlerGetFarm");
const handlerPutFarm = require("../handlers/handlersFarm/handlerPutFarm");
const handlerDeleteFarm = require("../handlers/handlersFarm/handlerDeleteFarm");

const farmRouter = Router();

farmRouter.get("/:id?", handlerGetFarm);
farmRouter.post("/create", handlerPostFarm);
farmRouter.put("/update", handlerPutFarm);
farmRouter.delete("/delete/:id", handlerDeleteFarm);

module.exports = farmRouter;
