class MultinomialLogisticRegression {
  constructor() {
    this.weights = null; // Initialize weights to null
  }

  train(features, binarylabels) {
    const learningRate = 0.01; // Learning rate for gradient descent
    const epochs = 1000; // Number of epochs for training
    const numFeatures = features[0].length; // Get number of features

    // Initialize weight to random values (break symmetry)
    this.weights = Array(numFeatures).fill(0).map(() => Math.random() * 0.01);

    for (let epoch = 0; epoch < epochs; epoch++) {
      for (let i = 0; i < features.length; i++) {
        // Predict probability for the current feature vector
        const prediction = this.predictSingle(features[i]);
        
        // Calculate the error in prediction
        const error = binarylabels[i] - prediction

        // Update the weights using the gradient descent update rule
        for (let j = 0; j < numFeatures; j++) {
          this.weights[j] += learningRate * error * features[i][j];
        }
      }
    }
  }

  // Predict the probabilities for multiple feature vectors
  predict(features) {
    return features.map(feature => this.predictSingle(feature));
  }

  // Predict the probability for a single feature vector
  predictSingle(feature) {
    // Calculate the linear combination of features and weights (dot product)
    const linearCombination = feature.reduce((sum, x_j, j) => sum + x_j * this.weights[j], 0)

    // Apply the sigmoid function to get the probability
    const probability = 1 / (1 + Math.exp(-linearCombination))
    return probability;
  }

}

module.exports = MultinomialLogisticRegression;

  

  