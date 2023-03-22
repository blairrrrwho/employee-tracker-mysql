-- view all departments / SELECT * FROM department
SELECT 
    department.id AS "Department ID", department.dep_name AS "Department" 
FROM department

-- view all roles / SELECT * FROM roles
SELECT 
    roles.id AS "Role ID", roles.title AS "Job Title",
    department.dep_name AS "Department", salary AS "Salary"
FROM roles
INNER JOIN department ON roles.department_id = department.id
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
VALUES ("Field Ops")

-- add a role
INSERT INTO roles (title, salary, department_id) 
VALUES ('Jr Developer', 80000, 2);

-- add an employee
INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ("Lauren", "Mountains", 7, 17);

-- update employee role
UPDATE employees
SET role_id = 2
WHERE id = 16

-- view all departments
SELECT id, dep_name FROM department

-- view all roles with id and title 
SELECT id, title FROM roles

-- view all roles with id and title 
SELECT id, title FROM roles ORDER BY id ASC

-- select all employees
SELECT employees.first_name, employees.last_name FROM employees

-- -- select all employees; first name, last name
SELECT id, first_name, last_name FROM employees ORDER BY id ASC;

-- select title from roles table
SELECT title FROM roles


-- select all employees by full name 
SELECT id as "Employee ID", CONCAT(employees.first_name, " ", employees.last_name) AS "Name"
FROM employees

-- -- select all managers, sort by last name
SELECT CONCAT(manager.first_name, " ", manager.last_name) AS "Manager"
FROM employees
    JOIN roles ON employees.role_id = roles.id
    JOIN employees AS manager ON employees.manager_id = manager.id
ORDER BY 
    manager.last_name ASC;


-- update employee managers
-- view all employees by manager
-- view all employees by department
-- delete a department
-- delete a role
-- view total utilized budget of a specific department