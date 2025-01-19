import Image from 'next/image'
import React from 'react'

const FilterMovie = ({movie}) => {
  return (
    <div key={movie.title}>
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