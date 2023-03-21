const inquirer = require('inquirer');

const initialPrompt = () => {
  inquirer.prompt({

    type: 'list',
    name: 'initialPrompt',
    message: 'What would you like to do?',
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "End"
    ]
  })

    .then((answers) => {
      console.log('Answer:', answers.initialPrompt);
      const answer = answers.initialPrompt;
      switch (answer) {

        case 'View All Employees':
          viewAllEmployees();
          console.log('I chose view all employees.');
          break;

        case 'View All Employees by Department':
          viewEmployeesByDept();
          console.log('I chose to view all employees by department.');
          break;

        case 'Add Employee':
          addEmployee();
          console.log('I chose to add an employee.');
          break;

        case 'Remove Employee':
          removeEmployee();
          console.log('I chose to remove an employee.');
          break;


        case 'Update Employee Role':
          console.log('I chose to update an employee role.');
          break;

        case 'View All Roles':
          console.log('I chose to view all roles.');
          break;

        case 'Add Role':
          console.log('I chose to add a role.');
          break;

        case 'View All Departments':
          viewAllDepartments()
          console.log('I chose to view all deparments.');
          break;
      }
    });
};


module.exports = initialPrompt;