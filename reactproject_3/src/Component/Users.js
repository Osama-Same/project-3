import React, { useState, useEffect } from 'react';
import axios from 'axios'



const Users = (props) => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  

 const getAllUsers = () => {
  
    axios
      .get(`http://localhost:5000/Users/Get`)
      .then((response) => {
        console.log('DATA: ', response.data);
        setUser(response.data)
        
      })
      .catch((err) => {
        console.log('RESULT: ', err);
        
      });
  };
  const getAllDelete = () => {
    axios
      .delete(`http://localhost:5000/Users/Delete/${user[0]._id}`)
      .then((response) => {
        console.log('DATA: ', response.data);
        const newArray = [...user];
        newArray.shift();
        setUser(newArray);

      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };
  const getAllCreate = () => {
    const newus = { email:email, name:name, password:password, phoneNumber: phoneNumber }
    axios
      .post('http://localhost:5000/Users/Create', newus)
      .then((response) => {
        const newArray = [...user];
        newArray.push(response.data)
        setUser(newArray);

      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };
  const getAllUpdate = () => {
    const up = { email: email, name: name, password:password, phoneNumber:phoneNumber }
    axios
      .put(`http://localhost:5000/Users/Update/${user._id}`, up)
      .then((response) => {
        console.log('DATA: ', response.data);
        const newArray = [...user];
        newArray.email = up
        newArray.name = up
        newArray.password = up
        newArray.phoneNumber = up
        setUser(newArray);

      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };
  const save= () => {
    getAllCreate([email.data,name.data,password.data,phoneNumber.data])
  };


  return (

    <div className="Users">
      <h1>Users Information</h1>
      <table>
        <tr>
          <td><input onChange={(e) => {
            setEmail(e.target.value)
          }} type='email' placeholder="Email"></input></td>
        </tr>
        <tr>
          <td><input onChange={(e)=>{
            setName(e.target.value)
          }} type='text' placeholder="Name"></input></td>
        </tr>
        <tr>
          <td><input onChange={(e)=>{
            setPassword(e.target.value)
          }} type='password' placeholder="Password"></input></td>
        </tr>
        <tr>
          <td><input onChange={(e)=>{
            setPhoneNumber(e.target.value)
          }} type='number' placeholder="Number Phone"></input></td>
        </tr>
      </table>
      <button onClick={getAllUsers}>Get</button>
      <button onClick={getAllUpdate}>Update</button>
      <button onClick={save}>Create</button>
      <button onClick={getAllDelete}>Delete</button>
      
    </div>

  )

}
export default Users;

