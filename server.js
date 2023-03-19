// importe and require express and mysql2
const express = require('express');
const mysql = require('mysql2');

const app = express();

const PORT = process.env.PORT || 3001;


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const db = mysql.createConnection(
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

db.connect((err) => {
    if (err) {throw err;
    } 
    console.log("MySQL is connected");
});


// Hardcoded query: DELETE FROM course_names WHERE id = 3;

// db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });


// Query database
// db.query('SELECT * FROM department', function (err, results) {
//   console.log(results);
// });

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });


// initialize the application 




app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});