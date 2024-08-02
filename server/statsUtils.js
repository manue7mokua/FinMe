const calculateStatistics = (expenses) => {
  // Function to calculate the mean of a dataset
  const mean = data => data.reduce((sum, value) => sum + value, 0) / data.length;

  // Function to calculate the standard deviation of a dataset
  const stdDev = data => {
    const meanVal = mean(data);
    return Math.sqrt(data.map(value => (value - meanVal) ** 2).reduce((sum, value) => sum + value, 0) / data.length);
  };

  // Function to calculate quartiles (Q1, Q2, Q3) of a dataset
  const quartiles = data => {
    data.sort((a, b) => a - b);
    const q1 = data[Math.floor(data.length * 0.25)];
    const q2 = data[Math.floor(data.length * 0.5)];
    const q3 = data[Math.floor(data.length * 0.75)];
    return { q1, q2, q3 };
  };

  // Function to calculate the kurtosis of a dataset
  const kurtosis = data => {
    const meanVal = mean(data);
    const n = data.length;
    const variance = stdDev(data) ** 2;
    const fourthMoment = data.map(value => (value - meanVal) ** 4).reduce((sum, value) => sum + value, 0) / n;
    return fourthMoment / variance ** 2 - 3;
  };

  // Function to calculate the skewness of a dataset
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

  // Identify outliers in the dataset
  const outliers = expenses.filter(expense => {
    const amount = expense.expenseAmount;
    return amount < lowerBound || amount > upperBound;
  });

  // Return calculated statistics
  return { meanSpending, stdDeviation, q1, q2, q3, kurt, skew, outliers, numExpenses: expenses.length };
};

  const predictGoatedInsights = (userStats, allUserStats) => {
    const {
      meanSpending: userMean,
      stdDeviation: userStdDev,
      kurt: userKurtosis,
      skew: userSkewness,
      outliers: userOutliers,
      numExpenses: userNumExpenses
    } = userStats;
    
    const {
      meanSpending: allUsersMean,
      stdDeviation: allUsersStdDev,
      kurt: allUsersKurtosis,
      skew: allUsersSkewness,
      outliers: allUsersOutliers,
      numExpenses: allUsersNumExpenses
    } = allUserStats;

    // Count how many outliers are there based on the outlier precalculated bounds
    const userNumOutliers = userOutliers.length;
    const allUsersNumOutliers = allUsersOutliers.length;
  
    // Calculate ratios for comparison
    const ratioOfAllExpenses = userNumExpenses / allUsersNumExpenses;
    const ratioOfKurtosis = userKurtosis / allUsersKurtosis;
    const ratioOfstdDev = userStdDev / allUsersStdDev;
    const ratioOfSkewness = userSkewness / allUsersSkewness;
    const ratioOfTotalExpenseAmounts = userMean / allUsersMean;
  
    // Define metric weights dynamically
    const weightOutliers = userNumOutliers / (userNumOutliers + allUsersNumOutliers) || 1;
    const weightExpenses = ratioOfAllExpenses / (ratioOfAllExpenses + 1);
    const weightKurtosis = ratioOfKurtosis / (ratioOfKurtosis + 1);
    const weightSkewness = Math.abs(ratioOfSkewness) / (Math.abs(ratioOfSkewness) + 1);
    const weightStdDev = ratioOfstdDev / (ratioOfstdDev + 1);
    const weightExpenseAmount = ratioOfTotalExpenseAmounts / (ratioOfTotalExpenseAmounts + 1);
  
    // Calculate probability of outlier expense next month (bias each weight amount[Risk Assessment Theory])
    const probability = weightOutliers * 0.3 + weightExpenseAmount * 0.15 + weightExpenses * 0.1 + weightKurtosis * 0.2 + weightSkewness * 0.15 + weightStdDev * 0.1;

    // Normalize probability to fall between 0 and 1
    const normalizedProbability = Math.min(Math.max(probability, 0), 1);
  
    const insights = [];
  
    // Generate insights based on the calculated probability
    if (normalizedProbability > 0.75) {
      const outlierDetails = userOutliers.map(outlier => outlier.expenseName).join(', ');
      insights.push(`You are likely to overspend next month. This is because you had ${userOutliers.length} outliers compared to ${allUsersOutliers.length} total outliers for users. The outliers in your expenses are: ${outlierDetails}.`);
    } else if (normalizedProbability > 0.5) {
      insights.push(`There is a moderate chance you might overspend next month. Consider reviewing your recent spending habits and setting a budget.`);
    } else {
      insights.push(`Your spending is stable. Keep up the good financial habits and continue monitoring your expenses.`);
    }

    if (weightOutliers > 0.5) {
      insights.push("You've had several unusually high expenses recently. Try to identify and limit these outliers.");
    } else {
      insights.push("You have a controlled spending pattern with minimal outliers. Keep maintaining your budget.");
    }
  
    if (weightKurtosis > 0.5) {
      insights.push("Your spending shows signs of extreme values. Consider analyzing and managing these large expenses.");
    } else {
      insights.push("Your spending is evenly distributed without extreme values. This indicates a balanced approach to spending.");
    }
  
    if (weightSkewness > 0.5) {
      insights.push("You have a few very high expenses. Aim to balance your spending to avoid financial strain.");
    } else {
      insights.push("Your spending is evenly distributed. Keep up the balanced approach to your finances.");
    }
  
    if (weightStdDev > 0.5) {
      insights.push("Your spending varies significantly. Strive for more consistent spending habits to improve financial stability.");
    } else {
      insights.push("Your spending is consistent. Continue to maintain this stability in your finances.");
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