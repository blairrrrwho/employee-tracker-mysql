const mysql2 = require('mysql2');

// Connect to database
const db = mysql2.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'kurtcobain',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

//  Export database
module.exports = db;