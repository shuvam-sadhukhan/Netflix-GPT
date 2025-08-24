import React from 'react'
import Header from './Header'
import './Browse.css';
import { getAuth, signOut } from "firebase/auth";
import {auth} from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';




const Browse = () => {


  const user=useSelector((store)=> store.user);
  //  if(!user) return;
  useNowPlayingMovies();

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
  

   return (
    <>
    <div className="browse-header">
      <Header  />
      {/* <h5>welcome:</h5> {user.email} */}
      <button className='btn' onClick={handleButton}>LogOut</button>
    </div>
    
     <Maincontainer />
    <SecondaryContainer />
    
    
    </>
  )
}

export default Browse