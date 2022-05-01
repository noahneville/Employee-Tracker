const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const promptList = require("./prompts");
const constT = require("console.table");
const prepStat = require("./db/preparedStatements");
// const { addRole } = require("./db/preparedStatements");

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

  function addDepartment() {},

  async function addNewRole() {
    //console.log(choiceList);
    inquirer
      .prompt([
        {
          name: "title",
          message: "What is the name of the role you would like to add?",
        },
        {
          name: "salary",
          message: "What is the salary of this role?",
        },
        {
          name: "department_id",
          message: "Which department is the role a part of?",
        },
      ])
      .then((role) => {
        prepStat
          .addRole(role)
          .then(() =>
            console.log(`${role.title} has been added to the database`)
          )
          .then(() => mainMenu());
      });
  },

  function addEmployee() {},

  function updateEmployee() {},
];

function mainMenu() {
  inquirer.prompt(promptList).then((res) => {
    let choice = res.choice;
    for (let i = 0; i < functionArray.length; i++) {
      if (choice === i) {
        console.log(functionArray[i]);
        functionArray[i]();
      }
    }
  });
}

mainMenu();
// const test = prepStat.departmentNames();
// console.log(test);
