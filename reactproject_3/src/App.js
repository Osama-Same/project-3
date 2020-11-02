import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link}from "react-router-dom";
import axios from 'axios';
import Home from './Component/Home';
import Users from './Component/Users';
import Data from './Component/DataBase';
import './App.css';


 


const App =()=>{
  
   
    return (
      
      <Router>
       
      <div className="header">
        <div className='main'>
          <nav>
              <Link to="/home">Home</Link>
              <Link to="/users">Users</Link>
              <Link to="/data">Data bace</Link>
          </nav>
          </div>
          <Route exact path='/home' component={Home}></Route>
        <Route  path='/users' component={Users}>
        </Route> 
        <Route exact path='/data' component={Data}></Route> 
</div>  
       </Router>
    
    )
    }
    export default App;

