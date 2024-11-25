const express = require("express");
const router = express.Router();
const { getRequestList } = require("../controllers/requestListController");

// Define the route to get the request list
router.get("/", getRequestList);

module.exports = router;
