const { Router } = require("express");

const router = Router();
const colegiosRouter = require("./colegiosRouter");
const comDirRouter = require("./comDirRouter");
const farmRouter = require("./farmRouter");
const novRouter = require("./novRouter");
const turFarm = require("./turFarmRouter");


router.use("/colegios", colegiosRouter);
// router.use("/comDir", comDirRouter);
// router.use("/farm", farmRouter);
// router.use("/nov", novRouter);
// router.use("/turFarm", turFarm);

module.exports = router;
