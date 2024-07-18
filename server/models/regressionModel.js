export default class MultinomialLogisticRegression {
    constructor() {
      this.weights = null;
    }
  
    train(features, labels) {
      const learningRate = 0.01;
      const epochs = 1000;
      const numFeatures = features[0].length;
      const numClasses = labels[0].length;
  
      // Initialize weights
      this.weights = Array.from({ length: numClasses }, () => Array(numFeatures).fill(0).map(() => Math.random() * 0.01));

      for (let epoch = 0; epoch < epochs; epoch++) {
        for (let i = 0; i < features.length; i++) {
          const prediction = this.predictSingle(features[i]);
          const error = labels[i].map((y, k) => y - prediction[k]);
  
          // Update weights
          for (let k = 0; k < numClasses; k++) {
            for (let j = 0; j < numFeatures; j++) {
              this.weights[k][j] += learningRate * error[k] * features[i][j];
            }
          }
        }
      }
    }
  
    predict(features) {
      return features.map(feature => this.predictSingle(feature));
    }

    predictSingle(feature) {
      const z = this.weights.map(weightsForClass => feature.reduce((sum, x_j, j) => sum + x_j * weightsForClass[j], 0));
      const expZ = z.map(Math.exp);
      const sumExpZ = expZ.reduce((sum, value) => sum + value, 0);
      return expZ.map(value => value / sumExpZ);
    }    
  }
  

  