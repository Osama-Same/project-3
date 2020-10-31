import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link}from "react-router-dom";
import axios from 'axios';
import Home from './Component/Home';
import Abouts from './Component/Abouts';
import Users from './Component/Users';
import Data from './Component/DataBase';
import './App.css';

export default class App extends Component {
 constructor(props){
   super(props);
   this.state={
     tasks:[],
     data:[],
     isLoggedIn: false
   }
 }
 getAllUsers = () => {
  axios
    .get('http://localhost:5000/Users/Get')
    .then((response) => {
      console.log('DATA: ', response.data);
      this.setState({tasks: response.data}) 
    })
    .catch((err) => {
      console.log('RESULT: ', err);
    });
};
getAllDelete = () => {
  axios
    .delete('http://localhost:5000/Users/Delete')
    .then((response) => {
      console.log('DATA: ', response.data);
      const newArray=[...this.state.tasks];
      newArray.shift(response.data);
      this.setState({tasks:newArray});

    })
    .catch((err) => {
      console.log('RESULT: ', err);
    });
};
getAllUpdate = () => {
  axios
    .put('http://localhost:5000/Users/Update')
    .then((response) => {
      console.log('DATA: ', response.data);
      const newArray=[...this.state.tasks];
      this.setState({tasks:newArray});

    })
    .catch((err) => {
      console.log('RESULT: ', err);
    });
};
getAllCreate = () => {
  axios
    .post('http://localhost:5000/Users/Create')
    .then((response) => {
      console.log('DATA: ', response.data);
      const newArray=[...this.state.tasks];
       newArray.push(response.data)
      this.setState({tasks:newArray});

    })
    .catch((err) => {
      console.log('RESULT: ', err);
    });
};


  render() {
    
    return (
      
      <Router>
       
      <div className="header">
        <div className='main'>
          <nav>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
              <Link to="/data">Data bace</Link>
          </nav>
          </div>
          <Route exact path='/home' component={Home}></Route>
        <Route exact path='/about' component={Abouts}></Route>
        <Route  path='/users' component={Users}>
        <Users get={this.getAllUsers} up={this.getAllUpdate} Create={this.getAllCreate} Delete={this.getAllDelete} /></Route> 
        <Route exact path='/data' component={Data}></Route> 
</div>  
       </Router>
    
    )
  }
}

