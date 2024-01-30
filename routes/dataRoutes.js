const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/", dataController.getHome);
router.get("/data", dataController.getData);
router.post("/data", dataController.postData);

module.exports = router;
