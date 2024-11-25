const pool = require('../db/pool');

// Fetch candidates for COO approval
const getCooApprovalCandidates = async (req, res) => {
  try {
    const query = `
      SELECT
  cmi.candidate_id,
  cmi.candidate_name,
  cmi.position_applied,
  hr.proceedtonextlevel,
  ca.action -- Include the action column
FROM
  hr_eval_l4 hr
INNER JOIN
  candidate_master_info cmi ON hr.candidate_id = cmi.candidate_id
LEFT JOIN
  coo_approvals ca ON cmi.candidate_id = ca.candidate_id -- Join with coo_approvals to fetch actions
WHERE
  hr.proceedtonextlevel = true;

    `;

    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching COO approval candidates:', error);
    res.status(500).json({ error: 'Failed to fetch candidates' });
  }
};

// Save COO approval/rejection action
const saveCooApprovalAction = async (req, res) => {
  const { candidate_id, candidate_name, position_applied, action } = req.body;

  // Validate if required fields are present
  if (!candidate_name || !position_applied || !action) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    let finalCandidateId = candidate_id;

    // If candidate_id is not provided, fetch candidate_id from candidate_name and position_applied
    if (!finalCandidateId) {
      const query = `
        SELECT candidate_id
        FROM candidate_master_info
        WHERE candidate_name = $1 AND position_applied = $2
        LIMIT 1;
      `;
      const values = [candidate_name, position_applied];
      const result = await pool.query(query, values);

      // If candidate is not found, return an error
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Candidate not found' });
      }

      finalCandidateId = result.rows[0].candidate_id;
    }

    // Insert into coo_approvals table, including the candidate_id
    const insertQuery = `
      INSERT INTO coo_approvals (candidate_id, candidate_name, position_applied, action)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const insertValues = [finalCandidateId, candidate_name, position_applied, action];
    const insertResult = await pool.query(insertQuery, insertValues);

    res.status(201).json({
      message: 'Action saved successfully',
      approval: insertResult.rows[0],
    });
  } catch (error) {
    console.error('Error saving COO action:', error);
    res.status(500).json({ error: 'Failed to save action' });
  }
};

module.exports = { getCooApprovalCandidates, saveCooApprovalAction };
