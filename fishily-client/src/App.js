import React , { useEffect, useState } from 'react';
import './App.css';
import Routes from './config/routes';
import Navbar from './components/Navbar';

function App() {

  let [ user , setUser ] = useState({});

  //checks if user is logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } 
  }, []);


  return (
    <div>
    <Navbar user={user} setUser={setUser}/>
      <Routes user={user} setUser={setUser}/>
    </div>
  );
};

export default App;
