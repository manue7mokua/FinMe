const calculateStatistics = (expenses) => {
  const mean = data => data.reduce((sum, value) => sum + value, 0) / data.length;
  const stdDev = data => {
    const meanVal = mean(data);
    return Math.sqrt(data.map(value => (value - meanVal) ** 2).reduce((sum, value) => sum + value, 0) / data.length);
  };

  const quartiles = data => {
    data.sort((a, b) => a - b);
    const q1 = data[Math.floor(data.length * 0.25)];
    const q2 = data[Math.floor(data.length * 0.5)];
    const q3 = data[Math.floor(data.length * 0.75)];
    return { q1, q2, q3 };
  };

  const kurtosis = data => {
    const meanVal = mean(data);
    const n = data.length;
    const variance = stdDev(data) ** 2;
    const fourthMoment = data.map(value => (value - meanVal) ** 4).reduce((sum, value) => sum + value, 0) / n;
    return fourthMoment / variance ** 2 - 3;
  };

  const skewness = data => {
    const meanVal = mean(data);
    const n = data.length;
    const stddev = stdDev(data);
    const thirdMoment = data.map(value => (value - meanVal) ** 3).reduce((sum, value) => sum + value, 0) / n;
    return thirdMoment / stddev ** 3;
  };

  // Extract amounts and calculate statistics
  const amounts = expenses;
  const meanSpending = mean(amounts);
  const stdDeviation = stdDev(amounts);
  const { q1, q2, q3 } = quartiles(amounts);
  const kurt = kurtosis(amounts);
  const skew = skewness(amounts);

  // Define the threshold for outliers as data points that are more than 3 standard deviations from the mean
  const outlierThreshold = 3;

  // Calculate the upper and lower bounds for normal data
  const lowerBound = meanSpending - outlierThreshold * stdDeviation;
  const upperBound = meanSpending + outlierThreshold * stdDeviation;

  const outliers = expenses.filter(expense => {
    const amount = expense.expenseAmount;
    return amount < lowerBound || amount > upperBound;
  });

  // Return calculated statistics
  return { meanSpending, stdDeviation, q1, q2, q3, kurt, skew, outliers };
};

  const predictGoatedInsights = (userStats, allUserStats) => {
    const {
      meanSpending: userMean,
      stdDeviation: userStdDev,
      kurt: userKurtosis,
      skew: userSkewness,
      outliers: userOutliers
    } = userStats;
    
    const {
      meanSpending: allUsersMean,
      stdDeviation: allUsersStdDev,
      kurt: allUsersKurtosis,
      skew: allUsersSkewness,
      outliers: allUsersOutliers,
    } = allUserStats;

    // Count how many outliers are there based on the outlier precalculated bounds
    const userNumOutliers = userOutliers.length;
    const allUsersNumOutliers = allUsersOutliers.length;
  
    const ratioOfAllExpenses = userMean / allUsersMean;
    const ratioOfKurtosis = userKurtosis / allUsersKurtosis;
    const ratioOfstdDev = userStdDev / allUsersStdDev;
    const ratioOfSkewness = userSkewness / allUsersSkewness;
  
    // Define weights dynamically
    const weightOutliers = userNumOutliers / (userNumOutliers + allUsersNumOutliers) || 1;
    const weightAllExpenses = ratioOfAllExpenses / (ratioOfAllExpenses + 1);
    const weightKurtosis = ratioOfKurtosis / (ratioOfKurtosis + 1);
    const weightSkewness = Math.abs(ratioOfSkewness) / (Math.abs(ratioOfSkewness) + 1);
  
    // Calculate probability of outlier expense next month
    const probability = weightOutliers * 0.4 + weightAllExpenses * 0.2 + weightKurtosis * 0.2 + weightSkewness * 0.2;

    // Normalize probability to fall between 0 and 1
    const normalizedProbability = Math.min(Math.max(probability, 0), 1);
  
    const insights = [];
  
    if (normalizedProbability > 0.75) {
      const outlierDetails = userOutliers.map(outlier => outlier.expenseName).join(', ');
      insights.push(`You are likely to overspend next month. This is because you had ${userOutliers.length} outliers compared to ${allUserOutliers.length} total outliers for users. The outliers in your expenses are: ${outlierDetails}.`);
    } else if (normalizedProbability > 0.5 && normalizedProbability <= 0.75) {
      insights.push(`There is a moderate chance you might overspend next month. Consider reviewing your recent spending habits and setting a budget.`);
    } else {
      insights.push(`Your spending is stable. Keep up the good financial habits and continue monitoring your expenses.`);
    }
  
    return { probability: normalizedProbability, insights };
  };

// Function to calculate benchmarks for all users (for comparison purposes)
const calculateAllUserStats = (allUserExpenses) => {
    const allUserAmounts = allUserExpenses.map(expense => expense.expenseAmount);
    const allUserStats = calculateStatistics(allUserAmounts);
    allUserStats.outliers = allUserExpenses.filter(expense => 
      expense.expenseAmount < allUserStats.meanSpending - 2 * allUserStats.stdDeviation ||
      expense.expenseAmount > allUserStats.meanSpending + 2 * allUserStats.stdDeviation
  );

  return allUserStats;
};
  
module.exports = { calculateStatistics, predictGoatedInsights, calculateAllUserStats }