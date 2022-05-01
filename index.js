const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const promptList = require("./prompts");
const constT = require("console.table");
const prepStat = require("./db/preparedStatements");

const functionArray = [
  function viewAllDepartments() {
    prepStat
      .viewDepartments()
      .then(([result]) => {
        console.table(result);
      })
      .then(() => mainMenu());
  },

  function viewAllRoles() {
    prepStat
      .viewRoles()
      .then(([result]) => {
        console.table(result);
      })
      .then(() => mainMenu());
  },

  function viewAllEmployees() {
    prepStat
      .viewEmployees()
      .then(([result]) => {
        console.table(result);
      })
      .then(() => mainMenu());
  },

  function addDepartment() {
    inquirer.prompt(promptList[1]).then((department) => {
      prepStat
        .addDepartment(department)
        .then(() =>
          console.log(`${department.name} has been added to the database`)
        )
        .then(() => mainMenu());
    });
  },

  function addNewRole() {
    //console.log(choiceList);
    inquirer.prompt(promptList[2]).then((role) => {
      prepStat
        .addRole(role)
        .then(() => console.log(`${role.title} has been added to the database`))
        .then(() => mainMenu());
    });
  },

  function addEmployee() {
    inquirer.prompt(promptList[3]).then((employee) => {
      prepStat
        .addEmployee(employee)
        .then(() =>
          console.log(`${employee.first_name} has been added to the database`)
        )
        .then(() => mainMenu());
    });
  },

  function updateEmployee() {
    inquirer.prompt(promptList[4]).then((updatedEmployee) => {
      prepStat
        .updateEmployeeRole(updatedEmployee)
        .then(() => console.log("Employee role updated."))
        .then(() => mainMenu());
    });
  },

  function Quit() {
    console.log("Have a nice day.");
    process.exit();
  },
];

function mainMenu() {
  inquirer.prompt(promptList[0]).then((res) => {
    let choice = res.choice;
    for (let i = 0; i < functionArray.length; i++) {
      if (choice === i) {
        functionArray[i]();
      }
    }
  });
}

mainMenu();
