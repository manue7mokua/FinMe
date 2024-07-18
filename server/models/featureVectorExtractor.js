import dataset from '../data/trainingDataset';

// Create a word-to-category mapping
const wordToCategory = {};
Object.keys(dataset).forEach(category => {
  dataset[category].forEach(word => {
    wordToCategory[word] = category;
  });
});

// Convert preprocessed input to binary vector
 export function createFeatureVector(preprocessedInput) {
  const categories = ["Food", "Entertainment", "Transport", "Bills", "Personal"];
  const featureVector = Array(categories.length).fill(0);

  preprocessedInput.forEach(word => {
    const category = wordToCategory[word];
    if (category) {
      const index = categories.indexOf(category);
      featureVector[index] = 1;
    }
  });

  return featureVector;
}
