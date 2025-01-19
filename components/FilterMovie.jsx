'use client'
import { DisplayContext } from '@/app/layout'
import Image from 'next/image'
import React, { useContext } from 'react'

const FilterMovie = ({movie, index}) => {
  const {setHomeSlide}=useContext(DisplayContext)
  return (
    <div key={movie.id} onClick={()=>(setHomeSlide(movie), console.log('clicked'))}>
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