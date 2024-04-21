const fs = require('fs');
const {generateMarkdown} = require('./generateMarkdown')

function makeLog(filename, content){
  fs.writeFile(filename, generateMarkdown(content), (err) => {
    err ? console.log(err) : console.log('README.md created.');
  });
}

module.exports = {makeLog};