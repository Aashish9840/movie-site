"use client";
import FetchSearch from "@/app/hooks/FetchSearch";
import {
  CircleMinus,
  CirclePlus,
  CircleX,
  Menu,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import InputfilterSearch from "./InputfilterSearch";
import { DisplayContext } from "@/app/layout";

export const Header = () => {
  const [countrymovie, setcountrymovie] = useState(false);
  const [recommend, setrecommend] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [displaymovie, setDisplaymovie] = useState(false);
  const [displaycountry, setDisplaycountry] = useState(false);
  const [searchbotton, setSearchbotton] = useState(false);
  const { getinput, setGetinput } = useContext(DisplayContext);
  const { filtersearch, setfiltersearch } = useContext(DisplayContext);
  const { moviefetch, collectinput } = FetchSearch();

  const sideclick=useRef(null)

  useEffect(()=>{
    const handleSideClick=(e)=>{
      console.log(sideclick.current)
      if(!sideclick.current?.contains(e.target)){
        setMenuState(false);
      }
    }
      if (menuState)
      {
        document.addEventListener('mousedown',handleSideClick)
      }
    
    return () => {
      document.removeEventListener("click", handleSideClick);
    };
    
  },[menuState])

  useEffect(() => {
    moviefetch();
  }, [getinput]);

  const handlefilter = (e) => {
    setGetinput(e.target.value);

    if (e.target.value === "") {
      setfiltersearch([]);
    } else {
      const movie = collectinput.filter((element) => {
        return element.original_title
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setfiltersearch(movie);
    }
  };

  const handleGenreHover = () => {
    setrecommend(true);
    setcountrymovie(false);
  };

  const genre = [
    "Romantic",
    "Horror",
    "Comedy",
    "Suspense",
    "Thriller",
    "Crime",
    "Adult",
    "Teen",
    "Documentry",
    "Famiily",
    "History",
    "Modern",
    "Documentry",
    "Real",
  ];
  const country = [
    "Brasil",
    "India",
    "Italia",
    "America",
    "Germany",
    "France",
    "Mexico",
    "Romania",
    "Nepal",
    "Philipines",
    "Indonesia",
    "Russia",
    "Belgium",
    "India",
  ];
  return (
    <div
      className="flex flex-col bg-white  md:bg-black"
      onClick={() => (setcountrymovie(false), setrecommend(false))}
    >
      <div className="relative flex justify-between  items-center bg-white py-3 md:py-5 md:px-7 mx-4">
        <Link href="/">
          <h1 className="text-xl font-medium cursor-pointer">
            <span className="text-black px-2 py-1 font-bold bg-orange-500 rounded-md mr-1">
              Movie
            </span>
            Search
          </h1>
        </Link>

        <div className="flex gap-[20px] lg:gap-[60px] xl:gap-[90px]">
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="text-[15px] font-semibold border rounded-full border-slate-300 px-5 py-2 hover:bg-green-400 transition duration-1000 ease-in-out hover:scale-90 xl:px-7"
              onMouseEnter={handleGenreHover} onMouseLeave={()=>setDisplaymovie(false)}
            >
              Genre
            </button>
            <button
              className="text-[15px] font-semibold border rounded-full border-slate-300 px-5 py-2 hover:bg-green-400 transition duration-1000 ease-in-out hover:scale-90 xl:px-7"
              onMouseEnter={() => (setcountrymovie(true), setrecommend(false))} onMouseLeave={()=>setcountrymovie(false)}
            >
              Country
            </button>
            <Link
              href="/recent"
              className=" text-[15px] font-semibold border rounded-full border-slate-300 px-5 py-2 hover:bg-green-400 transition duration-1000 ease-in-out hover:scale-90 xl:px-7"
            >
              Recent Movie
            </Link>
            <Link
              href="/highrated"
              className=" text-[15px] font-semibold border rounded-full border-slate-300 px-5 py-2 hover:bg-green-400 transition duration-1000 ease-in-out hover:scale-90 xl:px-7"
            >
              Top Rating
            </Link>
          </div>

          <div className="hidden md:flex gap-2 items-center">
            <div className="relative flex px-5 py-[6px] border border-slate-400 outline-none cursor-pointer">
              <Search />
              <input
                type="text"
                className="ml-2 outline-none border-none flex-1"
                placeholder="Search latest movie"
                value={getinput}
                onChange={(e) => handlefilter(e)}
              />
            </div>
            {filtersearch && <InputfilterSearch filtersearch={filtersearch} />}

            <button className=" text-[15px] font-semibold border rounded-full px-5 py-2 border-slate-400 hover:bg-green-400 transition duration-1000 ease-in-out hover:scale-90 xl:px-7">
              SignUP
            </button>
          </div>
          <div className="flex items-center gap-6 lg:hidden">
            <Search
              onClick={() => setSearchbotton((current) => !current)}
              className="md:hidden"
            />
            <Menu size={27} onClick={() => setMenuState((pre) => !pre)} />
          </div>
        </div>
        <div>

        
        {recommend && (
          <div className="absolute top-full left-[20vw] h-fit bg-yellow-50 z-10 rounded-sm grid grid-cols-4 gap-2 px-1 py-3 w-fit" >
            {genre.map((item, index) => (
              <Link key={index} href="/genre">
                <h1 className=" px-6 font-medium py-1 text-[14px] hover:bg-blue-500  hover:text-white">
                  {item}
                </h1>
              </Link>
            ))}
          </div>
        )}

        </div>
        {countrymovie && (
          <div className="absolute top-full left-[25vw] h-fit bg-yellow-50 z-10 rounded-sm grid grid-cols-4 gap-2 px-1 py-3 w-fit">
            {country.map((item, index) => (
              <Link key={index} href="/country">
                <h1 className=" px-6 font-medium py-1 text-[14px] hover:bg-blue-500  hover:text-white">
                  {item}
                </h1>
              </Link>
            ))}
          </div>
        )}
      </div>
      <hr className="mx-4" />
      {menuState && (
        <div
          className={`absolute flex flex-col text-white bg-black top-0 right-0 gap-10 h-screen w-[90%]
          z-10 px-5 py-5 transition duration-1000 ease-in-linear`}
          ref={sideclick}
        >
          <div
            className="flex gap-1 justify-between items-center cursor-pointer"
            onClick={() => setMenuState(false)}
          >
            <CircleX size={23} className="text-red-500" />
            <button className="text-xl font-semibold">Close</button>
          </div>

          <div className="relative flex flex-col gap-3">
            <div className="flex justify-between items-center">
              Genre
              {!displaymovie ? (
                <CirclePlus
                  onClick={() => (
                    setDisplaymovie(true), setDisplaycountry(false)
                  )}
                  size={20}
                  className="text-blue-400 cursor-pointer"
                />
              ) : (
                <CircleMinus
                  size={20}
                  onClick={() => setDisplaymovie(false)}
                  className="text-blue-400 cursor-pointer"
                />
              )}
            </div>

           
            <div
              className={`relative h-fit z-10 rounded-sm grid grid-cols-2 gap-y-4 gap-x-[80px] overflow-hidden transition-all duration-1000 ease-in-out 
              ${displaymovie ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}`}
            >
                {genre.map((item, index) => (
                  <Link
                    key={index}
                    href="/genre"
                    onClick={() => (
                      setMenuState(false), setDisplaymovie(false)
                    )}
                  >
                    <h1 className="font-bold py-1 text-[12px] text-slate-400 hover:bg-blue-500 px-2  hover:text-white">
                      {item}
                    </h1>
                  </Link>
                ))}
              </div>
            
          </div>

          <div className="relative flex flex-col gap-3">
            <div className="flex justify-between items-center">
              Country
              {!displaycountry ? (
                <CirclePlus
                  onClick={() => (
                    setDisplaymovie(false), setDisplaycountry(true)
                  )}
                  size={20}
                  className="text-blue-400 cursor-pointer"
                />
              ) : (
                <CircleMinus
                  size={20}
                  onClick={() => setDisplaycountry(false)}
                  className="text-blue-400 cursor-pointerr"
                />
              )}
            </div>

            <div
              className={`relative h-fit z-10 rounded-sm grid grid-cols-2 gap-y-4 gap-x-[80px] overflow-hidden transition-all duration-1000 ease-in-out 
              ${displaycountry ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}`}
            >
              {country.map((item, index) => (
                <Link
                  key={index}
                  href="/country"
                  onClick={() => (
                    setMenuState(false), setDisplaycountry(false)
                  )}
                >
                  <h1 className="font-bold py-1 text-[12px] text-slate-400 hover:bg-blue-500 px-2  hover:text-white">
                    {item}
                  </h1>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/recent"
            className=" text-[15px] font-semibold"
            onClick={() => setMenuState(false)}
          >
            Recent Movie
          </Link>
          <Link
            href="/highrated"
            className=" text-[15px] font-semibold"
            onClick={() => setMenuState(false)}
          >
            Highrest Rating
          </Link>
        </div>
      )}

      
      {searchbotton && (
        <div className="relative top-full flex px-2 py-[6px] border rounded-lg my-3 w-[80vw] mx-auto bg-white border-slate-300 outline-none cursor-pointer sm:w-[30vw]">
          <div>
            <input
              type="text"
              className="ml-2 outline-none border-none bg-transparent flex-1"
              placeholder="Search"
              value={getinput}
              onChange={(e) => handlefilter(e)}
            />
          </div>
          {filtersearch && <InputfilterSearch filtersearch={filtersearch} />}
        </div>
      )}
    </div>
  );
};
