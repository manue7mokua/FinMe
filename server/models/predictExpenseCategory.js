const preprocess = require('./preprocessor')
const createFeatureVector = require('./featureVectorExtractor')
const trainModels = require('./trainModel')

// Train models once and reuse them
const { models, categories } = trainModels();

// Function to predict category of an expense based on its description
const predictExpenseCategory = (description) => {
  // Preprocess the input description
  const preprocessedInput = preprocess(description);

  // Convert preprocessed input into a feature vector
  const featureVector = createFeatureVector(preprocessedInput);

  // Get probability predictions from each model
  const probabilities = models.map(model => model.predictSingle(featureVector));

  // Find the category with the maximum probability
  const maxProbabilityIndex = probabilities.indexOf(Math.max(...probabilities));
  const predictedCategory = categories[maxProbabilityIndex];

  return predictedCategory;
}

module.exports = predictExpenseCategory;
