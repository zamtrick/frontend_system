import React from "react";
import { LogOut } from "lucide-react";
import {useNavigate, Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="flex bg-white shadow-sm  items-center justify-between px-5 sm:hidden">
      {/* Logo */}
        <img
          src="/HYG.png"
          alt="HYG Logo"
          className="h-20 w-25 object-contain"
        />

      {/* Logout icon */}
      <Link to="/" className="p-2 rounded-full hover:bg-gray-100 transition">
        <LogOut className="h-6 w-6 text-gray-700 cursor-pointer" />
      </Link>
    </header>
  );
};

export default Header;
