const connection = require("../connections");
const mysql2 = require("mysql2");

class preparedStatements {
  constructor(connection) {
    this.connection = connection;
  }

  viewDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  viewRoles() {
    return this.connection.promise().query("SELECT * FROM role");
  }

  viewEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }

  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  addEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  // updateEmployeeRole()

  // departmentNames() {

  //   let departmentList = await this.viewDepartments().then(([result]) => {
  //     result.map(({ id, name }) => ({
  //       name: name,
  //       value: id,
  //     }));
  //   });
  //   return departmentList;
  // }
}
// Bonus

// viewBudget()

module.exports = new preparedStatements(connection);
