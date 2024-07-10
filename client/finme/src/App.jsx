import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Dashboard from './Dashboard/Dashboard';
import Wallets from './Wallets/Wallets';
import Incomes from './Incomes/Incomes';
import Expenses from './Expenses/Expenses';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' Component={SignIn} /> {/* Default route*/}
        <Route path='/login' Component={SignIn} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/wallets' Component={Wallets} />
        <Route path='/incomes' Component={Incomes} />
        <Route path='/expenses' Component={Expenses} />
      </Routes>

    </Router>
  )
}

export default App;
