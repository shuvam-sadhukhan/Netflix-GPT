import React from 'react'
import { API_URL } from '../Utils/Constants'
import './MovieCard.css'

const MovieCard = ({posterPath}) => {
  return (
   <>
  
   <img src={API_URL+posterPath} alt=""  className='image'/>
    
   </>
  )
}

export default MovieCard