const pool = require('../db/pool');

exports.getRequestById = async (req, res) => {
  const { requestId } = req.params;
  console.log('Request id received:', requestId);
  try {
      const result = await pool.query(
         `SELECT 
           RAISED_BY_NAME, LOCATION, DATE_OF_REQUEST, PROJECT_NAME, PROJECT_DETAILS, 
           DESIGNATION_NAME, LEVEL_NAME, NUM_OF_POSITIONS, REPLACEMENT_TYPE_NAME, 
           REPLACEMENT_DETAILS, VACANCY_REASON, EXP_RANGE_NAME, CTC_RANGE_VALUE, 
           QUALIFICATION_NAME, CERTIFICATION_NAME, SKILLSET, OTHER_BENEFIT, TARGET_DATE
        FROM request
        WHERE request_id = $1`, 
        [requestId]
     );
      console.log('Query executed successfully. Result:', result.rows);
      if (result.rows.length === 0) {
          console.log(`no request found for id: ${requestId}`);
          return res.status(404).json({ message: 'Request not found' });
      }

      res.json(result.rows[0]);
  } catch (error) {
      console.error('Error fetching request details:', error);
      res.status(500).json({ message: 'Internal server error' ,error: error.message });
  }
};
