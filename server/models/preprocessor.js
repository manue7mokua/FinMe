const stopword = require('stopword');
const stemmer = require('stemmer');

function preprocess(text) {
  // Convert text to lowercase and split into words
  let words = text.toLowerCase().split(/\W+/);
  // Remove stop words
  words = stopword.removeStopwords(words);
  // Stem the words
  words = words.map(word => stemmer(word));
  return words;
}

module.exports = preprocess;
