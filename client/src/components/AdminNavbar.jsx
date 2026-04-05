import Logo from "./../assets/cinema.png";
import { logoutUser } from "../utils";
import Button from "./Button";
import { Link } from "react-router";

function AdminNavbar() {

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">

        <div className="bg-[#006A71] text-white rounded-full w-[90%] max-w-6xl px-6 py-3 flex justify-between items-center shadow-xl border border-gray-700">

          {/* Logo */}
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <img src={Logo} className="h-9 w-9"/>
            <span className="text-2xl font-semibold playpen-sans">
              CineMovie
            </span>
          </Link>

          {/* Logout Button */}
          <Button
            title="Logout"
            variant="tertiary"
            size="large"
            onClick={logoutUser}
          />

        </div>
      </div>
    </>
  );
}

export default AdminNavbar;