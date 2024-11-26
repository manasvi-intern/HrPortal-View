const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');
const { getRequestById } = require('../controllers/requestController');
// Route to fetch dropdown options
router.get('/dropdown-options', (req, res) => {
    console.log('GET /request/dropdown-options request received');
    requestController.getOptions(req, res);
});

// Route to submit form data
router.post('/', (req,res) => {
    console.log('received POST request to /request with data: ',req.body);
    requestController.submitrequest(req,res);
});


// Route to get request details by ID
router.get('/:requestId', getRequestById);


module.exports = router;