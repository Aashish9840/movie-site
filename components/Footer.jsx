import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="mx-4 bg-white flex flex-col gap-10 px-10 py-10">
        <div className="flex justify-between item-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Movie Search </h1>
            <p className="text-[14px] font-normal">
              Best Site for online Movie watch
            </p>
            <p className="text-[14px] font-normal">
              Latest details about movie
            </p>
            <p className="text-[14px] font-normal">Leading Site</p>
            <p className="text-[14px] font-normal">All movie available</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Good movie site</h1>
            <p className="text-[14px] font-normal">More about us</p>
            <p className="text-[14px] font-normal">
              look Out for the latest Movie
            </p>
            <p className="text-[14px] font-normal">Clicked site</p>
            <p className="text-[14px] font-normal">keep updated</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">About Us</h1>
            <p className="text-[14px] font-normal">
              Known for the faster client services
            </p>
            <p className="text-[14px] font-normal">Set time for new movie</p>
            <p className="text-[14px] font-normal">Find movie</p>
            <p className="text-[14px] font-normal">new release</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Feedback Us </h1>
            <p className="text-[14px] font-normal">
              Known for the faster client services
            </p>
            <p className="text-[14px] font-normal">Set time for new movie</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Follow</h1>
          <div className="flex item-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className=" hover:cursor-pointer hover:scale-110"
            >
              <path
                fill="#5555bf"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className=" hover:cursor-pointer hover:scale-110"
            >
              <path
                fill="black"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className=" hover:cursor-pointer hover:scale-110"
            >
              <path
                fill="black"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className=" hover:cursor-pointer hover:scale-110"
            >
              <path
                fill="black"
                d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
               className=" hover:cursor-pointer hover:scale-110"
            >
              <path
                fill="blue"
                d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
              />
            </svg>
          </div>
        </div>
        <div className="border border-black h-[1px]">
            <hr />
        </div>
        <div className="flex flex-col">
            <h1 className="text-center font-semibold">@copyright</h1>
            <h1 className="text-center font-normal">Follow the terms and conditions of the company</h1>
        </div>
      </div>
    </div>
  );
};
