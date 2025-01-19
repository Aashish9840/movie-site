import { DisplayContext } from '@/app/layout'
import Image from 'next/image'
import React, { useContext } from 'react'

const InputfilterSearch = ({filtersearch}) => {
      const { setHomeSlide}=useContext(DisplayContext)
      const { getinput,setGetinput}=useContext(DisplayContext)
      const handleshow=(movie)=>(
        setGetinput(""),
      setHomeSlide(movie)
    
      )
      
  return (
 
        <div className="absolute mt-1 top-full bg-slate-900 max-h-[500px] rounded-md overflow-auto">
        <div className="flex flex-col gap-2 py-2">
        {filtersearch.map((movie, index) => (
            <div
            className="flex items-center justify-start gap-4 cursor-pointer pl-2 hover:bg-black hover:w-full"
            key={index}
            onClick={()=>handleshow(movie)}
            >
                                <div className="w-14 h-14" >
                                  <Image
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    width={200}
                                    height={200}
                                    alt={movie.title}
                                    className="w-full h-full rounded-lgobject-contain"
                                    />
                                </div>
                                <p className="text-[15px] w-48 text-white">{movie.title}</p>
                              </div>
                            ))}
                            </div>
                            </div>
                        
  )
}

export default InputfilterSearch