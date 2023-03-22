INSERT INTO department (id, dep_name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 110000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Engineering Manager", 180000, 2),
       (4, "Software Engineer", 150000, 2),
       (5, "Data Analyst", 100000, 2),
       (6, "Account Manager", 120000, 3),
       (7, "Accountant", 100000, 3),
       (8, "Legal Team Lead", 170000, 4),
       (9, "Lawyer", 120000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Lacey", "Angarita", 1, NULL),
       (2, "Peter", "Parker", 2, 1),
       (3, "BJ", "Thompson", 3, NULL),
       (4, "Christina", "Hall", 4, 3),
       (5, "Blair", "Millet", 5, 3),
       (6, "Bruce", "Willis", 6, NULL),
       (7, "Abram", "Schultz", 7, 6),
       (8, "Evangeline", "Hope", 8, NULL),
       (9, "Peyton", "Nelson", 9, 8);
       