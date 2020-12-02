import React , { useState } from 'react';
import './App.css';
import Routes from './config/routes';
import Navbar from './components/Navbar';

function App() {

  let [ user , setUser ] = useState({});

  return (
    <div>
    <Navbar />
      <Routes user={user} setUser={setUser}/>
    </div>
  );
};

export default App;
