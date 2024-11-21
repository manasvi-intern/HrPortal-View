const pool = require('../db/pool');

// Get dropdown options (POSITION, INTERVIEWER, CCTC)
exports.getOptions = async (req, res) => {
    try {
        console.log('Fetching dropdown options...');
        const interviewerResult = await pool.query('SELECT INTERVIEWER_NAME FROM INTERVIEWER');
        console.log('Interviewer Results:', interviewerResult.rows);
        const cctcResult = await pool.query('SELECT CCTC_VALUE FROM CCTC');
        console.log('CCTC Results:', cctcResult.rows);
        res.status(200).json({
            interviewers: interviewerResult.rows,
            cctc: cctcResult.rows
        });
    } catch (error) {
        console.error('error fetching options:',error);
        res.status(500).json({ error: error.message });
    }
};

// Handle form submission and insert into HR_EVAL_L4
exports.submitHrEval = async (req, res) => {
    const {  candidateId,interviewer, interviewDateTime, communication, attitude, fitToWork, cctc, ectc, reasonForLeaving, proceedToNextLevel } = req.body;
    console.log('Form Data Received:',req.body);
    try {
        const result = await pool.query(
            `INSERT INTO HR_EVAL_L4 (CANDIDATE_ID,INTERVIEWER, INTERVIEWDATETIME, COMMUNICATION, ATTITUDE, FIT_TO_WORK, CCTC, ECTC, REASONFORLEAVING, PROCEEDTONEXTLEVEL)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [
            candidateId,
            interviewer , 
            interviewDateTime ,   
            communication , attitude , 
            fitToWork , cctc , ectc , 
            reasonForLeaving , 
            proceedToNextLevel ]
        );
        console.log('insert result:',result.rows[0]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('error inserting form data:', error);
        res.status(500).json({ error: error.message });
    }
};