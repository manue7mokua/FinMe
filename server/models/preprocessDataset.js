import preprocess from './preprocessor';
import { bagOfWords, trainingDataset } from '../data/trainingDataset';

export default function preprocessDataset() {
    const categories = ["Food", "Entertainment", "Transport", "Bills", "Personal"];
    const wordToCategory = {};
  
    Object.keys(bagOfWords).forEach(category => {
      bagOfWords[category].forEach(word => {
        wordToCategory[word] = category;
      });
    });
  
    const features = [];
    const labels = [];
  
    Object.keys(dataset).forEach((category, categoryIndex) => {
      dataset[category].forEach(text => {
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
        labels.push(categoryIndex);
      });
    });
    
    return { features, labels, categories };
  }
