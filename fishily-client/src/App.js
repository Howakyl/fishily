import React , { useEffect, useState } from 'react';
import './App.css';
import Routes from './config/routes';
import Navbar from './components/Navbar';

function App() {

  let [ user , setUser ] = useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser)
    } 
    // else {
    //   console.log(localStorage.getItem("user"));
    // }
  }, []);

  return (
    <div>
    <Navbar user={user} setUser={setUser}/>
      <Routes user={user} setUser={setUser}/>
    </div>
  );
};

export default App;
