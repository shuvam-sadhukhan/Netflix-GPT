import React from 'react'
import './GptSearchBar.css'
import { lang } from '../Utils/Constants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const name=useSelector((store)=> store.config.lang);
 
  return (
   <>
   <div className="main-content">
     <div className="form-container">
        <form action="">
            <input type="text" placeholder={lang[name].gptPlaceholder} />
            <button className='search-btn'>{lang[name].search}</button>
        </form>
     </div> 
   
     </div>
   </>
  )
}

export default GptSearchBar