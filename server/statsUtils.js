export const calculateStatistics = (expenses) => {
  const benchmark = {
    Food: {
      Groceries: {
        mean: 200,
        stdDev: 30,
        q1: 180,
        median: 200,
        q3: 220
      },
      'Dining Out': {
        mean: 150,
        stdDev: 50,
        q1: 100,
        median: 150,
        q3: 200
      }
    },
    Transport: {
      'Public Transport': {
        mean: 75,
        stdDev: 20,
        q1: 60,
        median: 75,
        q3: 90
      },
      'Gas and Car Maintenance': {
        mean: 150,
        stdDev: 50,
        q1: 120,
        median: 150,
        q3: 180
      },
      'Ride-sharing': {
        mean: 45,
        stdDev: 15,
        q1: 30,
        median: 45,
        q3: 60
      }
    },
    Bills: {
      Rent: {
        mean: 900,
        stdDev: 200,
        q1: 750,
        median: 900,
        q3: 1050
      },
      Utilities: {
        mean: 150,
        stdDev: 30,
        q1: 130,
        median: 150,
        q3: 170
      },
      'Phone Bill': {
        mean: 60,
        stdDev: 10,
        q1: 50,
        median: 60,
        q3: 70
      }
    },
    Personal: {
      Clothing: {
        mean: 100,
        stdDev: 50,
        q1: 75,
        median: 100,
        q3: 125
      },
      'Personal Care': {
        mean: 40,
        stdDev: 10,
        q1: 30,
        median: 40,
        q3: 50
      },
      Fitness: {
        mean: 40,
        stdDev: 20,
        q1: 30,
        median: 40,
        q3: 50
      }
    },
    Entertainment: {
      Subscriptions: {
        mean: 30,
        stdDev: 10,
        q1: 20,
        median: 30,
        q3: 40
      },
      Activities: {
        mean: 45,
        stdDev: 15,
        q1: 30,
        median: 45,
        q3: 60
      },
      Hobbies: {
        mean: 35,
        stdDev: 10,
        q1: 25,
        median: 35,
        q3: 45
      }
    }
  };

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

  // Calculate averages for each category in the benchmark
  const calculateCategoryAverages = categoryData => {
    const subCategories = Object.values(categoryData);
    const mean = subCategories.map(sub => sub.mean).reduce((sum, value) => sum + value, 0) / subCategories.length;
    const stdDev = subCategories.map(sub => sub.stdDev).reduce((sum, value) => sum + value, 0) / subCategories.length;
    const q1 = subCategories.map(sub => sub.q1).reduce((sum, value) => sum + value, 0) / subCategories.length;
    const median = subCategories.map(sub => sub.median).reduce((sum, value) => sum + value, 0) / subCategories.length;
    const q3 = subCategories.map(sub => sub.q3).reduce((sum, value) => sum + value, 0) / subCategories.length;
    return { mean, stdDev, q1, median, q3 };
  };

  const categoryAverages = {};
  for (const category in benchmark) {
    categoryAverages[category] = calculateCategoryAverages(benchmark[category]);
  }

  // Extract amounts and calculate statistics
  const amounts = expenses.map(expense => expense.expenseAmount);
  const meanSpending = mean(amounts);
  const stdDeviation = stdDev(amounts);
  const { q1, q2, q3 } = quartiles(amounts);
  const kurt = kurtosis(amounts);
  const skew = skewness(amounts);

  // Insights based on calculated statistics
  const insights = [];

  if (meanSpending > categoryAverages[expenses[0].expenseType].mean) {
    insights.push(`${expenses[0].expenseType}:Spending Habits Analysis:Your spending is significantly higher than the average user in your age group. Consider evaluating your spending habits.`);
  }
  if (q3 > categoryAverages[expenses[0].expenseType].q3) {
    insights.push(`${expenses[0].expenseType}:Quartile Ranking:You are in the upper quartile for certain expense categories. You might be overspending compared to your peers.`);
  }
  if (q1 < categoryAverages[expenses[0].expenseType].q1) {
    insights.push(`${expenses[0].expenseType}:Quartile Ranking:You are in the lower quartile for essential categories. Ensure you are not under-spending in critical areas.`);
  }
  if (stdDeviation > categoryAverages[expenses[0].expenseType].stdDev) {
    insights.push(`${expenses[0].expenseType}:Spending Stability:Your spending shows high variability, indicating irregular spending habits. Consider building a larger emergency fund.`);
  }
  if (kurt > 0) {
    insights.push(`${expenses[0].expenseType}:Risk of Extreme Spending:Your spending has high kurtosis, indicating occasional large, irregular purchases. Review and justify these purchases to avoid financial strain.`);
  }
  if (skew > 0) {
    insights.push(`${expenses[0].expenseType}:Spending Bias:You have occasional large expenses. Plan for these to avoid financial shocks.`);
  } else {
    insights.push(`${expenses[0].expenseType}:Spending Bias:You have frequent small expenses. Be aware of their cumulative impact on your overall budget.`);
  }

  // Overall category benchmark comparisons
  const totalCategoryExpenses = {};
  expenses.forEach(expense => {
    if (!totalCategoryExpenses[expense.expenseType]) {
      totalCategoryExpenses[expense.expenseType] = [];
    }
    totalCategoryExpenses[expense.expenseType].push(expense.expenseAmount);
  });

  Object.keys(totalCategoryExpenses).forEach(category => {
    const categoryAmounts = totalCategoryExpenses[category];
    const categoryTotal = categoryAmounts.reduce((sum, amount) => sum + amount, 0);
    const categoryMean = mean(categoryAmounts);

    const categoryBenchmark = categoryAverages[category];
    if (categoryBenchmark) {
      if (categoryMean < categoryBenchmark.q1) {
        insights.push(`${category}:Overall Category Benchmark Comparison:Your total spending in ${category} is below the lower quartile of average spending.`);
      } else if (categoryMean > categoryBenchmark.q3) {
        insights.push(`${category}:Overall Category Benchmark Comparison:Your total spending in ${category} is above the upper quartile of average spending.`);
      }
    }
  });

  return insights;
};
  