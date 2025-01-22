/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="relative h-screen w-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/video.mp4" // Path to your video
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50"></div>

      {/* Login Form */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="border-2 border-solid border-emerald-600 rounded-xl p-10 bg-opacity-80 bg-gray-800 shadow-xl transform transition-all duration-300 hover:scale-105">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center space-y-6"
          >
            {/* Email Input */}
            <div className="relative w-full">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-6 rounded-full placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105 w-full"
                type="email"
                placeholder="Enter your email"
              />
              <i className="ri-mail-fill absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-600"></i>
            </div>

            {/* Password Input */}
            <div className="relative w-full">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-6 rounded-full placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105 w-full"
                type="password"
                placeholder="Enter password"
              />
              <i className="ri-lock-fill absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-600"></i>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="outline-none border-2 border-emerald-600 text-emerald-600"
              />
              <label htmlFor="rememberMe" className="text-white text-xl">
                Remember me
              </label>
            </div>

            {/* Forgot Password */}
            <a href="#" className="text-emerald-600 text-sm mt-2 hover:underline">
              Forgot password?
            </a>

            {/* Login Button */}
            <button className="text-white mt-5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-xl py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
