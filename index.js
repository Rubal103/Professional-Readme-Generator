const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for usage.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Explain the guidelines for contributing to this project?",
    },
    {
        type: "input",
        name: "test",
        message: "Explain the necessary steps to run the tests for your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for this project?",
        choices: ["MIT License", "Apache License 2.0", "GNU General Puplic License v3.0", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Please, enter your GitHub Profile Link:",
    },
    {
        type: "input",
        name: "email",
        message: "Please, enter your email address:",
    },
];
// Function to write the README file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The MyREADME.md file has beeen created!");
    });
}

// Function to initialize the app.
async function init() {
    console.log("Starting the MyREADME.md generator...");

    // Prompt the user for answers.
    const answers = await inquirer.prompt(questions);

    // Generate the README content.
    let readmeContent = generatorMarkdown(answers);

        // Write the README file.
        writeToFile("MyREADME.md", readmeContent);
}

// Call the init function to start the app.
init();
