const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');



// Route to fetch all candidates
router.get('/candidates',(req,res) => {
    candidateController.getAllCandidates(req, res);
    
});

router.get('/candidates/:candidateId', candidateController.getCandidateById);

module.exports = router;