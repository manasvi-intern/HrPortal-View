const express = require('express');
const router = express.Router();
const { getRequestById } = require('../controllers/ViewRequestController'); // Adjust the path to your controller file

// Route to get request details by ID
router.get('/:requestId', getRequestById);

module.exports = router;
