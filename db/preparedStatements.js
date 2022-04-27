const connection = require('../connections');


viewDepartments() {
    return this.connection.promise().query(
        'SELECT * FROM department'
    );
};

viewRoles() {
    return this.connection.promise().query(
        'SELECT * FROM role'
    );
}

viewEmployees() {
    return this.connection.promise().query(
        'SELECT * FROM employee'
    );
}


addDepartment(department) {
    return this.connection.promise().query(
        'INSERT INTO department SET ?', department);
}

addEmployee(employee)  {
return this.connection.promise().query(
    'INSERT INTO employee SET ?', employee);
}

addRole(role) {
    return this.connection.promise().query(
        'INSERT INTO role SET ?', role);
}


updateEmployeeRole()


// Bonus

viewBudget()