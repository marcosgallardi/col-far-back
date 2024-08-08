const { Router } = require("express");

const router = Router();
// const comDirRouter = require("./comDirRouter");

const colegiosRouter = require("./colegiosRouter");
const novRouter = require("./novRouter");
const farmRouter = require("./farmRouter");

router.use("/colegios", colegiosRouter);
// router.use("/comDir", comDirRouter);
router.use("/nov", novRouter);


router.use("/farm", farmRouter);


module.exports = router;