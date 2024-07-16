const dataset = require('../data/dataset.json');

// Create a word-to-category mapping
const wordToCategory = {};
Object.keys(dataset).forEach(category => {
  dataset[category].forEach(word => {
    wordToCategory[word] = category;
  });
});


module.exports = createFeatureVector;
