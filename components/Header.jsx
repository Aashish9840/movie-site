"use client";
import { Menu, Minus, Plus, Search, SquarePlus, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [countrymovie, setcountrymovie] = useState(false);
  const [recommend, setrecommend] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [displaymovie, setDisplaymovie] = useState(false);
  const [displaycountry, setDisplaycountry] = useState(false);
  const [searchbotton, setSearchbotton] = useState(false);
  console.log(menuState);
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
      className="flex flex-col bg-white  sm:bg-black"
      onClick={() => (setcountrymovie(false), setrecommend(false))}
    >
      <div className="relative flex justify-between items-center  bg-white py-3 md:py-5 md:px-7 mx-4">
        <Link href="/">
          <h1 className="text-xl font-medium cursor-pointer">
            <span className="text-black px-2 py-1 font-bold bg-orange-500 rounded-md mr-1">
              Movie
            </span>
            Search
          </h1>
        </Link>

        <div className="md:flex gap-[90px]">
          <div className="hidden md:flex items-center gap-2">
            <button
              className="text-[15px] font-semibold border rounded-full border-slate-300 px-7 py-2 hover:bg-green-400"
              onMouseEnter={() => (setrecommend(true), setcountrymovie(false))}
            >
              Genre
            </button>
            <button
              className="text-[15px] font-semibold border rounded-full border-slate-300 px-7 py-2 hover:bg-green-400"
              onMouseEnter={() => (setcountrymovie(true), setrecommend(false))}
            >
              Country
            </button>
            <Link
              href="/recent"
              className=" text-[15px] font-semibold border rounded-full border-slate-300 px-7 py-2 hover:bg-green-400"
            >
              Recent Movie
            </Link>
            <Link
              href="/highrated"
              className=" text-[15px] font-semibold border rounded-full border-slate-300 px-7 py-2 hover:bg-green-400"
            >
              Highrest Rating
            </Link>
          </div>

          <div className="hidden sm:flex gap-2 items-center">
            <div className="flex px-3 py-[6px] border border-slate-400 outline-none cursor-pointer">
              <Search />
              <input
                type="text"
                className="ml-2 outline-none border-none flex-1"
                placeholder="Search latest movie"
              />
            </div>
            <button className=" text-[15px] font-semibold border rounded-full px-7 py-2 border-slate-400 hover:bg-green-400">
              SignUP
            </button>
          </div>
          <div className="flex items-center gap-6 sm:hidden">
            <Search onClick={() => setSearchbotton((current)=>!current)} />
            <Menu
              size={27}
              onClick={() => (
                console.log("clicked button"), setMenuState((pre) => !pre)
              )}
            />
          </div>
        </div>
        {recommend && (
          <div className="absolute top-full left-[30vw] h-fit bg-yellow-50 z-10 rounded-sm grid grid-cols-4 gap-2 px-1 py-3 w-fit">
            {genre.map((item, index) => (
              <Link key={index} href="/genre">
                <h1 className=" px-6 font-medium py-1 text-[14px] hover:bg-blue-500  hover:text-white">
                  {item}
                </h1>
              </Link>
            ))}
          </div>
        )}
        {countrymovie && (
          <div className="absolute top-full left-[35vw] h-fit bg-yellow-50 z-10 rounded-sm grid grid-cols-4 gap-2 px-1 py-3 w-fit">
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
        <div className="absolute flex flex-col text-white bg-black top-0 right-0 gap-10 h-[100vh] w-[90vw] z-10 px-5 py-5 transition-[h] duration-1000 ease-in-out">
          <div
            className="flex gap-1 justify-start items-center cursor-pointer"
            onClick={() => setMenuState(false)}
          >
            <X size={25} />
            <button className="text-xl font-semibold">Close</button>
          </div>

          <div className="relative flex flex-col gap-3">
            <div className="flex justify-between items-center">
              Genre
              {!displaymovie ? (
                <Plus
                  size={22}
                  onClick={() => (
                    setDisplaymovie(true), setDisplaycountry(false)
                  )}
                />
              ) : (
                <Minus size={22} onClick={() => setDisplaymovie(false)} />
              )}
            </div>

            {displaymovie && (
              <div className="relative h-fit z-10 rounded-sm grid grid-cols-2 gap-y-4  gap-x-[80px] w-fit">
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
            )}
          </div>

          <div className="relative flex flex-col gap-3">
            <div className="flex justify-between items-center">
              Country
              {!displaycountry ? (
                <Plus
                  size={22}
                  onClick={() => (
                    setDisplaycountry(true), setDisplaymovie(false)
                  )}
                />
              ) : (
                <Minus size={22} onClick={() => setDisplaycountry(false)} />
              )}
            </div>


            {displaycountry && (
              <div className="relative h-fit z-10 rounded-sm grid grid-cols-2 gap-y-4  gap-x-[80px] w-fit ">
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
            )}
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
              <div className="relative top-full flex px-3 py-[6px] border rounded-lg my-3 w-[80vw] mx-auto bg-white border-black outline-none cursor-pointer">
                <input
                  type="text"
                  className="ml-2 outline-none border-none bg-transparent flex-1"
                  placeholder="Search"
                />
              </div>
            )}
    </div>
  );
};
