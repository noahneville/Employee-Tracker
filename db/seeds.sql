use employee_db;

INSERT INTO department
    (name)
VALUES
    ('Command'),
    ('Medical'),
    ('Engineering'),
    ('Security');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Captain', 100000, 1),
    ('First Officer', 90000, 1),
    ('Chief Medical Officer', 90000, 2),
    ('Sickbay Staff', 70000, 2),
    ('Chief Engineer', 90000, 3),
    ('Transporter Engineer', 70000, 3),
    ('Security Chief', 90000, 4),
    ('Chief Tactical Officer', 80000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Jean-Luc', 'Picard', 1, NULL),
    ('William', 'Riker', 2, 1),
    ('Beverly', 'Crusher', 3, NULL),
    ('Alyssa', 'Ogawa', 4, 3),
    ('Geordi', 'La-Forge', 5, NULL),
    ('Miles', "O'Brien", 6, 5),
    ('Natasha', 'Yar', 7, NULL),
    ('Worf', 'Rozhenko', 8, 7);
