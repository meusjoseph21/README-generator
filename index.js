var fs = require("fs")
var inquirer = require("inquirer")
 var markdown = require("./utils/generateMarkdown")
 const path = require("path")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter your Github Username: ",
        name: "github",

    },
    {
        type: "input",
        message: "Enter Email: ",
        name: "email",

    },
    {
        type: "input",
        message: "Title of your project: ",
        name: "title"   
    },
    {
        type: "input",
        message: "Give a Description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Provide a list of contributors: ",
        name: "contributors"
    },
    {
        type: "list",
        message: "What type of license are you using?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
    },
    {
        type: "input",
        message: "Enter command to run tests: ",
        name: "tests"
    }

];

// function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("sample.md", markdown(response) )
    })

}

// function call to initialize program
init();
