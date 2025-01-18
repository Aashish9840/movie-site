import FilterMovie from '@/components/FilterMovie'
import { popularMovie } from '@/services/services'
import Image from 'next/image'
import React from 'react'
const page = async () => {
    const response= await popularMovie()
   
  return (
    <div className='md:bg-black'>

    <div className='mx-4 flex flex-col gap-4 bg-white px-0 py-8 md:px-4'>
        <h1 className='font-bold text-3xl'>Popular Movie List</h1>
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {
                response.map((movie)=>(
                   <FilterMovie movie={movie} key={movie.title}/>

                ))
            }

        </div>

    </div>
    <hr className='mx-4 h-[1px]'/>
    </div>
  )
}

export default page