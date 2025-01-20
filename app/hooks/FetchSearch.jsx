'use client'
import { AlignStartVertical } from 'lucide-react'
import React, { useState } from 'react'

const FetchSearch = () => {
    const [collectinput, setCollectinput]=useState([])
    const moviefetch= async()=>{
        try {
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
              },
            }; 
      const alldata=[]
            for (let page =66; page <= 70; page++) {
              const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
                options
              );
              if (response.ok){
              const data = await response.json();
            alldata.push(...data.results)
              }
            
          }
          setCollectinput(alldata)
        }
            catch(error){
                alert(error)
            }
          }
  return {
    moviefetch, collectinput
  }
}

export default FetchSearch