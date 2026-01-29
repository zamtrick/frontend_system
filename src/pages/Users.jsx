import React from "react";
import { User } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    points: 120,
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    points: 80,
    status: "Inactive",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Carol Lee",
    email: "carol@example.com",
    points: 150,
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@example.com",
    points: 95,
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
  },
];

const UsersPage = () => {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
      <h1 className="text-3xl font-extrabold text-black mb-8">Users</h1>
       <input type="text" className=" ring-1 ring-gray-600 shadow-lg p-1 px-2 mb-7 rounded-md  " placeholder="Search" />

      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-sm border border-gray-200">
          <thead>
            <tr className="bg-yellow-400 text-black">
              <th className="py-3 px-6 text-left rounded-tl-2xl">User</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Points</th>
              <th className="py-3 px-6 text-left rounded-tr-2xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="py-4 px-6 flex items-center gap-3">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <User size={28} className="text-gray-400" />
                  )}
                  <span className="text-black font-medium">{user.name}</span>
                </td>
                <td className="py-4 px-6 text-gray-700">{user.email}</td>
                <td className="py-4 px-6 text-black font-semibold">{user.points}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.status === "Active" ? "bg-yellow-400 text-black" : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsersPage;
