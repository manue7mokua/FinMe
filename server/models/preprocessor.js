const { removeStopwords } = require('stopword');
const { stem } = require('porter2');

const preprocess = (text) => {
  // Convert text to lowercase and split into words
  let words = text.toLowerCase().split(/\W+/);
  // Remove stop words
  words = removeStopwords(words);
  // Stem the words
  words = words.map(word => stem(word));
  return words;
}

module.exports = preprocess
