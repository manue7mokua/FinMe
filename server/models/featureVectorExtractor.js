const { bagOfWords } = require('../data/trainingDataset')

// Create a word-to-category mapping
const wordToCategory = {};
Object.keys(bagOfWords).forEach(category => {
  bagOfWords[category].forEach(word => {
    wordToCategory[word] = category;
  });
});

// Convert preprocessed input to binary vector
const createFeatureVector = (preprocessedInput) => {
  const categories = ["Food", "Entertainment", "Transport", "Bills", "Personal"];
  const featureVector = Array(categories.length).fill(0);

  // Iterate over each word in the preprocessed input
  preprocessedInput.forEach(word => {
    const category = wordToCategory[word];
    if (category) {
      const index = categories.indexOf(category);
      featureVector[index] += 1; // Increment count for the corresponding category
    }
  });

  return featureVector;
}

module.exports = createFeatureVector