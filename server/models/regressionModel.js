class MultinomialLogisticRegression {
  constructor() {
    this.weights = null;
  }

  train(features, binarylabels) {
    const learningRate = 0.01;
    const epochs = 1000;
    const numFeatures = features[0].length;
    this.weights = Array(numFeatures).fill(0).map(() => Math.random() * 0.01);

    for (let epoch = 0; epoch < epochs; epoch++) {
      for (let i = 0; i < features.length; i++) {
        const prediction = this.predictSingle(features[i]);
        const error = binarylabels[i] - prediction

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
    const linearCombination = feature.reduce((sum, x_j, j) => sum + x_j * this.weights[j], 0)
    const probability = 1 / (1 + Math.exp(-linearCombination))
    return probability;
  }

}

module.exports = MultinomialLogisticRegression;

  

  