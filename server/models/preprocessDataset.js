const preprocess = require('./preprocessor')
const { bagOfWords, trainingDataset } = require('../data/trainingDataset')

const preprocessDataset = () => {
    const categories = ["Food", "Entertainment", "Transport", "Bills", "Personal"];
    const wordToCategory = {};

    Object.keys(bagOfWords).forEach(category => {
      bagOfWords[category].forEach(word => {
        wordToCategory[word] = category;
      });
    });

    const features = [];
    const labels = [];
    const label = [];

    Object.keys(trainingDataset).forEach((category, categoryIndex) => {
      trainingDataset[category].forEach(text => {
        const preprocessedText = preprocess(text);
        const featureVector = Array(categories.length).fill(0);

        preprocessedText.forEach(stemmedWord => {
          const wordCategory = wordToCategory[stemmedWord];
          if (wordCategory) {
            const index = categories.indexOf(wordCategory);
            featureVector[index] += 1;
          }
        });

        features.push(featureVector);
        const labelIndex = categories.indexOf(category)
        label.push(labelIndex)
      });

      labels.push(label); 
    });

    return { features, labels, categories };
}

module.exports = preprocessDataset