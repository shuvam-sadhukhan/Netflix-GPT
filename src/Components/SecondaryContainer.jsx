import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  let styles={marginTop:"-130px",backgroundColor:"black"}
  const movies=useSelector((store)=> store.movies.nowPlayingMovies);
  if(!movies) return;
  return (
   <>
   <div className="secondary-container" style={styles}>
    <MovieList title={"Now Playing"} movies={movies} />
     <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Popular"} movies={movies} />
       <MovieList title={"Upcoming Movies"} movies={movies} />
        <MovieList title={"Horror"} movies={movies} />
        </div>
   </>
  )
}

export default SecondaryContainer   