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
        
        // Create binary labels for each category
        const label = Array(categories.length).fill(0);
        label[categoryIndex] = 1;
        labels.push(label);
      });
    });
    
    return { features, labels, categories };
  }
