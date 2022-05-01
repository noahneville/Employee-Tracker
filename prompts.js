const mainPrompt = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      {
        name: "View all departments",
        value: 0,
      },
      {
        name: "View all roles",
        value: 1,
      },
      {
        name: "View all employees",
        value: 2,
      },
      {
        name: "Add a department",
        value: 3,
      },
      {
        name: "Add a role",
        value: 4,
      },
      {
        name: "Add an employee",
        value: 5,
      },
      {
        name: "Update employee role",
        value: 6,
      },
      {
        name: "Quit",
        value: 7,
      },
    ],
  },
];

const addDepartmentPrompt = [
  {
    name: "name",
    message: "What is the name of the department you would like to add?",
  },
];

const addRolePrompt = [
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
];

const addEmployeePrompt = [
  {
    name: "first_name",
    message: "What is the first name of the employee you would like to add?",
  },
  {
    name: "last_name",
    message: "What is the last name of the employee you would like to add?",
  },
  {
    name: "role_id",
    message: "what is the role_id of the employee you would like to add?",
  },
  {
    name: "manager_id",
    message: "what is the manager_id of the employee you would like to add?",
  },
];

module.exports = mainPrompt;
