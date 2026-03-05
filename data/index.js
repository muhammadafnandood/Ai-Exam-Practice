// Data index - exports all question data
const chapter1 = require('./chapter1');
const chapter2 = require('./chapter2');
const chapter3 = require('./chapter3');
const chapter4 = require('./chapter4');
const chapter5 = require('./chapter5');
const chapter6 = require('./chapter6');
const practiceQuestions = require('./practiceQuestions');

module.exports = {
  chapters: [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6],
  practiceQuestions
};
