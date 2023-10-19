// TODO: Include packages needed for this application
const md = require("./utils/generateMarkdown");
const inquirer = require(inquirer);
// TODO: Create an array of questions for user input
const questions = [
  {
    message: "Please input your project title: ",
    name: "title",
  },
  {
    message: "Please enter your project description: ",
    name: "description",
  },
  {
    message: "Please enter installation instructions: ",
    name: "installation",
  },
  {
    message: "Please enter usage information (if applicable): ",
    name: "usage",
  },
  {
    message:
      "Please enter a description for how to contribute to your project (if applicable): ",
    name: "contribution",
  },
  {
    message:
      "Please enter instructions for how to test your project (if applicable): ",
    name: "testing",
  },
  {
    type: "list",
    message: "Please choose a license: ",
    name: "license",
    choices: [
      "GNU GPLv3",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    message: "Please input any questions for this project (if applicable): ",
    name: "question",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
