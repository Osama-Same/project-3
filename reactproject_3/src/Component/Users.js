import React, { Component } from 'react'
import Date from './DataBase'
import axios from 'axios';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Databace:[],
          textInput: '',
        };
      }
      
      getAllUsers = () => {
        axios
          .get('http://localhost:5000/Users/Get')
          .then((response) => {
            console.log('DATA: ', response.data);
            this.setState({Databace: response.data}) 
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
            const newArray=[...this.state.Databace];
            newArray.shift(response.data);
            this.setState({Databace:newArray});
      
          })
          .catch((err) => {
            console.log('RESULT: ', err);
          });
      };
      getAllCreate = (newusers) => {
        const newus={email:newusers,name:newusers,password:newusers,phoneNumber:newusers}
        axios
        
          .post('http://localhost:5000/Users/Create',newus)
          .then((response) => {
            console.log('DATA: ', response.data);
            const newArray=[...this.state.Databace];
             newArray.push(response.data)
            this.setState({Databace:newArray});
      
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
            const newArray=[...this.state.Databace];
            this.setState({Databace:newArray});
      
          })
          .catch((err) => {
            console.log('RESULT: ', err);
          });
      };
  
      change=(e)=>{
       this.setState({Databace:e.target.value});
   }
    render() {
        
         
        return (
            
            <div className="Users">
                <h1>Users Information</h1>
                <table>  
                    <tr>
                <td><input onChange={this.change} type='Email' placeholder="Email"></input></td>
                </tr>
                    <tr>
                <td><input onChange={this.change} type='text' placeholder="Name"></input></td>
                </tr>
                    <tr>
                <td><input onChange={this.change} type='Password' placeholder="Password"></input></td>
                </tr>
                    <tr>
                <td><input onChange={this.change} type='Number' placeholder="Number Phone"></input></td>
                </tr>
               </table>
               <button onClick={this.getAllUsers}>Get</button>
               <button onClick={this.getAllUpdate}>Update</button>
               <button onClick={this.getAllCreate}>Create</button>
               <button onClick={this.getAllDelete}>Delete</button>
               <button onClick={()=>{this.props.history.push('/home')}}>Go To Home</button>
               
              
            </div>
            
        )
    }
}

