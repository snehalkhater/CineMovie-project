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
import Movies from "./views/Movies";
import Booking from "./views/Booking";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <Toaster position="top-center" />

    <UserNavbar />

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/booking/:id" element={<Booking />} />

    </Routes>

    <Footer />

  </BrowserRouter>
);