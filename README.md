# Employee-Tracker

Employee Tracker is a command line application that interacts with a MySQL database to keep track of departments, roles and employees within an organization.

---

## Description

This application uses Node.js and MySQL to create a database used to track employees in a company. It creates three tables, "departments, roles and employees" that link together to keep track of each employee and the roles and departments they work in. A user can view each of these tables, and create new rows within them, as well as update employee roles.

## Usage

The following GIF demonstrates the usage and features of the application:

![gif of the application](./assets/img/Application%20Demo%201.75%20speed.gif)

The following screenshots demonstrate the main menu and a few of the features included in this app.

![screen shot of app main menu](./assets/img/menu%20demo.PNG)

![screenshot of view departments feature](./assets/img/department%20demo.PNG)

![screenshot of view employees feature](./assets/img/employees%20demo.PNG)

---

## Installation

To run this application, first install all necessary packages using the following command:

```
npm i
```

Next, navigate to the /db/ folder in the command line and login to MySQL in the command line using

```
mysql -u root -p
```

After inputting your password, create the database and seed it with data if you like using the SOURCE command:

```
SOURCE schema.sql;

SOURCE seeds.sql;
```

Finally, start the application with node.

```
node index.js
```

---

## License

MIT

## Challenges

I tried to modularize my application as much as possible, but struggled to get a few things working when split across multiple files. In the future, I'd like to refactor this so that users can add and update information by selecting from lists, rather than needing to know the department or role id to update or create. I'd also like to implement some of the bonus features described in the assignment, like the ability to delete data through the application, and more sorting options when viewing various tables, like viewing all employees who report to a particular manager.

## Acknowledgments

Thanks to Seamona Stewart as always for hosting our study group sessions on Zoom.
