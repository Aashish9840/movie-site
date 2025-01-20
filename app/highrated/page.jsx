'use client'
import FilterMovie from '@/components/FilterMovie'
import MainDisplay from '@/components/MainDisplay'
import FetchSearch from '../hooks/FetchSearch';
import { useEffect } from 'react';
import { useContext } from 'react'
import { DisplayContext } from '../layout'

const page =  () => {

  const { moviefetch, collectinput } = FetchSearch();
  useEffect(() => {
    moviefetch();
  });
  
      const highrated=collectinput.filter((movie)=>(movie.vote_average>=7.5))
      const {catagorydisplay}=useContext(DisplayContext)
      console.log(catagorydisplay)
  return (
    <div className='relative md:bg-black'>
      {
Object.keys(catagorydisplay).length === 0 ? <></>:
<MainDisplay/>
      }
      

    <div className='mx-4 flex flex-col gap-4 bg-white px-0 py-8 md:px-4'>
        <h1 className='font-bold text-3xl'>Highest Rated Movie</h1>
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {
                highrated.map((movie)=>(
                   <FilterMovie movie={movie}
                    />

                ))
            }

        </div>

    </div>
    <hr className='mx-4 h-[1px]'/>
    </div>
  )
}

export default page