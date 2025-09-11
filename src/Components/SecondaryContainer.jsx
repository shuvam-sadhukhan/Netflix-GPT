import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  let styles={marginTop:"-130px",backgroundColor:"black"}
  const movies=useSelector((store)=> store.movies.nowPlayingMovies);
  const movies1=useSelector((store)=> store.movies.popularMovies);
  if(!movies) return;
  if(!movies1) return;
  return (
   <>
   <div className="secondary-container" style={styles}>
    <MovieList title={"Now Playing"} movies={movies} />
     <MovieList title={"Trending"} movies={movies1} />
      <MovieList title={"Popular"} movies={movies1} />
       <MovieList title={"Upcoming Movies"} movies={movies} />
        <MovieList title={"Horror"} movies={movies} />
        </div>
   </>
  )
}

export default SecondaryContainer   