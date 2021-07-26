// TODO: Create a function that returns a license badge based on which license is passed in
function renderlicenseBadge(license) {

  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };

  if (license === "GNU General Public License 2.0") {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`

  };
  if (license === "Apache License 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`

  };
  if (license === "GNU General Public License 3.0") {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`

  };
  return ""
};
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributions)
  5. [Tests](#tests)
  6. [License](#license)
  7. [GitHub](#github)
  8. [E-mail](#contact)

## Description
${data.description} 
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributions}
## Tests
${data.tests}
## License
${renderlicenseBadge(data.licenses)}
## GitHub
${data.github}
## E-mail
${data.contact}`
}

module.exports = generateMarkdown;

//test code to make sure each section is working
// console.log(renderlicenseBadge("MIT"));

// const test = {
//   contact: "test",
//   github: "gittest",
//   tests: "testing",
//   contributions: "ttt",
//   description: "ttxxt",
//   title: "cccc",
//   installation: "yyy",
//   usage: "oooo",
// }
// console.log(generateMarkdown(test));