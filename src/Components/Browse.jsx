import React, { useState } from 'react'
import Header from './Header'
import './Browse.css';
import { getAuth, signOut } from "firebase/auth";
import {auth} from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { toggleGptSearchView } from '../Utils/GptSlice';
import { changeLanguage } from '../Utils/configSlice';
import usePopularMovies from '../hooks/usePopularMovies';




const Browse = () => {
  
   
 const dispatch=useDispatch();
 const toggleGpt=useSelector((store)=> store.gpt.showGptSearch);

  const user=useSelector((store)=> store.user);
  //  if(!user) return;
  useNowPlayingMovies();
  usePopularMovies();
  

  let handleButton=()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
    alert("logged out successful");
    // window.confirm("Do you want to logout");
}).catch((error) => {
  // An error happened.
});

}

const handleGpt=()=>{
  dispatch(toggleGptSearchView());
  
}
const handleLang=(e)=>{
   dispatch(changeLanguage(e.target.value));
}
  

   return (
    <>
    <div className="browse-header">
      <Header  />
      {/* <h5>welcome:</h5> {user.email} */}
      {toggleGpt===true && <select className='sele' onChange={handleLang}>
        <option value="english">English</option>
         <option value="hindi">Hindi</option>
         <option value="bengali">Bengali</option>
         <option value="urdu">Urdu</option>
        </select>}
      <button className='btn GPT' onClick={handleGpt}>{toggleGpt===true? "Home" : "GPT Search"}</button>
      <button className='btn' onClick={handleButton}>LogOut</button>
    </div>
    {toggleGpt===true?  <GptSearch />: <><Maincontainer />  <SecondaryContainer />    </>}
    
     
    
    
    
    </>
  )
}

export default Browse