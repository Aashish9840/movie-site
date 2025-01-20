'use client'
import { DisplayContext } from '@/app/layout'
import React, { useContext } from 'react'

const MainDisplay = () => {
      const {catagorydisplay}=useContext(DisplayContext);

     const monthMapper = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      };
     function formatDate(date) {
        const newDate = new Date(date);
        return `${monthMapper[newDate.getMonth()]} ${newDate.getDay()}`;
      }

  return (
    <div>

         <div className="relative flex flex-col min-h-screen w-screen px-0 md:bg-black md:px-4">
              <div
                className="h-[90vh] bg-cover rounded-b-lg w-full"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${catagorydisplay?.backdrop_path}})`,
                }}
              >
                <div className="flex px-9 pt-4 justify-center item-center">
              
                </div>
                <div className=" px-8 flex flex-col justify-center h-full w-full lg:w-[50%]">
                  <h1 className="text-white text-2xl lg:text-5xl font-extrabold mb-3">
                    {catagorydisplay?.title}
                  </h1>
                  <p className="text-white text-sm lg:text-2xl font-semibold">
                    {catagorydisplay?.overview?.length > 100
                      ? catagorydisplay?.overview?.split(" ")?.splice(0, 25).join(" ") + "..."
                      : catagorydisplay?.overview}
                  </p>
                  <div className="flex item-center mt-6">
                    <button className="bg-yellow-400 py-[6px] px-3 text-sm lg:px-5 rounded-full text-black font-extrabold mr-4 text-[14px]">
                      IMBD: {catagorydisplay?.vote_average?.toFixed(1)}
                    </button>
                    <button className="bg-white py-[6px] text-sm px-5 rounded-full text-black font-extrabold sm:text-[14px]">
                      Released On:{" "}
                      {catagorydisplay ? formatDate(catagorydisplay?.release_date) : ""}
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default MainDisplay