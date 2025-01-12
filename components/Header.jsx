'use client'
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
    const [countrymovie, setcountrymovie]=useState(false)
    const [recommend, setrecommend]=useState(false)
    const genre=['Romantic', 'Horror', 'Comedy', 'Suspense', 'Thriller', 'Crime', 'Adult', 'Teen','Documentry','Famiily', 'History', 'Modern', 'Documentry', 'Real']
    const country=['Brasil', 'India', 'Italia', 'America', 'Germany', 'France', 'Mexico', 'Romania','Nepal','Philipines', 'Indonesia', 'Russia', 'Belgium', 'India']
  return (
    <div className="flex flex-col bg-black" onClick={()=>(
        setcountrymovie(false),
        setrecommend(false)
    )}>

  
    <div className="relative flex justify-between  items-center py-5 mx-4 bg-white px-10">
      <Link href="/">
        <h1 className="text-xl font-medium cursor-pointer">
          <span className="text-black px-2 py-1 font-bold bg-orange-500 rounded-md mr-1">
            Movie
          </span>
          Search
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <button className="border px-4 py-1 text-[15px] font-semibold rounded-full hover:bg-green-400"  onMouseEnter={()=>(setrecommend(true), setcountrymovie(false))}>Genre</button>
        <button className="border px-4 py-1 text-[15px] font-semibold rounded-full hover:bg-green-400" onMouseEnter={()=>(setcountrymovie(true), setrecommend(false))}>Country</button>
        <Link href="/highrated"  className="border px-4 py-1  text-[15px] font-semibold rounded-full hover:bg-green-400">Highrest Rating</Link>
        <Link href="/recent" className="border px-4 py-1  text-[15px] font-semibold rounded-full hover:bg-green-400">Recent Movie</Link> 
        <button className="border px-4 py-1  text-[15px] font-semibold rounded-full border-slate-400 hover:bg-green-400">
        SignUP
      </button>
      </div>
      {recommend &&   <div className="absolute top-full left-[55vw] h-fit bg-yellow-50 z-10 rounded-sm grid grid-cols-4 gap-2 px-1 py-3 w-fit">
        {genre.map((item, index)=>(

            <Link key={index} href='/genre'> <h1 className=" px-6 font-medium py-1 text-[14px] hover:bg-blue-500  hover:text-white"  >{item}</h1> </Link>
        ))}
         
        </div>}
        {countrymovie &&   <div className="absolute top-full left-[60vw] h-fit bg-yellow-50 z-10 rounded-sm grid grid-cols-4 gap-2 px-1 py-3 w-fit">
        {country.map((item, index)=>(

            <Link key={index} href='/country'> <h1 className=" px-6 font-medium py-1 text-[14px] hover:bg-blue-500  hover:text-white" >{item}</h1> </Link>
        ))}
         
        </div>}

    </div>
<hr className="mx-4"/>
    </div> 
  );
};