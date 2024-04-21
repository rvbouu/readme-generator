// declaring dependencies and variables
const inquirer = require('inquirer');

// array of questions for user
const readMeQuestions = () => inquirer.prompt([
  {
    type: 'input',
    message: 'Enter the title of your project.',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Please describe your project.',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter any installation instruction you may have for the project.',
    name: 'install'
  },
  {
    type: 'input',
    message: 'Enter any usage information you have for the project.',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Please list contirbutors for this project.',
    name: 'contributions'
  },
  {
    type: 'input',
    message: 'Enter any test instructions that you have for the project.',
    name: 'tests'
  },
  {
    type: 'list',
    message: 'Choose a license for your project.',
    name: 'license',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
  },
  {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'github'
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email'
  }
])

// exports file to index.js
module.exports = {readMeQuestions}