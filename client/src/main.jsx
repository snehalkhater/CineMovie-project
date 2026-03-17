import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import "./index.css";
import Signup from "./views/Auth/Signup";
import Login from "./views/Auth/Login";
import Dashboard from "./views/Users/Dashboard";
import AdminDashboard from "./views/Admin/AdminDashboard";
import UserNavbar from "./components/UserNavbar";
import Footer from "./components/Footer";
import Movies from "./views/Users/Movies";
import Booking from "./views/Users/Booking";
import SeatSelection from "./views/Users/SeatSelection";
import Movies from "./views/Movies";
import Booking from "./views/Booking";
import Show from "./views/Users/Show.jsx";
import AddMovie from "./views/Admin/AddMovies.jsx";
import AdminNavbar from "./components/AdminNavbar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <Toaster position="top-center" />

    <UserNavbar />

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/seatselection" element={<SeatSelection />} />
      <Route path="/show" element={<Show />} />

      
      <Route path="/admin/add-movie" element={<AddMovie />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />

    </Routes>

    <Footer />

  </BrowserRouter>
);