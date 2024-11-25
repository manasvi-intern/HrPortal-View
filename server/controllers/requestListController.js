const pool = require("../db/pool"); // Import the database pool

// Controller function to get the list of requests
const getRequestList = async (req, res) => {
  try {
    // Query to retrieve only the required columns from the database
    const query = `
      SELECT 
        RAISED_BY_NAME AS "raisedBy", 
        DESIGNATION_NAME AS "designation", 
        PROJECT_NAME AS "projectName"
      FROM request
    `;
    const result = await pool.query(query);

    // Send the retrieved rows as the response
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching request list:", error.message);

    // Send a 500 Internal Server Error response in case of an issue
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getRequestList,
};
