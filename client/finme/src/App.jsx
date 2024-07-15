import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Dashboard from './Dashboard/Dashboard';
import Wallets from './Wallets/Wallets';
import Incomes from './Incomes/Incomes';
import Expenses from './Expenses/Expenses';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> {/* Default route*/}
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/wallets" 
          element={
            <ProtectedRoute>
              <Wallets />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/incomes" 
          element={
            <ProtectedRoute>
              <Incomes />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/expenses" 
          element={
            <ProtectedRoute>
              <Expenses />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

