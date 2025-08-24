import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../Utils/Constants'

const VideoBackground = ({id}) => {
    let [img,setImg]=useState('');

    // fetch trailer video

    const getMovieVideo= async()=>{
        let data= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
        let json=await data.json();
        console.log(json.results[0].key);
        setImg(json.results[0].key);

    }

    useEffect(()=>{
       getMovieVideo();
    },[])
  return (
    <>
     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${img}?si=oawJpBSPAgOiOKtl`} title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </>
  )
}

export default VideoBackground