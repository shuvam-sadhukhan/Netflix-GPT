import React, { useRef, useState } from 'react'
import './Login.css'
import Header from './Header'
import {checkValidData} from '../Utils/Validate'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Utils/Firebase';


const Login = () => {

  let [input,setInput]=useState('Sign In');
  let [pass,setPass]=useState(true);
  let [error,setError]=useState('');
  let [fireError,setFireError]=useState('');
  
  let handleChange=()=>{
    // setInput('Sign In');
    setInput(input==='Sign Up' ? "Sign In" : 'Sign Up');
  }

  let handlePassword=()=>{
    setPass(!pass);
}

let handleButtonClick=()=>{
  
  console.log("button clicked");
  console.log(email.current.value);
  console.log(password.current.value);
   let message= checkValidData(email.current.value,password.current.value);
   console.log(message);
   setError(message);

   if(message) return;

   if(input==='Sign Up'){
    
   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+""+errorMessage);

    // ..
  });

   }
   else{

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+" "+ errorMessage);
    setFireError("Email or Password doesnot match");
  });

   }

   email.current.value='';
   password.current.value='';
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
            {input==='Sign Up' &&<input type="text" placeholder="Your Name"  required/>}

            <input type="email" placeholder=' Your Email' required  ref={email}/>
            <span className='error'>{error==='email' && 'Email is not valid'}</span>

            <input type={pass===true ? "password" : "text"} placeholder='Your Password'  ref={password} required/>
            {pass===true ? <i className="fa-solid fa-lock" onClick={handlePassword}></i> : <i class="fa-solid fa-lock-open" onClick={handlePassword}></i>} 
             <span className='error'>{error==='password' && 'Password is not valid'}</span>
             <span className='error'>{fireError}</span>
            
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