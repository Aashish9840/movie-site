import Image from "next/image";
import React from "react";

export const UpcomingMovies = ({ movies, setHomeSlide }) => {
  return (
    <div className="flex flex-col mt-3 ml-4">
      <h1 className="text-[25px] font-extrabold text-black">
        Upcoming Movies
      </h1>
      <div className="w-full flex relative overflow-hidden">
        <div className="flex my-4 animate-auto-slide hover:paused gap-x-5 w-max">
          {movies?.map((movie) => (
            <div
              className="h-[230px] w-[150px] mr-3 cursor-pointer"
              key={movie?.title}
              onClick={() => setHomeSlide(movie)}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}}`}
                width={200}
                height={400}
                alt="Image"
                loading="lazy"
                className="rounded-lg w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};
