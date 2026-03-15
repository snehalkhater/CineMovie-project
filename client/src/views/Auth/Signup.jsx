import axios from "axios";
import { useEffect, useState } from "react";
import { setPageTitle } from "./../../utils.jsx";
import Input from "./../../components/Input.jsx";
import Button from "./../../components/Button.jsx";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

function Signup() {

  const [newUser, setnewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    country: "",
    password: "",
  });

  useEffect(() => {
    setPageTitle("Signup - CineMovie");
  }, []);

 const createUser = async () => {

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Mobile validation (10 digits)
  const mobileRegex = /^[0-9]{10}$/;

  if (!newUser.name) {
    toast.error("Name is required");
    return;
  }

  if (!emailRegex.test(newUser.email)) {
    toast.error("Please enter a valid email");
    return;
  }

  if (!mobileRegex.test(newUser.mobile)) {
    toast.error("Mobile number must be 10 digits");
    return;
  }

  if (!newUser.password || newUser.password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return;
  }

  const response = await axios.post("http://localhost:8081/signup", newUser);

  if (response.data.success) {
    toast.success(response.data.message, { id: "signupSuccess" });

    setnewUser({
      name: "",
      email: "",
      mobile: "",
      city: "",
      country: "",
      password: "",
    });

  } else {
    toast.error(response.data.message, { id: "signupError" });
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-lg mt-25">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2 playpen-sans">
          Create your account
        </h1>

        {/* Inputs */}
        <Input
          type="text"
          placeholder="Full Name"
          value={newUser.name}
          onChange={(e) => {
            setnewUser({ ...newUser, name: e.target.value });
          }}
        />

        <Input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => {
            setnewUser({ ...newUser, email: e.target.value });
          }}
        />

        <Input
          type="text"
          placeholder="Mobile"
          value={newUser.mobile}
          onChange={(e) => {
            setnewUser({ ...newUser, mobile: e.target.value });
          }}
        />

        <Input
          type="text"
          placeholder="City"
          value={newUser.city}
          onChange={(e) => {
            setnewUser({ ...newUser, city: e.target.value });
          }}
        />

        <Input
          type="text"
          placeholder="Country"
          value={newUser.country}
          onChange={(e) => {
            setnewUser({ ...newUser, country: e.target.value });
          }}
        />

        <Input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => {
            setnewUser({ ...newUser, password: e.target.value });
          }}
        />

        {/* Button */}
        <div className="mt-4">
          <Button
            title="Create Account"
            size="large"
            variant="primary"
            onClick={createUser}
          />
        </div>

        {/* Login link */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-500 ml-1 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

      <Toaster position="top-center" />

    </div>
  );
}

export default Signup;