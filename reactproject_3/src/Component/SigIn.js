import React, { useState, useEffect } from 'react';
import axios from 'axios'



const SigIn = (props) => {
  const [SignIn, setSigIn] = useState([]);
  const [emailSigin, setEmailSigIn] = useState('')
  const [nameSigin, setNameSigIn] = useState('')
  const [passwordSigin, setPasswordSigIn] = useState(0)
  const [phoneNumberSigin, setPhoneNumberSigIn] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  

  const getAllSigIn = () => {
    const newus = { email:emailSigin, name:nameSigin, password:passwordSigin, phoneNumber: phoneNumberSigin }
    axios
      .post('http://localhost:5000/Users/Create', newus)
      .then((response) => {
        const newArray = [...SignIn];
        newArray.push(response.data)
        setSigIn(newArray);

      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };

  const saveSigin= () => {
    getAllSigIn([emailSigin.data,nameSigin.data,passwordSigin.data,phoneNumberSigin.data])
  };


  return (

    <div className="Users">
    <h2>Sign In</h2>
    <table>
      <tr>
        <td><input onChange={(e) => {
          setEmailSigIn(e.target.value)
        }} type='email' placeholder="Email"></input></td>
      </tr>
      <tr>
        <td><input onChange={(e)=>{
          setNameSigIn(e.target.value)
        }} type='text' placeholder="Name"></input></td>
      </tr>
      <tr>
        <td><input onChange={(e)=>{
          setPasswordSigIn(e.target.value)
        }} type='password' placeholder="Password"></input></td>
      </tr>
      <tr>
        <td><input onChange={(e)=>{
          setPhoneNumberSigIn(e.target.value)
        }} type='number' placeholder="Number Phone"></input></td>
      </tr>
    </table>
    
    <button onClick={saveSigin}>Save</button>
    
  </div>

  )

}
export default SigIn;

