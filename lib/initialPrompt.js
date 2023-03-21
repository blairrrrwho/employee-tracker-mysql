const inquirer = require('inquirer');
const db = require('../config/connection')



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
    db.query(
      'SELECT department.id AS "Department ID", department.dep_name AS "Department" FROM department',
      (err, results) => {
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
  const viewRolesQuery = `SELECT roles.id AS "Role ID", roles.title AS "Job Title",
    department.dep_name AS Department, salary AS Salary
    FROM roles
    JOIN department ON roles.department_id = department.id
    ORDER BY roles.id ASC`;
  const data = await new Promise((resolve, reject) => {
    db.query(viewRolesQuery, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
  console.log('');
  // console.log(colors.yellow('ALL ROLES'));
  console.log('');
  console.table(data);
  initialPrompt();
};

// Bonus
// Update employee managers.
// View employees by manager.
// View employees by department.
// Delete departments, roles, and employees.
// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

module.exports = initialPrompt;