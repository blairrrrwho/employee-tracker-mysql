const mysql2 = require('mysql2');

// connect to database
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

//  export database
module.exports = db;