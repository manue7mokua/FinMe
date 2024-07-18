import MultinomialLogisticRegression from './regressionModel';
import preprocessDataset from './preprocessDataset';

export default function trainModel() {
    const { features, labels } = preprocessDataset();
    const model = new MultinomialLogisticRegression();
    model.train(features, labels);
    return model;
  }
