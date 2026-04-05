import Logo from "./../assets/cinema.png";
import { useState, useEffect } from "react";
import { getUserData, logoutUser } from "../utils";
import Button from "./Button";
import { Link } from "react-router";
import Avtar from "./Avtar";
import { Menu, X } from "lucide-react";

function UserNavbar() {
  const [userData, setUserData] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  const fetchUserData = () => {
    const data = getUserData();
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">

        <div className="bg-[#006A71] text-white rounded-full w-[90%] max-w-6xl px-6 py-3 flex justify-between items-center shadow-xl border border-gray-700">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="h-9 w-9"/>
            <span className="text-2xl font-semibold playpen-sans">
              CineMovie
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium  md:text-xl lg:text-xl">

            <Link to="/movies" className="hover:underline hover:text-yellow-400 transition">
              Movies
            </Link>

            <Link to="/liked" className="hover:underline hover:text-yellow-400 transition">
              Liked
            </Link>

            <Link to="/about" className="hover:underline hover:text-yellow-400 transition">
              About
            </Link>

            <Link to="/show" className="hover:underline hover:text-yellow-400 transition">
              Show
            </Link>

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {userData?.name ? (
              <div className="flex items-center gap-3">
                <Avtar name={userData.name} size="sm"/>
                <Button
                  title="Logout"
                  variant="tertiary"
                  size="large"
                  onClick={logoutUser}
                />
              </div>
            ) : (
              <Link to="/login">
                <Button title="Login" variant="tertiary" size="large"/>
              </Link>
            )}

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={26}/> : <Menu size={26}/>}
            </button>

          </div>

        </div>
      </div>

     {menuOpen && (
  <div className="fixed inset-0 bg-[#006A71]/70 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-10 text-white text-2xl md:hidden">

    <Link 
      to="/movies"
      className="hover:text-yellow-400 transition"
      onClick={()=>setMenuOpen(false)}
    >
      Movies
    </Link>

    <Link 
      to="/liked"
      className="hover:text-yellow-400 transition"
      onClick={()=>setMenuOpen(false)}
    >
      Liked Movies
    </Link>

    <Link 
      to="/about"
      className="hover:text-yellow-400 transition"
      onClick={()=>setMenuOpen(false)}
    >
      About
    </Link>

    <Link 
      to="/show"
      className="hover:text-yellow-400 transition"
      onClick={()=>setMenuOpen(false)}
    >
      Show
    </Link>

  </div>
)}
    </>
  );
}

export default UserNavbar;