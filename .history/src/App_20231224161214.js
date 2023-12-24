import React from 'react';
import { BrowserRouter as Router, Route, Routes, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Assuming Home.js is in the pages directory
import SignIn from './components/SignIn';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes setup for different pages */}
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          {/* Include additional routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
