// Import and require
const express = require('express');
const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const figlet = require('figlet');

const db = require('./config/connection');
const { query } = require('./config/connection');

const initialPrompt = require('./lib/initialPrompt');

const app = express();
const PORT = process.env.PORT || 3001;


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Query database 
// db.query('SELECT * FROM department', function (err, results) {
//   console.log(results);
// });

// db.query('SELECT * FROM roles', function (err, results) {
//     console.log(results);
//   });

// db.query('SELECT * FROM employees', function (err, results) {
//     console.log(results);
//   });


// Hardcoded query: DELETE FROM course_names WHERE id = 3;

// db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL is connected");
  console.log(
    `==========================================================================`
  );
  console.log(``);
  console.log(figlet.textSync('             Employee'));
  console.log(figlet.textSync('             Manager'));
  console.log(``);
  console.log(``);
  console.log(
    `==========================================================================`
  );
  initialPrompt();
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});