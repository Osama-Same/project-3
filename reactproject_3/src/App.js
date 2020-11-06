
import {BrowserRouter as Router,Route,Link ,Redirect}from "react-router-dom";
import Home from './Component/Home';
import SigIn from './Component/SigIn';
import About from './Component/Abouts';
import log_in from './Component/Login'
import ContactIs from './Component/ContactUs'
import './App.css';
import React, { useState, useEffect } from 'react';


const App =()=>{
  const[Islogin,setIslogin]=useState(false) 
  return (
      
      <Router>
       
      <div>
        <div className='main1'>
          
          <nav>
              <Link to="/Home">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact Us</Link>
          </nav>
          </div>
          <div className="main2">
          <nav>
              <Link to="/Login">Login</Link>
              <Link to="/SignIn">Sign In</Link>
          </nav>
          </div>
          <Route exact path="/Home" component={Home}></Route>
          
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Contact" component={ContactIs}></Route>
          <Route exact path='/SignIn' component={SigIn}></Route>
          <Route exact path='/Login' component={log_in}></Route>
          
          
         </div>  
         {Islogin ? (<log_in/>) : (<div><p>login first to have access tot he date</p></div>)}
       </Router>
    
    )
    }
    export default App;

