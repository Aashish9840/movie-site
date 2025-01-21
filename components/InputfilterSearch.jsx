import { DisplayContext } from '@/app/layout'
import Image from 'next/image'
import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const InputfilterSearch = ({filtersearch}) => {
      const { setHomeSlide}=useContext(DisplayContext)
      const { setGetinput}=useContext(DisplayContext)
      const {setfiltersearch}=useContext(DisplayContext)
      const {setCategorydisplay}=useContext(DisplayContext)
      const handleshow=(movied)=>{
        setGetinput(""),
      setHomeSlide(movied),
      setCategorydisplay(movied),
      setfiltersearch([])
      window.scrollTo({
        top:0, 
        left:0, 
        behavior: "smooth",
      })
}

const id= uuidv4();
      
  return (
 
        <div className="absolute mt-1 top-full bg-slate-900 max-h-[500px] rounded-md overflow-auto z-10">
        <div className="flex flex-col gap-2 py-2">
        {filtersearch.map((movied, index) => (
            <div
            className="flex items-center justify-start gap-4 cursor-pointer pl-2 hover:bg-black hover:w-full"
            key={id+ index}
            onClick={()=>handleshow(movied)}
            >
                                <div className="w-14 h-14" >
                                  <Image
                                    src={`https://image.tmdb.org/t/p/original${movied.poster_path}`}
                                    width={200}
                                    height={200}
                                    alt={movied.title}
                                    className="w-full h-full rounded-lgobject-contain"
                                    />
                                </div>
                                <p className="text-[15px] w-48 text-white">{movied.title}</p>
                              </div>
                            ))}
                            </div>
                            </div>
                        
  )
}

export default InputfilterSearch