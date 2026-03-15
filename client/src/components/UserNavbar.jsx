import Logo from "./../assets/cinema.png";
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
    console.log("Fetch user data:", data);
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="bg-[#006A71] text-white rounded-full max-w-4xl mx-auto px-6 py-4 flex justify-between items-center shadow-xl mt-6 border border-gray-700">
      
      {/* Logo */}
      <div>
        <Link to="/dashboard">
          <img src={Logo} alt="logo" className="h-10 w-10 inline-block" />
          <span className="text-xl ml-2 font-semibold playpen-sans">CineMovie</span>
        </Link>
      </div>

      {/* User Section */}
      <div>
        {
          userData?.name ? (
            <Link to="/dashboard" className="flex items-center gap-2">
              <Avtar name={userData.name} size="lg" />
              Hello, {userData.name}!
              <div>
                <Button
                  title="Logout"
                  variant="tertiary"
                  size="medium"
                  onClick={logoutUser}
                />
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <Button
                title="Login"
                variant="tertiary"
                size="large"
              />
            </Link>
          )
        }
      </div>

      <Toaster />
    </div>
  );
}

export default UserNavbar;