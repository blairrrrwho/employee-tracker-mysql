INSERT INTO departments (id, dep_name)
VALUES  (1, "Sales"), 
        (2, "Engineering")
        (3, "Finance"), 
        (4, "Legal");

NSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 75000, 1),
       (2, "Salesperson", 70000, 1),
       (9, "Engineer Manager", 200000,  2)
       (3, "Software Engineer", 300000, 2),
       (4, "Data Analyst", 80000, 2),
       (5, "Account Manager", 65000, 3),
       (6, "Accountant", 60000, 3),
       (7, "Legal Team Lead", 85000, 4);
       (8, "Lawyer", 200000, 4);

INSERT INTO employeers (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Lacey", "Angarita", 8, 52),
       (4, "BJ", "Thompson", 9, NULL),
       (7, "Christina", "Hall", 3, 4),
       (17, "Blair", "Millet", 4, 4),
       (23, "Bob Ross", 5, NULL),
       (27, "Mickey", "Mouse", 6, 23),
       (52, "Legal Team Lead", 7, NULL),
       (78, "Tommy", "Pickles", 1, NULL),
       (92, "Angelica", "Rugrat", 2, 23);


