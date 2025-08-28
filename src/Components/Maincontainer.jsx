import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import './MainContainer.css'

const Maincontainer = () => {

   const movies=useSelector((store)=> store.movies?.nowPlayingMovies);
   if(!movies) return;
   const mainMovie=movies[7];
   console.log(mainMovie);
   const {id,title,overview,vote_average}=mainMovie;
   
  return (
   <>
    <VideoBackground id={id} />
   
   <div className="content">
     <h1>{title}</h1>
     <p>{overview}</p>
     <div className="btn">
      <button className='play'>Play</button>
       <button className='more'>More Info</button>
     </div>
     </div>
     
    
     

   </>
  )
}

export default Maincontainer