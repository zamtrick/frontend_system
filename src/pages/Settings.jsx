import React from "react";

const Settings = () => {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-black mb-8">
        Settings
      </h1>

      <div className="max-w-4xl space-y-8">
        
        {/* Profile Settings */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-black mb-4">
            Profile Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-500 transition">
            Update Profile
          </button>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-black mb-4">
            Preferences
          </h2>

          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700">Email Notifications</span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-yellow-400"
              defaultChecked
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">SMS Notifications</span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-yellow-400"
            />
          </div>
        </div>

        {/* Security */}
        <div className="bg-black rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">
            Security
          </h2>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full rounded-xl px-4 py-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full rounded-xl px-4 py-2 focus:outline-none"
            />
          </div>

          <button className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-500 transition">
            Change Password
          </button>
        </div>

        {/* Save All */}
        <div className="flex justify-end">
          <button className="bg-black text-yellow-400 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition shadow-md">
            Save Changes
          </button>
        </div>

      </div>
    </section>
  );
};

export default Settings;
