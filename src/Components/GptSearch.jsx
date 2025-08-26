import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSugession from './GptMovieSugession'


const GptSearch = ({data}) => {

    
  return (
    <>
   <GptSearchBar data={data}/>
   <GptMovieSugession />
  
    </>
    
  )
}

export default GptSearch