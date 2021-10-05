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

// Manager questions
