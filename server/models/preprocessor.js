const stopword = require('stopword');
const stemmer = require('stemmer');

function preprocess(text) {
  // Convert text to lowercase and split into words
  let words = text.toLowerCase().split(/\W+/);
  
}

module.exports = preprocess;
