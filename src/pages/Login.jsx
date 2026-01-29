import React, { useState } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // PROTOTYPE: direct redirect
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8 text-black">
      {/* Desktop */}
      <div className="hidden md:flex w-full max-w-md bg-white rounded-xl p-8 shadow-lg transition flex-col items-center">
        <img src="/HYG.png" alt="Logo" className="h-20 w-50 object-contain mb-6" />
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-12"
            />
            <Eye
              className="absolute right-4 top-3 h-5 w-5 text-gray-500 cursor-pointer"
              onClick={togglePassword}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-black transition transform bg-gradient-to-r from-yellow-300 to-yellow-400 hover:scale-105 hover:from-yellow-400 hover:to-yellow-500"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} HYG Company
        </p>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full max-w-sm flex flex-col items-center">
        <img src="/HYG.png" alt="Logo" className="h-20 w-50 object-contain mb-6" />
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-12"
            />
            <Eye
              className="absolute right-4 top-3 h-5 w-5 text-gray-500 cursor-pointer"
              onClick={togglePassword}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-black transition transform bg-gradient-to-r from-yellow-300 to-yellow-400 hover:scale-105 hover:from-yellow-400 hover:to-yellow-500"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} HYG Company
        </p>
      </div>
    </div>
  );
};

export default Login;
