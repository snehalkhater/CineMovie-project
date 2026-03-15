import Logo from "./../assets/cinemovie-logo.png";
import { useState, useEffect } from "react";
import { getUserData, logoutUser } from "../utils";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";
import Avtar from "./Avtar";

function UserNavbar() {

  const [userData, setUserData] = useState({});

  const fetchUserData = () => {
    const data = getUserData();
    console.log("Fetched User:", data);
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    logoutUser();
    toast.success("Logged out successfully 🎬");
  };

  return (
    <div className="bg-black text-white rounded-full max-w-6xl mx-auto px-6 py-4 flex justify-between items-center shadow-xl mt-6 border border-gray-700">

      {/* Logo Section */}
      <div>
        <Link to="/dashboard" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="h-10 w-10" />
          <span className="text-xl font-semibold tracking-wide">
            CineMovie
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link to="/dashboard" className="hover:text-red-400">
          Home
        </Link>

        <Link to="/movies" className="hover:text-red-400">
          Movies
        </Link>

        <Link to="/bookings" className="hover:text-red-400">
          My Bookings
        </Link>
      </div>

      {/* User Section */}
      <div>
        {userData?.name ? (
          <div className="flex items-center gap-3">
            <Avtar name={userData.name} size="lg" />
            <span>Hello, {userData.name}</span>

            <Button
              title="Logout"
              variant="tertiary"
              size="medium"
              onClick={handleLogout}
            />
          </div>
        ) : (
          <Link to="/login">
            <Button
              title="Login"
              variant="primary"
              size="medium"
            />
          </Link>
        )}
      </div>

      <Toaster />
    </div>
  );
}

export default UserNavbar;