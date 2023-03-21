const addRoleArray = [
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
        name: 'roleDepartment',
        message: 'What is the Department for the Role?',
        choices: departmentArray,
    },
];

module.exports = addRoleArray;