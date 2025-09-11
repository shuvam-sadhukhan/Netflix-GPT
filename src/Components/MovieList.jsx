import React from 'react'
import MovieCard from './MovieCard';
import './MovieList.css'

function MovieList({title,movies}) {
    console.log(movies);
  return (
   <>
     <div className='main'>
       <h4>{title}</h4>
     <div className="details">
      {movies.map(item=> <MovieCard key={item.id} posterPath={item.poster_path}  />)}
     </div>
      </div>
        
   </>
  )
}

export default MovieList