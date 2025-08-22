import React, { useEffect } from 'react'
import Header from './Header'
import './Browse.css';
import { getAuth, signOut } from "firebase/auth";
import {auth} from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/Constants';


const Browse = () => {

  const user=useSelector((store)=> store.user);

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
  
  //API CALL FROM TMDB DATABASE
   
  const getNowPlayingMovies= async ()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json=await data.json();
    console.log(json.results);
}
 useEffect(()=>{
   getNowPlayingMovies();
 },[])






  return (
    <>
    <div className="browse-header">
      <Header  />
      <h5>welcome:</h5> {user.email}
      <button className='btn' onClick={handleButton}>LogOut</button>
      
    </div>
    
    
    </>
  )
}

export default Browse