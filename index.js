// TODO: Include packages needed for this application
const md = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "Please input your project title: ",
    name: "title",
    validate: function (input) {
      return input.length >= 3;
    },
  },
  {
    message: "Please enter your project description: ",
    name: "description",
    validate: function (input) {
      return input.length >= 3;
    },
  },
  {
    message: "Please enter installation instructions (if applicable): ",
    name: "installation",
  },
  {
    message: "Please enter usage information: ",
    name: "usage",
    validate: function (input) {
      return input.length >= 3;
    },
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
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
      "None",
    ],
  },
  {
    message: "Please input an email to send questions to (if applicable): ",
    name: "questions",
  },
  {
    message: "Please input your full name for crediting: ",
    name: "fullname",
    validate: function (input) {
      return input.length >= 3;
    },
  },
  {
    message: "Please input your github username: ",
    name: "github",
    validate: function (input) {
      return input != "";
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Checks if output folder exists, creates
  // new folder if it doesn't
  if (!fs.existsSync(`./output`)) {
    fs.mkdir(`./output`, (err) => {
      if (err) {
        console.error(`Error creating folder: ${err.message}`);
      }
    });
  }

  // Writes to file output/README_projectname.md
  fs.writeFile(`output/${fileName}`, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        "Successfully generated README document! The file is located in the output folder of this directory."
      );
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    let fullText = md(answers);
    writeToFile(`README_${answers.title}.md`, fullText);
  });
}

// Function call to initialize app
init();
