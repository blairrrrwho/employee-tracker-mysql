// Import and require
// const mysql2 = require('mysql2');
// const inquirer = require('inquirer');
const cTable = require('console.table');
const figlet = require('figlet');

const db = require('./config/connection');
// const { query } = require('./config/connection');

const initialPrompt = require('./lib/initialPrompt');




// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL is connected");
  initialPrompt();
});



