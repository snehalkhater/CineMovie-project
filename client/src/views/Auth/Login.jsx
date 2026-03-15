import axios from "axios";
import { useEffect, useState } from 'react';
import { setPageTitle } from "./../../utils.jsx";
import Input from './../../components/Input.jsx';
import Button from './../../components/Button.jsx';
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

function Login() {

  useEffect(() => {
    setPageTitle("Login - CineMovie");
  }, []);

  const [loginUser, setloginUser] = useState({
    email: "",
    password: "",
  });

  const checkUserLogin = async () => {
    const response = await axios.post("http://localhost:8081/login", loginUser);

    if (response.data.success) {
      toast.success(response.data.message, { id: "loginSuccess" });

      setloginUser({
        email: "",
        password: "",
      });

      const { jwtToken, data } = response.data;
      localStorage.setItem("userJwtToken", jwtToken);
      localStorage.setItem("userData", JSON.stringify(data));

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);

    } else {
      toast.error(response.data.message, { id: "loginError" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2 playpen-sans">
          Login to your account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Welcome back! Please enter your details.
        </p>

        {/* Email */}
        <Input
          type="email"
          placeholder="Enter your email"
          value={loginUser.email}
          onChange={(e) => {
            setloginUser({ ...loginUser, email: e.target.value })
          }}
        />

        {/* Password */}
        <Input
          type="password"
          placeholder="Enter your password"
          value={loginUser.password}
          onChange={(e) => {
            setloginUser({ ...loginUser, password: e.target.value })
          }}
        />

        {/* Login Button */}
        <div className="mt-4">
          <Button
            title="Login"
            size="large"
            variant="primary"
            onClick={checkUserLogin}
          />
        </div>

        {/* Signup Link */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-blue-500 ml-1 hover:underline">
            Register
          </Link>
        </p>

      </div>

      <Toaster position="top-center" />

    </div>
  );
}

export default Login;