import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { Link } from "react-router";

import AddMovieIcon from "../../assets/add-movie.png";
import MovieListIcon from "../../assets/movies-list.png";
import OfferIcon from "../../assets/offer.png";
import UsersIcon from "../../assets/user.png";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      <div className="pt-32 flex justify-center">

        {/* Container */}
        <div className="bg-white p-10 rounded-xl shadow-lg w-[800px]">

          <h1 className="text-3xl font-bold text-center mb-10 playpen-sans">
            Manage the Movies
          </h1>

          {/* Grid 2x2 */}
          <div className="grid grid-cols-2 gap-8">

            {/* Add Movie */}
            <Link to="/admin/add-movie">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl text-center cursor-pointer transition">
                <img src={AddMovieIcon} className="h-14 mx-auto mb-3" />
                <h2 className="text-lg font-semibold playpen-sans">Add Movie</h2>
              </div>
            </Link>

            {/* Manage Movies */}
            <Link to="/admin/manage-movies">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl text-center cursor-pointer transition">
                <img src={MovieListIcon} className="h-14 mx-auto mb-3" />
                <h2 className="text-lg font-semibold playpen-sans">Movie List</h2>
              </div>
            </Link>

            {/* Add Offers */}
            <Link to="/admin/add-offer">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl text-center cursor-pointer transition">
                <img src={OfferIcon} className="h-14 mx-auto mb-3" />
                <h2 className="text-lg font-semibold playpen-sans">Add Offer</h2>
              </div>
            </Link>

            {/* Users */}
            <Link to="/admin/users">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl text-center cursor-pointer transition">
                <img src={UsersIcon} className="h-14 mx-auto mb-3" />
                <h2 className="text-lg font-semibold playpen-sans">Users</h2>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;