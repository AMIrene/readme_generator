//function to initialise application
function init() {
    // TODO: Include packages needed for this application
    const inquirer = require('inquirer');
    const fs = require('fs');

    const generateReadMe = (answers) =>
        // TODO: Create an array of questions for user input
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the title of your project?',
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Provide a description of your project',
                },
                {
                    type: 'input',
                    name: 'usage',
                    message: 'Provide instructions on using the application',
                },
                {
                    type: 'checkbox',
                    name: 'licenses',
                    message: 'What licenses did you use for the application?',
                    choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"]
                },
                {
                    type: 'input',
                    name: 'contributions',
                    message: 'How can other users contribute to this project?',
                },
                {
                    type: 'input',
                    name: 'tests',
                    message: 'How can users do testing on this project?',
                },

                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your GitHub username?',
                },

                {
                    type: 'input',
                    name: 'contact',
                    message: 'What is your email address for other users to contact you?',
                },
            ])
            .then((answers) => {
                const readMeContent = generateReadMe(answers);

                // TODO: Create a function to write README file
                fs.writeFile('Readme.md', readMeContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created Readme.md content!')
                );
            });

}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// Function call to initialize app
init();
