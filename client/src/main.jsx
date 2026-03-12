import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Signup from "././views/Auth/Signup";
import Login from "././views/Auth/Login";
import Dashboard from "./views/Users/Dashboard";
import AdminDashboard from "./views/Admin/AdminDashboard";
import UserNavbar from "./components/UserNavbar";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
        <UserNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>

);