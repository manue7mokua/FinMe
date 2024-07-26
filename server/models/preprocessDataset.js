const preprocess = require('./preprocessor')
const { bagOfWords, trainingDataset } = require('../data/trainingDataset')

// Function to preprocess the entire dataset
const preprocessDataset = () => {
    const categories = ["Food", "Entertainment", "Transport", "Bills", "Personal"];
    const wordToCategory = {};

    // Create a word-to-category mapping
    Object.keys(bagOfWords).forEach(category => {
      bagOfWords[category].forEach(word => {
        wordToCategory[word] = category;
      });
    });

    const features = [];
    const labels = [];
    const label = [];

    // Process each text in the training set
    Object.keys(trainingDataset).forEach((category, categoryIndex) => {
      trainingDataset[category].forEach(text => {
        const preprocessedText = preprocess(text);
        const featureVector = Array(categories.length).fill(0);

        // Create a feature vector based on the word-to-category mapping
        preprocessedText.forEach(stemmedWord => {
          const wordCategory = wordToCategory[stemmedWord];
          if (wordCategory) {
            const index = categories.indexOf(wordCategory);
            featureVector[index] += 1;
          }
        });

        // Add the feature vector to the features array
        features.push(featureVector);

        // Add the label (category index) ot the labels array
        const labelIndex = categories.indexOf(category)
        label.push(labelIndex)
      });

      labels.push(label); 
    });

    return { features, labels, categories };
}

module.exports = preprocessDataset