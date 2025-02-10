'use client'
import { DisplayContext } from '@/app/layout'
import Image from 'next/image'
import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

 
const FilterMovie = ({movie, index}) => {
  // const id=uuidv4()
  const {setCategorydisplay}=useContext(DisplayContext)
  const handleSingleMovie=()=>{
    setCategorydisplay(movie),

  window.scrollTo({
          top:0, 
          left:0, 
          behavior: "smooth",
        })
      }
  
  return (
    <div key={index} onClick={()=>handleSingleMovie()}>
    <Image
    src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
    width={220}
    height={200}
    alt='title'
    className='w-auto h-auto cursor-pointer'
    />
    <p className='font-medium text-[15px]'>{movie?.title}</p>
</div>
  )
}

export default FilterMovie