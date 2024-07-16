class LinearRegression {
    constructor() {
      this.weights = null;
    }
  
    train(features, labels) {
      const learningRate = 0.01;
      const epochs = 1000;
      const numFeatures = features[0].length;
      const numSamples = features.length;
  
      // Initialize weights
      this.weights = Array(numFeatures).fill(0);
  
      for (let epoch = 0; epoch < epochs; epoch++) {
        for (let i = 0; i < numSamples; i++) {
          const prediction = this.predictSingle(features[i]);
          const error = labels[i] - prediction;
  
          // Update weights
          for (let j = 0; j < numFeatures; j++) {
            this.weights[j] += learningRate * error * features[i][j];
          }
        }
      }
    }
  
    predict(features) {
      return features.map(feature => this.predictSingle(feature));
    }
  
    predictSingle(feature) {
      return feature.reduce((sum, value, index) => sum + value * this.weights[index], 0);
    }
  }
  
module.exports = LinearRegression;
  