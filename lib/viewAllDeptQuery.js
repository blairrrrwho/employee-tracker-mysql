const viewAllDeptQuery = `SELECT 
department.id AS "Department ID", department.dep_name AS "Department" 
FROM department`;

module.exports = viewAllDeptQuery; 