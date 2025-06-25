'use client'
import { DisplayContext } from '@/app/layout'
import FilterMovie from '@/components/FilterMovie'
import MainDisplay from '@/components/MainDisplay'
import React, { useContext } from 'react'

const GenreMovie = ({ response }) => {
  const { catagorydisplay } = useContext(DisplayContext)
  return (
    <div className='md:bg-black'>
      {
        Object.keys(catagorydisplay).length === 0 ? <></> :
          <MainDisplay />
      }

      <div className='mx-4 flex flex-col gap-4 bg-white px-0 py-8 md:px-4'>
        <h1 className='font-bold text-3xl'> Different Genre Movie</h1>
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {
            response?.map((movie) => (
              <FilterMovie movie={movie} key={movie.title} />

            ))
          }

        </div>

      </div>
      <hr className='mx-4 h-[1px]' />
    </div>
  )
}

export default GenreMovie