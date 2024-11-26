const express = require("express");
const router = express.Router();
const { getAllRequests } = require('../controllers/requestListController');

// Define the route to get the request list
router.get('/', getAllRequests);


module.exports = router;