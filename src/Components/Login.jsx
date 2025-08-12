import React, { useState } from 'react'
import './Login.css'
import Header from './Header'

const Login = () => {

  let [input,setInput]=useState('Sign In');
  let [pass,setPass]=useState(true);
  
  let handleChange=()=>{
    // setInput('Sign In');
    setInput(input==='Sign Up' ? "Sign In" : 'Sign Up');
    
  }

  let handlePassword=()=>{
    setPass(!pass);
}
  
  return (
      <>  
      <Header />
      <div className='login'>
         <div className="login-form">
          <h1>{input}</h1>
          <form action="">
            {input==='Sign Up' &&<input type="text" placeholder="Your name" />}
            <input type="email" placeholder='email' />
            <input type={pass===true ? "password" : "text"} placeholder='password'/>
           {pass===true ? <i class="fa-solid fa-lock" onClick={handlePassword}></i> : <i class="fa-solid fa-lock-open" onClick={handlePassword}></i>} 
            <button>{input}</button>
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