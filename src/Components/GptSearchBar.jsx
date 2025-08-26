import React from 'react'
import './GptSearchBar.css'
import { lang } from '../Utils/Constants'

const GptSearchBar = ({data}) => {
  // if(!data) return;
 
  return (
   <>
   <div className="main-content">
     <div className="form-container">
        <form action="">
            <input type="text" placeholder={lang.bengali.gptPlaceholder} />
            <button className='search-btn'>{lang.bengali.search}</button>
        </form>
     </div> 
   
     </div>
   </>
  )
}

export default GptSearchBar