const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const htmlRender = require("./lib/htmlRender");
const { inherits, render} = require("util");
const { finished } = require("stream");
// const { saveSnapshotFile } = require("jest-snapshot/build/utils");

const employee = [];

// Basic Questions

/* var generalQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your employee's name?"
    },
    {
        type: "number",
        name: "id",
        message: "What is your employee's ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee's email?"
    }
];
*/
// Manager Questions

const managerQuestions = [
    {
       type: "input",
       name: "name",
       message: "What is the manager's name?" 
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }
];

// Engineer Questions

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message:  "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is the engineer's GitHub username?"
    },
];

// Intern Questions

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school"
    }
];

// Function to initiliaze

function init() {
    inquirer.prompt(managerQuestions)
        .then(function ({ name, id, email, officeNumber }) {
            const manager = new Manager(name, id, email, officeNumber);
            employee.push(manager);
            createTeam();
        });
};

function createTeam() {
    inquirer.prompt({
        type: "list",
        name: "employeeType",
        message: "What type of employee do you want to create? (Please select 'Finished' to stop adding employees.",
        choices: ["Engineer", "Intern", "I am done adding employees!"]
    }).then(function ({ employeeType }) {
        if (employeeType === "Engineer") {
            createEngineer();
        } else if (employeeType === "Intern") {
            createIntern();
        } else if (employeeType === "I am done adding employees!") {
            saveFile();
        }
    })
};

function createEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(function ({ name, id, email, github }) {
            const engineer = new Engineer(name, id, email, github);
            employee.push(engineer);
            createTeam();
        });
    
};

function createIntern() {
    inquirer.prompt(internQuestions)
        .then(function ({ name, id, email, school }) {
            const intern = new Intern(name, id, email, school);
            employee.push(intern);
            createTeam();
        });
};

function saveFile() {
    fs.writeFile(outputPath, htmlRender(employee), function (err) {
        if (err) throw err;
        console.log("Completed!")
    })
};

init();