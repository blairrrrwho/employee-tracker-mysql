// const initialPrompt = require('./initialPrompt');
// const db = require('../config/connection');

// const viewAllDepartments = async () => {
//   db.query(
//       'SELECT department.id AS "Department ID", department.dep_name AS "Department" FROM department',
//       (err, results) => {
//           if (err) {
//               throw new Error(err);
//           } else {
//               console.table(results);
//               initialPrompt();
//           }
//       });


// const viewAllDepartments = async () => {

        
//     const data = await new Promise((resolve, reject) => {
//         db.query(
//             'SELECT department.id AS "Department ID", department.dep_name AS "Department" FROM department',
//             (err, results) => {
//                 if (err) {
//                     reject(err)
//                 } else {
//                     resolve(results)
//                 }
//             });
//     });
//     console.table(data);
    
//     initialPrompt();
//     return;
//     // db.query(
//     //     'SELECT department.id AS "Department ID", department.dep_name AS "Department" FROM department',
//     //     (err, results) => {
//     //         if (err) {
//     //             throw new Error(err);
//     //         } else {
//     //             console.table(results);
//     //         }
//     //     });
// };

// module.exports = viewAllDepartments;