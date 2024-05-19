import React, { useState } from 'react'
import './CSS/signup.css'
import Navbar from '../components/Navbar/Navbar';

const Signup = () => {
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });

    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const signup=async()=>{
        console.log("Function executed: "+formData);
        let responseData;
        await fetch('http://localhost:8000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }

        else{
            alert(responseData.error);
        }
    }
  return (
    <div>
        <Navbar/>
    <div className='signup'>
        <form>
            <h1>SIGN UP</h1>
            <input type="text" name='name' value={formData.name} onChange={changeHandler} placeholder='Enter your name'/>
            <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Enter your email'/>
            <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Enter your password' />
            <button onClick={()=>signup()}>Sign up</button>
        </form>
    </div>
    </div>
  )
}

export default Signup
