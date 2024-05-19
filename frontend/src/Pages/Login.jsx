import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/login.css'
import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';

const Login = () => {

  const[formDataLogin,setFormDataLogin]=useState({
    email:"",
    password:""
});

const changeHandlerLogin=(e)=>{
    setFormDataLogin({...formDataLogin,[e.target.name]:e.target.value});
}

const login = async()=>{
    console.log("Function executed: "+formDataLogin);
    let responseDataLogin;
    await fetch('http://localhost:8000/login',{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
        },
        body:JSON.stringify(formDataLogin),
    }).then((response)=>response.json()).then((data)=>responseDataLogin=data)

    if(responseDataLogin.success){
        localStorage.setItem('auth-token',responseDataLogin.token);
        window.location.replace('/');
    }

    else{
      alert(responseDataLogin.error);
    }
  }
  return (
    <div>
      <Navbar/>
      <div className='login'>
        <form>
            <h1>LOGIN</h1>
            <div className="login-email">
            <input type="email" name='email' value={formDataLogin.name} onChange={changeHandlerLogin} placeholder='Enter your email' />
            </div>

            <div className="login-pass">
            <input type="password" name='password' value={formDataLogin.name} onChange={changeHandlerLogin} placeholder='Enter your password' />
            </div>
            <button onClick={()=>login()}>Login</button>
            <div className="login-links">
            <Link to={'/signup'}><span>Don't have an account?</span></Link>
            <a href="#">Forget password?</a>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login
