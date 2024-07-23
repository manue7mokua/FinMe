const preprocess = require('./preprocessor')
const createFeatureVector = require('./featureVectorExtractor')
const trainModels = require('./trainModel')

// Train models once and reuse them
const { models, categories } = trainModels();

const predictExpenseCategory = (description) => {
  const preprocessedInput = preprocess(description);
  const featureVector = createFeatureVector(preprocessedInput);
  const probabilities = models.map(model => model.predictSingle(featureVector));

  // Find the category with the maximum probability
  const maxProbabilityIndex = probabilities.indexOf(Math.max(...probabilities));
  const predictedCategory = categories[maxProbabilityIndex];

  return predictedCategory;
}

module.exports = predictExpenseCategory;
