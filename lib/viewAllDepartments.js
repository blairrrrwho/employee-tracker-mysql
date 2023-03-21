const initialPrompt = require('./initialPrompt');
const db = require('../config/connection');

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
    // console.table(data);
    console.log('');
    console.log('\x1b[33m ALL DEPARTMENTS \x1b[0m');
    console.log('');
    console.table(data);
    initialPrompt();
};

module.exports = viewAllDepartments;