const pool = require('../db/pool');

exports.getOptions = async (req, res) => {
    try {
        console.log('Fetching dropdown options...');
        const raisedByResult = await pool.query('SELECT RAISED_BY_NAME FROM RAISED_BY');
        const clientProjectResult = await pool.query('SELECT PROJECT_NAME FROM PROJECT');
        const positionResult = await pool.query('SELECT DESIGNATION_NAME FROM DESIGNATION');
        const positionLevelResult = await pool.query('SELECT LEVEL_NAME FROM LEVEL');
        const replacementResult = await pool.query('SELECT REPLACEMENT_TYPE FROM REPLACEMENT_TYPE');
        const experienceRangeResult = await pool.query('SELECT EXP_RANGE FROM EXPERIENCE_RANGE');
        // const salaryBudgetResult = await pool.query('SELECT CTC_RANGE_VALUE FROM CTC_RANGE');
        const qualificationResult = await pool.query('SELECT QUALIFICATION_NAME FROM QUALIFICATION');
        const certificationResult = await pool.query('SELECT CERTIFICATION_NAME FROM CERTIFICATION');

        res.status(200).json({
          raisedBy: raisedByResult.rows,
          clientProject: clientProjectResult.rows,
          position: positionResult.rows,
          positionLevel: positionLevelResult.rows,
          replacement: replacementResult.rows,
          experienceRange: experienceRangeResult.rows,
        //   salaryBudget: salaryBudgetResult.rows,
          qualification: qualificationResult.rows,
          certification: certificationResult.rows,
        });
    } catch (error) {
        console.error('error fetching options:',error);
        res.status(500).json({ error: error.message });
    }
};


exports.submitrequest = async (req, res) => {
    const { raisedBy,location,dateOfRequest,clientProject,projectDetails,position,positionLevel,numOfPositions,
      replacement,replacementDetails,vacancyReason,experienceRange,salaryBudget,qualification,certification,
      skillset,otherBenefit,targetDate } = req.body;
    console.log('Form Data Received:',req.body);
    try {
        const result = await pool.query(
            `INSERT INTO REQUEST (RAISED_BY_NAME, LOCATION, DATE_OF_REQUEST, PROJECT_NAME, PROJECT_DETAILS, DESIGNATION_NAME, LEVEL_NAME,
            NUM_OF_POSITIONS, REPLACEMENT_TYPE_NAME, REPLACEMENT_DETAILS, VACANCY_REASON, EXP_RANGE_NAME, CTC_RANGE_VALUE, QUALIFICATION_NAME,
            CERTIFICATION_NAME, SKILLSET, OTHER_BENEFIT, TARGET_DATE)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`,

            [raisedBy,location,dateOfRequest,clientProject,projectDetails,position,positionLevel,numOfPositions,
              replacement,replacementDetails,vacancyReason,experienceRange,salaryBudget,qualification,certification,
              skillset,otherBenefit,targetDate ]
        );
        console.log('insert result:',result.rows[0]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('error inserting form data:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getRequestById = async (req, res) => {
  const { requestId } = req.params;
  console.log('Request id received:', requestId);
  try {
      const result = await pool.query(
         `SELECT 
    RAISED_BY_NAME AS raised_by_name,
    LOCATION AS location,
    DATE_OF_REQUEST AS date_of_request,
    PROJECT_NAME AS project_name,
    PROJECT_DETAILS AS project_details,
    DESIGNATION_NAME AS designation_name,
    LEVEL_NAME AS level_name,
    NUM_OF_POSITIONS AS num_of_positions,
    REPLACEMENT_TYPE_NAME AS replacement_type_name,
    REPLACEMENT_DETAILS AS replacement_details,
    VACANCY_REASON AS vacancy_reason,
    EXP_RANGE_NAME AS exp_range_name,
    CTC_RANGE_VALUE AS ctc_range_value,
    QUALIFICATION_NAME AS qualification_name,
    CERTIFICATION_NAME AS certification_name,
    SKILLSET AS skillset,
    OTHER_BENEFIT AS other_benefit,
    TARGET_DATE AS target_date
FROM request
WHERE request_id = $1 `, 
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