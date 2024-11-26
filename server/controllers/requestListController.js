const pool = require('../db/pool'); // Assuming you have a db.js file for database connection

// Get all candidates
exports.getAllRequests = async (req, res) => {
    try {
        const result = await pool.query(`SELECT 
                REQUEST_ID AS "request_id", 
                RAISED_BY_NAME AS "raisedBy", 
                DESIGNATION_NAME AS "designation", 
                PROJECT_NAME AS "projectName"
            FROM REQUEST`);
        console.log(result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching requests:', error);
        res.status(500).json({ error: 'Failed to fetch request' });
    }
};