import React from 'react'
import Link from "next/link";

import { IoRose } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500  text-white body-font gap-5 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 ">
        <IoRose className="font-bold text-3xl"/>
          <span className="text-2xl font-extrabold ">Fun & Learn</span>
        </div>

      
        {/* Navbar Links */}
        <nav className="md:ml-auto flex flex-wrap items-center justify-center md:justify-start text-black">
          <Link
            href={"/"}
            className="mr-5 text-black hover:bg-amber-500 rounded transition-colors duration-300 transform hover:scale-105 p-2">
            Home
          </Link>

          <Link
            href={"/blog"}
            className="mr-5 text-black hover:bg-amber-500 rounded transition-colors duration-300 transform hover:scale-105 p-2">
            Blog
          </Link>

          <Link
            href={"/Contact"}
            className="mr-5 text-black hover:bg-amber-500 rounded transition-colors duration-300 transform hover:scale-105 p-2">
            Contact Us
          </Link>
        </nav>
        </div>
        </header>
  )
}

export default Header
