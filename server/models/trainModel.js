const MultinomialLogisticRegression = require('./regressionModel');
const preprocessDataset = require('./preprocessDataset');

const trainModels = () => {
    const { features, labels, categories } = preprocessDataset();
    const models = categories.map((category, index) => {
        return new MultinomialLogisticRegression();
    });

    models.forEach((model, index) => {
        const binaryLabels = labels[0].map(label => label == index ? 1 : 0);
        model.train(features, binaryLabels);
    });
    return { models, categories };
}

module.exports = trainModels;