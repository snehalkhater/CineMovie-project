import React, { useState } from "react";
import { Link } from "react-router";
import { MenuIcon, SearchIcon, XIcon,Theater } from "lucide-react";

function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-[#006A71]/90 border-b border-[#9ACBD0]/30">
      
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-36 py-6">

        {/* Logo */}
        <Link to="/" className="max-md:flex-1">
         <Theater className="w-8" />
        </Link>

        {/* Navigation */}
        <div
          className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen 
          flex flex-col md:flex-row items-center justify-center gap-10
          md:bg-[#48A6A7]/20 md:backdrop-blur-md md:px-8 md:py-2 md:rounded-full
          max-md:bg-[#006A71] transition-all duration-300
          ${isOpen ? "max-md:w-full" : "max-md:w-0 overflow-hidden"}`}
        >
          <XIcon
            className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-[#F2EFE7]"
            onClick={() => setIsOpen(false)}
          />

          <Link
            to="/"
            className="text-[#F2EFE7] hover:text-[#9ACBD0] transition"
            onClick={() => {
              scrollTo(0, 0);
              setIsOpen(false);
            }}
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-[#F2EFE7] hover:text-[#9ACBD0] transition"
            onClick={() => setIsOpen(false)}
          >
            Movies
          </Link>

          <Link
            to="/theatres"
            className="text-[#F2EFE7] hover:text-[#9ACBD0] transition"
            onClick={() => setIsOpen(false)}
          >
            Theatres
          </Link>

          <Link
            to="/offers"
            className="text-[#F2EFE7] hover:text-[#9ACBD0] transition"
            onClick={() => setIsOpen(false)}
          >
            Offers
          </Link>

          <Link
            to="/contact"
            className="text-[#F2EFE7] hover:text-[#9ACBD0] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          <SearchIcon className="max-md:hidden w-5 h-5 text-[#F2EFE7] cursor-pointer hover:text-[#9ACBD0] transition" />

          <button className="px-5 py-2 bg-[#48A6A7] hover:bg-[#9ACBD0] text-white rounded-full text-sm font-medium transition">
            Login
          </button>
        </div>

        {/* Mobile Menu */}
        <MenuIcon
          className="md:hidden ml-4 w-7 h-7 text-[#F2EFE7] cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
}

export default UserNavbar;