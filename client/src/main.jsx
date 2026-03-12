import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Signup from "././views/Auth/Signup";
import Login from "././views/Auth/Login";
import Dashboard from "./views/Users/Dashboard";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

);