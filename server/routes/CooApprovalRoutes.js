const express = require('express');
const {
  getCooApprovalCandidates,
  saveCooApprovalAction,
} = require('../controllers/CooApprovalController');

const router = express.Router();

// Route to fetch candidates
router.get('/candidates', getCooApprovalCandidates);

// Route to save COO action (Approval or Rejection)
router.post('/action', saveCooApprovalAction);

module.exports = router;
