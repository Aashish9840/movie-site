"use client";

import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const Search = ({ movies, setHomeSlide }) => {
  const [input, setinput] = useState("");
  const [filterMovie, setfilterMovie] = useState([]);
  const handleSearch = (e) => {
    setinput(e.target.value);
    const filtered = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setfilterMovie(filtered);
  };

  const handleMovieClick = (movie) => {
    setinput("");
    setHomeSlide(movie);
  };

  return (
    <div className="relative flex justify-center items-center p-3 rounded-full backdrop-blur-md border-[2px] border-white outline-none w-full lg:w-1/4">
      <div className="text-white cursor-pointer">
        <CiSearch className="h-6 w-6" />
      </div>
      <input
        type="text"
        placeholder="Search Movie/Show"
        onChange={(e) => handleSearch(e)}
        value={input}
        className="flex-1 text-white outline-none border-none bg-transparent ml-3 placeholder:text-white font-medium text-[16px]"
      />
      {input != "" && (
        <div className="absolute top-full mt-2 bg-slate-900 w-[100%] max-h-[500px] rounded-md overflow-auto">
          <div className="flex flex-col gap-2 py-2">
            {filterMovie.map((movie) => (
              <div
                className="flex items-center justify-start gap-4 cursor-pointer pl-2 hover:bg-black hover:w-full"
                key={movie.title}
                onClick={() => handleMovieClick(movie)}
              >
                <div className="w-14 h-14">
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
      )}
    </div>
  );
};
