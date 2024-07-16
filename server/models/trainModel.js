const LinearRegression = require('./linearRegression');
const preprocessDataset = require('./preprocessDataset');

const trainModel = () => {
    const { features, labels } = preprocessDataset();
    const model = new LinearRegression();
    model.train(features, labels);
    return model;
  }

module.exports = trainModel;