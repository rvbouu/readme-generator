const { makeLog } = require('./lib/log');
const { readMeQuestions } = require('./lib/questions');

function init() {
  readMeQuestions().then((content) => makeLog('./lib/exampleREADME.md', content));
}
init();