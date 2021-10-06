const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");
const { finished } = require("stream");
const manager = require("./lib/manager");

const employees = [];

// Basic Questions

var generalQuestions = [
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
        name: "id",
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
            const manager = new manager(name, id, email, officeNumber);
            employees.push(manager);
            fs.createReadStream();
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
            
        }
    })
}

    