import FilterMovie from '@/components/FilterMovie'
import { fetchMovies } from '@/services/services'
import React from 'react'

const page = async () => {
 const countryfilm= await fetchMovies()
 const countryfilmscollection=countryfilm.results
 
  return (
    <div className='bg-black'>

    <div className='mx-4 flex flex-col gap-4 bg-white px-4 py-8'>
        <h1 className='font-bold text-3xl'>Country Based Movie List</h1>
        <div className='grid grid-cols-5 gap-6'>
            {
                countryfilmscollection.map((movie)=>(
                   <FilterMovie movie={movie} key={movie.title}/>

                ))
            }


        </div>
        

    </div>
    <hr className='h-[1px]'/>
    </div>
  )
}

export default page