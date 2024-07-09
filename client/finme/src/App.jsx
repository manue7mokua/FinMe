import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Dashboard from './Dashboard/Dashboard';
import Wallets from './Wallets/Wallets';

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
      </Routes>

    </Router>
  )
}

export default App;
