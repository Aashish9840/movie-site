"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { createContext, useState } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Create context
export const DisplayContext = createContext();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // Define shared state
  const [HomeSlide, setHomeSlide] = useState({});
  const [getinput, setGetinput] = useState("");
  const [filtersearch, setfiltersearch] = useState();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DisplayContext.Provider value={{ HomeSlide, setHomeSlide, getinput, setGetinput, filtersearch, setfiltersearch}}>
          <Header />
          {children}
          <Footer />
        </DisplayContext.Provider>
      </body>
    </html>
  );
}
