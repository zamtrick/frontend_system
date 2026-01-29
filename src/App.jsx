import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Admin from "./pages/pages.admin/Admin";
import Welcome from "./pages/Welcome"

const App = () => {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
        <Route path="welcome" element={<Welcome />} />

      {/* Dashboard Layout Route */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="settings" element={<Settings />} />
        <Route path="products" element={<Products />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="auth/admin" element={<Admin/>} />
    </Routes>
  );
};

export default App;
