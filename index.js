// declaring dependencies and variables
const { makeLog } = require('./lib/log');
const { readMeQuestions } = require('./lib/questions');

// function to initialize program
function init() {
  // calls readMeQuestions function to prompt the user for input then passes the values to makeLog function
  // makeLog function saves generated README file to lib folder
  readMeQuestions().then((content) => makeLog('./lib/exampleREADME.md', content));
}

// calls init() function to run the program
init();