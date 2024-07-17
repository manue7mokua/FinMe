import LinearRegression from './linearRegression';
import preprocessDataset from './preprocessDataset';

export default function trainModel() {
    const { features, labels } = preprocessDataset();
    const model = new LinearRegression();
    model.train(features, labels);
    return model;
  }