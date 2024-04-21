// declaring dependencies and variables
const fs = require('fs');
const {generateMarkdown} = require('./generateMarkdown')

// function to write README file
function makeLog(filename, content){
  fs.writeFile(filename, generateMarkdown(content), (err) => {
    err ? console.log(err) : console.log('README.md created.');
  });
}

// exports file to index.js
module.exports = {makeLog};