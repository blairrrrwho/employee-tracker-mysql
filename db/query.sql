-- view all departments / SELECT * FROM department
SELECT 
    department.id AS "Department ID", department.dep_name AS "Department" 
FROM department

-- view all roles / SELECT * FROM roles
SELECT 
    roles.id AS 'Role ID', roles.title AS 'Job Title',
    department.dep_name AS Department, salary AS Salary
FROM roles
    JOIN department ON roles.department_id = department.id
ORDER BY roles.id ASC

-- view all employees / SELECT * FROM employees
SELECT 
    employees.id AS "Employee ID", 
    employees.first_name AS "First Name", 
    employees.last_name AS "Last Name", 
    roles.title AS "Job Title", 
    department.dep_name AS "Department", 
    roles.salary AS "Salary",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Manager"
FROM employees
    JOIN roles ON employees.role_id = roles.id
    JOIN department ON roles.department_id = department.id
    LEFT JOIN employees AS manager ON employees.manager_id = manager.id
ORDER BY 
    employees.last_name ASC;

-- add a department
INSERT INTO department (dep_name) 
VALUES ('Field Ops')

-- add a role
INSERT INTO roles (title, salary, department_id) 
VALUES ('Jr Developer', 75000, 2);

-- add an employee
INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ('Bruce', 'Willis', 2, null)

-- update employee role
UPDATE employees
SET role_id = 2
WHERE id = 16



-- update employee managers
-- view all employees by manager
-- view all employees by department
-- delete a department
-- delete a role
-- delete an employee
-- view total utilized budget of a specific department