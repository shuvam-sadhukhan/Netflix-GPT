import React, { useRef, useState } from 'react'
import './Login.css'
import Header from './Header'
import {checkValidData} from '../Utils/Validate'

const Login = () => {

  let [input,setInput]=useState('Sign In');
  let [pass,setPass]=useState(true);
  let [error,setError]=useState('');
  
  let handleChange=()=>{
    // setInput('Sign In');
    setInput(input==='Sign Up' ? "Sign In" : 'Sign Up');
  }

  let handlePassword=()=>{
    setPass(!pass);
}

let handleButtonClick=()=>{

  console.log(email.current.value);
  console.log(password.current.value);
   let message= checkValidData(email.current.value,password.current.value);
   console.log(message);
   setError(message);
}

   let email=useRef(null);
   let password=useRef(null);
  
  return (
      <>  
      <Header />
      <div className='login'>
         <div className="login-form">
          <h1>{input}</h1>
          <form action="" onSubmit={(e)=> e.preventDefault()}>
            {input==='Sign Up' &&<input type="text" placeholder="Your name"  required/>}

            <input type="email" placeholder='email' required  ref={email}/>
            <p className='error'>{error==='email' && 'Email is not valid'}</p>

            <input type={pass===true ? "password" : "text"} placeholder='password'  ref={password}/>
            {pass===true ? <i class="fa-solid fa-lock" onClick={handlePassword}></i> : <i class="fa-solid fa-lock-open" onClick={handlePassword}></i>} 
             <p className='error'>{error==='password' && 'Password is not valid'}</p>
            
            <button onClick={handleButtonClick}>{input}</button>

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            <p><u>{input=== 'Sign In' ? 'New to Netflix?' : 'Please sign in: '}</u> <span onClick={handleChange}>{input==='Sign Up' ? 'Sign In' : 'Sign Up'}.</span></p>
          </div>
         
         </div> 
     
      </div>
      
      
      </>
  )
}

export default Login