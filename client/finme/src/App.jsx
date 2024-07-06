import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/login' Component={SignIn} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/' Component={SignIn} /> {/* Default route*/}
      </Routes>

    </Router>
  )
}

export default App;
