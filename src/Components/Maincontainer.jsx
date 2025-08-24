import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';

const Maincontainer = () => {

   const movies=useSelector((store)=> store.movies?.nowPlayingMovies);
   if(!movies) return;
   const mainMovie=movies[0];
   console.log(mainMovie);
   const {id,title,overview,vote_average}=mainMovie;
   
  return (
   <>
     <h1>{title}</h1>
     <span>{overview}</span>
     <span>{vote_average}</span>
     <VideoBackground id={id} />

   </>
  )
}

export default Maincontainer