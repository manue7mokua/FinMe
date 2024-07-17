import React, { useState, useEffect } from 'react';
import axios from 'axios';
import preprocess from '../../../../server/models/preprocessor';
import { createFeatureVector } from '../../../../server/models/featureVectorExtractor';
import trainModel from '../../../../server/models/trainModel';
import preprocessDataset from '../../../../server/models/preprocessDataset';

const AddExpenseModal = ({ isOpen, onClose, refreshExpenses }) => {
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [dateofExpense, setDateofExpense] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [bankAccountName, setBankAccountName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [model, setModel] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const { features, labels, categories } = preprocessDataset();
    const trainedModel = trainModel(features, labels);
    setModel(trainedModel);
    setCategories(categories);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).id; // Decoding JWT to get user ID

    // Predict the expense category
    if (model) {
      const preprocessedInput = preprocess(expenseDescription);
      const featureVector = createFeatureVector(preprocessedInput);
      const predictedCategoryIndex = model.predict([featureVector])[0];
      const predictedCategory = categories[Math.round(predictedCategoryIndex)];
      setExpenseCategory(predictedCategory);

      console.log(predictedCategory);
    }


    try {
      const response = await axios.post(`http://localhost:5000/users/${userId}/addExpense`, {
        expenseType: expenseCategory,
        expenseName,
        expenseAmount,
        expenseDescription,
        dateofExpense,
        isRecurring,
        bankAccountName,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setSuccess('Expense added successfully');
        refreshExpenses();
        onClose();
      } else {
        setError('Failed to add expense');
      }
    } catch (err) {
      setError('Failed to add expense');
      console.error('Error adding expense:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Expense</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <textarea
            placeholder="Expense Description"
            value={expenseDescription}
            onChange={(e) => setExpenseDescription(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="date"
            value={dateofExpense}
            onChange={(e) => setDateofExpense(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="text"
            placeholder="Bank Account Name"
            value={bankAccountName}
            onChange={(e) => setBankAccountName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <input
            type="number"
            placeholder="Expense Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={() => setIsRecurring(!isRecurring)}
              className="mr-2"
            />
            <label>Is Recurring?</label>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">Add Expense</button>
        </form>
        <button onClick={onClose} className="w-full p-2 bg-red-500 text-white rounded-lg mt-2">Close</button>
      </div>
    </div>
  );
};

export default AddExpenseModal;
