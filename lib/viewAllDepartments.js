const initialPrompt = require('./lib/initialPrompt');
const db = require('./config/connection');

viewAllDepartments = async () => {
    const data = await new Promise((resolve, reject) => {
        db.query('SELECT * FROM department', (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        });
    });
    console.table(data);
}; 

module.exports = viewAllDepartments;