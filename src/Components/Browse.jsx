import React from 'react'
import Header from './Header'
import './Browse.css';
import { getAuth, signOut } from "firebase/auth";
import {auth} from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Browse = () => {

  const user=useSelector((store)=> store.user);

  let handleButton=()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
    
}).catch((error) => {
  // An error happened.
});


  }
  return (
    <>
    <div className="browse-header">
      <Header />
      <button onClick={handleButton}>LogOut</button>
      
    </div>
    <h1>{user.email}</h1>
    </>
  )
}

export default Browse