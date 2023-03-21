const inquirer = require('inquirer');
const db = require('../config/connection')
const { query } = require('../config/connection');
const cTable = require('console.table');
const figlet = require('figlet');
const colors = require('colors/safe');

const viewAllDeptQuery = require('./viewAllDeptQuery');
const viewAllRolesQuery = require('./viewAllRolesQuery');
const viewAllEmployeesQuery = require('./viewAllEmployeesQuery');
const addDeptArray = require('./addDepartmentArray');
const addRoleArray = require('./addRoleArray');


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

      case 'Add Department':
        addDepartment();
        // console.log('I want to add a department.');
        break;

      case 'Add Role':
        addRole();
        console.log('I want to add a role.');
        break;

      case 'Add Employee':
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
  await inquirer.prompt(addDeptArray)
    .then((answers) => {
      const department = answers.depts;
      const sql = `INSERT INTO department (dep_name) VALUES ('${department}')`;
      db.query(sql, function (err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log('');
          initialPrompt();
        }
      });
    });
};

const addRole = () => {
  db.query(`SELECT id, dep_name FROM department`,
    async function (err, results) {
      if (err) {
      } else {
        // map the results to a key : value pair for inquirer
        let deptArray = results.map((obj) => {
          return { value: obj.id, name: obj.dep_name };
        });
        await inquirer.prompt([
          {
            type: 'input',
            name: 'roleTitle',
            message: 'What Role would you like to add?',
          },
          {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of the Role?',
          },
          {
            type: 'list',
            name: 'roleDept',
            message: 'What is the Department for the Role?',
            choices: deptArray,
          },
        ])
          .then((answers) => {
            const title = answers.roleTitle;
            const salary = answers.roleSalary;
            const department = answers.roleDept;
            db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${title}', ${salary}, ${department})`,
              function (err, results) {
                if (err) {
                  console.log(err);
                } else {
                  console.log('');
                  initialPrompt();
                }
              });
          });
      }
    })
}

const addEmployee = () => {
  db.query(
    `SELECT id, title FROM roles ORDER BY id ASC`,
    async function (err, results) {
      if (err) {
        console.log(err);
      } else {
        // map the results to a key : value pair for inquirer
        let roleQueryArray = results.map((obj) => {
          return { value: obj.id, name: obj.title };
        });
        const queryEmployees = `SELECT id, first_name, last_name FROM employees ORDER BY id ASC;`;
        db.query(queryEmployees, async function (err, results) {
          if (err) {
            console.log(err);
          } else {
            let employeeQueryArray = results.map((obj) => {
              return {
                value: obj.id,
                name: obj.first_name + ' ' + obj.last_name,
              };
            });
            employeeQueryArray.push({ value: 'NULL', name: 'None' });
            await inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'firstName',
                  message: 'What is the employee\'s first name?',
                },
                {
                  type: 'input',
                  name: 'lastName',
                  message: 'What is the employee\'s last name?',
                },
                {
                  type: 'list',
                  name: 'employeeRole',
                  message: 'What is the employee\'s role?',
                  choices: roleQueryArray,
                },
                {
                  type: 'list',
                  name: 'manager',
                  message: 'Who is the employees Manager',
                  choices: employeeQueryArray,
                },
              ])
              .then((answers) => {
                const first = answers.firstName;
                const last = answers.lastName;
                const role = answers.employeeRole;
                const manager = answers.manager;
                const addEmployeeQuery = `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
              VALUES ('${first}', '${last}', ${role}, ${manager})`;
                db.query(addEmployeeQuery, async function (err, results) {
                  if (err) {
                    console.log(err);
                  }
                });
                console.log('');
                initialPrompt();
              });
          }
        });
      }
    }
  );
};


// Bonus
// Update employee managers.
// View employees by manager.
// View employees by department.
// Delete departments, roles, and employees.
// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

module.exports = initialPrompt;