import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingBasket,
  Users,
  BarChart2,
  Settings,
  House,
  Gift,
  LayoutDashboard,
  UserRound,
  LogOut,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: <House size={20} />, path: "/dashboard/analytics" },
    { name: "Rewards", icon: <Gift size={20} />, path: "/dashboard/rewards" },
    { name: "Products", icon: <ShoppingBasket size={20} />, path: "/dashboard/products" },
    { name: "Profile", icon: <UserRound size={20} />, path: "/dashboard/profile" },
    // { name: "Settings", icon: <Settings size={20} />, path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logout Successfully!", {
      position: "top-right",
      autoClose: 2500,
      style: {
        background: "#FACC15",
        color: "#000",
        fontWeight: "bold",
      },
    });

    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 flex-col px-6 py-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/hyg_logo.png"
            alt="Company Logo"
            className="h-28 w-28 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
                ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-md"
                    : "text-gray-700 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              <span className="transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3
                     bg-black text-yellow-400 font-semibold rounded-xl
                     hover:bg-yellow-400 hover:text-black
                     transition-all shadow-md"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center h-16 md:hidden">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-medium transition
              ${
                isActive
                  ? "text-yellow-500"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            {item.icon}
            <span className="text-[10px]">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <ToastContainer />
    </>
  );
};

export default Sidebar;
