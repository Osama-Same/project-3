import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Login =(props)=>{ 
    const [Login, setLogin] = useState([]);
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')


  const CreateAllLogin = () => {
    const newus = { email:emailLogin,password:passwordLogin }
    axios
      .post('http://localhost:5000/Login/Post', newus)
      .then((response) => {
        const newArray = [...Login];
        newArray.push(response.data)
        setLogin(newArray);

      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };
  const saveLogin= () => {
    CreateAllLogin([emailLogin.data,passwordLogin.data])
  };
        return (
            
                <div className="Login1">
                <div>
                    <h2>Welcome to Jordan</h2>
                    </div>

             <div className='login'>
                 <table>
                     <tr>
                     <td><input onChange={(e) => {setEmailLogin(e.target.value)}}
                      type='email' placeholder="Email"></input></td>
                 </tr>
                 <tr>
                 <td><input onChange={(e)=>{
                  setPasswordLogin(e.target.value)}}
                   type='password' placeholder="Password"></input></td>
                 </tr> 
                 <tr>
                 <td>
                   <button className="ButtonLogin" onClick={saveLogin}>Login</button></td>
                 </tr> 
                 <tr>
                 <td>
          
                   <button className='ButtonCreate' onClick={()=>{props.history.push('/SignIn');}}>Create New Account</button></td>
                 </tr> 
                    </table>
                    </div>
                   
            
            </div>
        )
}
export default Login;
