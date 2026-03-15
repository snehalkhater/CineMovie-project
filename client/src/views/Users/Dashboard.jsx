import React from "react";
import UserNavbar from "../../components/UserNavbar";
import { Link } from "react-router";
import Button from "../../components/Button";

function Dashboard() {

  const bgImage = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <UserNavbar />

      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">

        <h1 className="animate-bounce text-yellow-500 text-6xl font-bold mb-6 playpen-sans">
          CineMovie
        </h1>

        <p className="text-lg max-w-2xl mb-8 text-gray-200 playpen-sans">
          Welcome to CineMovie, your ultimate destination for booking movie tickets quickly and effortlessly...
        </p>

        {/* Buttons */}
        <div className="flex gap-6">

          <Link to="/movies">
            <Button
              title="Explore"
              variant="primary"
              size="large"
            />
          </Link>

          <Link to="/login">
            <Button
              title="Login"
              variant="tertiary"
              size="large"
            />
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;