const express = require('express');
const router = express.Router();
const hrEvalController = require('../controllers/hrEvalController');

// Route to fetch dropdown options
router.get('/options', (req, res) => {
    console.log('GET /hr-eval/options request received');
    hrEvalController.getOptions(req, res);
});

// Route to submit form data
router.post('/', (req,res) => {
    console.log('received POST request to /hr-eval with data: ',req.body);
    hrEvalController.submitHrEval(req,res);
});

module.exports = router;