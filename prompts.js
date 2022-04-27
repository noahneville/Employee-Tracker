const mainPrompt = {
    type: 'choices',
    message: 'What would you like to do?',
    choices: [
        {
            name: 'View all departments',
            value: 0
        },
        {
            name: 'View all roles',
            value: 1
        },
        {
            name: 'View all employees',
            value: 2
        },
        {
            name: 'Add a department',
            value: 3
        },
        {
            name: 'Add a role',
            value: 4
        },
        {
            name: 'Add an employee',
            value: 5
        },
        {
            name: 'Update employee role',
            value: 6
        },
    ]
}