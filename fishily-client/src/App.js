import React from 'react';
import routes from './config/routes';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
      { routes }
    </div>
  );
};

export default App;
