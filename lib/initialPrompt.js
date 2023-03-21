const inquirer = require('inquirer');
const db = require('../config/connection')

const viewAllDeptQuery = require('./viewAllDeptQuery');
const viewAllRolesQuery = require('./viewAllRolesQuery');
const viewAllEmployeesQuery = require('./viewAllEmployeesQuery');


const initialPromptQuestions = [
  {
    type: 'list',
    name: 'initialPrompt',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'View Employees by Department',
      'End'
    ]
  },
];

const initialPrompt = async () => {
  await inquirer.prompt(initialPromptQuestions).then((answers) => {
    console.log('Answer:', answers.initialPrompt);
    const answer = answers.initialPrompt;
    switch (answer) {

      case 'View All Departments':
        viewAllDepartments();
        console.log('I want to view all deparments.');
        break;

      case 'View All Roles':
        viewAllRoles();
        console.log('I want to view all roles.');
        break;

      case 'View All Employees':
        viewAllEmployees();
        console.log('I want to view all employees.');
        break;

      case 'Add a Department':
        addDepartment();
        console.log('I want to add a department.');
        break;

      case 'Add a Role':
        addRole();
        console.log('I want to add a role.');
        break;

      case 'Add an Employee':
        addEmployee();
        console.log('I want to add an employee.');
        break;

      case 'Update Employee Role':
        updateEmployeeRole();
        console.log('I want to update an employee role.');
        break;

      // case 'Update Employee Managers':
      //   updateEmployeeManagers();
      //   console.log('I want to update employee managers');
      //   break;

      // case 'View All Employees by Manager':
      //   viewEmployeesByManager();
      //   console.log('I want to view all employees by manager');
      //   break;

      // case 'View All Employees by Department':
      //   viewEmployeesByDept();
      //   console.log('I want to view all employees by department.');
      //   break;

      // case 'Delete a Department':
      //   deleteDept();
      //   console.log('I want to delete a department');
      //   break;

      // case 'Delete a Role':
      //   deleteRole();
      //   console.log('I want to delete a role');
      //   break;

      // case 'Delete a Employee':
      //   deleteEmployees();
      //   console.log('I want to delete an employee');
      //   break;

      // case 'View total utilized budget of a department (i.e. the combined salaries of all employees in said department':
      //   viewDeptBudget();
      //   console.log('I want to view the utilized budget of a specific department');
      //   break;

      default:
        db.end();
        process.exit();
    }
  });
};

const viewAllDepartments = async () => {
  const data = await new Promise((resolve, reject) => {
    db.query(viewAllDeptQuery, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      });
  });
  console.log('');
  console.table(data);
  initialPrompt();
};

const viewAllRoles = async () => {
  const data = await new Promise((resolve, reject) => {
    db.query(viewAllRolesQuery, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
  // console.log('');
  // console.log(colors.yellow('ALL ROLES'));
  console.log('');
  console.table(data);
  initialPrompt();
};

const viewAllEmployees = async () => {
  const data = await new Promise((resolve, reject) => {
    db.query(viewAllEmployeesQuery, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      });
  });
  console.log('');
  console.table(data);
  initialPrompt();
};

const addDepartment = async () => {
  await inquirer
    .prompt([
      {
        type: 'input',
        message: 'Which Department would you like to Add?',
        name: 'depts',
      },
    ])
    .then((answers) => {
      const department = answers.depts;
      const sql = `INSERT INTO department (dep_name) VALUES ('${department}')`;
      db.query(sql, function (err, results) {
        if (err) {
          console.log(err);
        } else {
          // resolve(results);
          console.log('');
          console.log(colors.green('DEPARTMENT ADDED'));
          console.log('');
          initialPrompt();
        }
      });
    });
};



// Bonus
// Update employee managers.
// View employees by manager.
// View employees by department.
// Delete departments, roles, and employees.
// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

module.exports = initialPrompt;