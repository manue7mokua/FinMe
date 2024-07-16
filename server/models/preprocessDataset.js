const preprocessor = require('./preprocessor');
const dataset = require('../data/dataset.json');

const preprocessDataset = () => {
    const categories = ["Food", "Entertainment", "Transport", "Bills", "Personal"];
    const wordToCategory = {};
  
    Object.keys(dataset).forEach(category => {
      dataset[category].forEach(word => {
        wordToCategory[word] = category;
      });
    });
  
    const features = [];
    const labels = [];
  
    Object.keys(dataset).forEach((category, categoryIndex) => {
      dataset[category].forEach(word => {
        const preprocessedWord = preprocess(word);
        const featureVector = Array(categories.length).fill(0);
  
        preprocessedWord.forEach(stemmedWord => {
          const wordCategory = wordToCategory[stemmedWord];
          if (wordCategory) {
            const index = categories.indexOf(wordCategory);
            featureVector[index] = 1;
          }
        });
  
        features.push(featureVector);
        labels.push(categoryIndex);
      });
    });
  
    return { features, labels, categories };
  }