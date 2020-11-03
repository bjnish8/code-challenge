const express = require("express");
const router = express.Router();
const controller = require("../controllers")

router.get("/data", controller.SearchController);

router.get("/loan/:id", controller.getLoanById)

module.exports = router;