const pool = require('../db/pool'); // Assuming you have a db.js file for database connection

// Get all candidates
exports.getAllCandidates = async (req, res) => {
    try {
        const result = await pool.query('SELECT CANDIDATE_ID, CANDIDATE_NAME, POSITION_APPLIED FROM CANDIDATE_MASTER_INFO');
        const normalizedResult = result.rows.map((row) => ({
            CANDIDATE_ID: row.candidate_id,
            CANDIDATE_NAME: row.candidate_name,
            POSITION_APPLIED: row.position_applied,
        }));
        console.log(result.rows);
        res.status(200).json(normalizedResult);
    } catch (error) {
        console.error('Error fetching candidates:', error);
        res.status(500).json({ error: 'Failed to fetch candidates' });
    }
};

exports.getCandidateById = async (req, res) => {
    const { candidateId } = req.params;
    if (!candidateId) {
        return res.status(400).json({error: 'candidate ID is required '});
    }
    try {
        const result = await pool.query(
            'SELECT * FROM CANDIDATE_MASTER_INFO WHERE CANDIDATE_ID = $1',
            [candidateId]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
          } else {
            res.status(404).json({ error: 'Candidate not found' });
          }
        }
    
     catch (error) {
        console.error('Error fetching candidate:', error);
        res.status(500).json({ error: 'Failed to fetch candidate' });
    }
};


