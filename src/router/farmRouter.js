const { Router } = require("express");
const handlerPostFarm = require("../handlers/handlersFarm/handlerPostFarm");
const handlerGetFarm = require("../handlers/handlersFarm/handlerGetFarm");

const farmRouter = Router();

farmRouter.get("/:id?", handlerGetFarm);
farmRouter.post("/create", handlerPostFarm);
// farmRouter.put("/update", );
// farmRouter.delete("/update", );


module.exports = farmRouter;
