import React, { useState } from "react";

const Rewards = () => {
  const [selectedReward, setSelectedReward] = useState(null);

  const userPoints = 120;

  const rewards = [
    {
      title: "10% Discount",
      points: 50,
      category: "Discount",
      expires: "Dec 31, 2026",
      description: "Get 10% off your next purchase.",
      terms: "Valid for one transaction only.",
    },
    {
      title: "Free Product",
      points: 100,
      category: "Product",
      expires: "Jan 15, 2027",
      description: "Receive a free exclusive product.",
      terms: "Product availability may vary.",
    },
    {
      title: "VIP Access",
      points: 150,
      category: "Exclusive",
      expires: "No Expiry",
      description: "Unlock VIP-only perks and events.",
      terms: "Non-transferable.",
    },
  ];

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-black mb-8">
        Rewards
      </h1>

      {/* 🔹 TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Points" value={userPoints} highlight />
        <StatCard title="Reward Level" value="Gold" />
        <StatCard title="Redeemed" value="5" />
        <StatCard title="Next Reward" value="30 pts" />
      </div>

      {/* 🔹 PROGRESS */}
      <div className="bg-white rounded-2xl p-6 mb-10 shadow-sm">
        <div className="flex justify-between mb-3">
          <span className="font-semibold">Progress to Next Reward</span>
          <span className="font-semibold">{userPoints} / 150</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-yellow-400 h-4 rounded-full"
            style={{ width: `${(userPoints / 150) * 100}%` }}
          />
        </div>
      </div>

      {/* 🔹 REWARDS GRID */}
      <h2 className="text-2xl font-bold mb-6">
        Redeem Rewards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward, index) => {
          const isLocked = userPoints < reward.points;

          return (
            <div
              key={index}
              onClick={() => setSelectedReward(reward)}
              className={`cursor-pointer bg-white rounded-2xl p-6 border shadow-sm transition
                ${isLocked ? "opacity-50" : "hover:shadow-lg border-yellow-300"}
              `}
            >
              <span className="text-xs font-semibold text-yellow-600 uppercase">
                {reward.category}
              </span>

              <h3 className="text-xl font-bold mt-2 mb-2">
                {reward.title}
              </h3>

              <p className="text-gray-500 mb-2">
                {reward.points} points required
              </p>

              <p className="text-sm text-gray-400 mb-4">
                Expires: {reward.expires}
              </p>

              <button
                disabled={isLocked}
                className={`w-full py-2 rounded-xl font-semibold transition
                  ${isLocked
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-yellow-400 text-black hover:bg-yellow-500"}
                `}
              >
                {isLocked ? "Locked" : "View Reward"}
              </button>
            </div>
          );
        })}
      </div>

      {/* 🔹 MODAL */}
      {selectedReward && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setSelectedReward(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <span className="text-sm font-semibold text-yellow-600 uppercase">
              {selectedReward.category}
            </span>

            <h3 className="text-2xl font-bold mt-2 mb-2">
              {selectedReward.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {selectedReward.description}
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p><strong>Points Required:</strong> {selectedReward.points}</p>
              <p><strong>Expires:</strong> {selectedReward.expires}</p>
            </div>

            <div className="mb-6">
              <p className="font-semibold mb-1">Terms & Conditions</p>
              <p className="text-sm text-gray-500">
                {selectedReward.terms}
              </p>
            </div>

            <button
              disabled={userPoints < selectedReward.points}
              className={`w-full py-2 rounded-xl font-semibold transition
                ${userPoints < selectedReward.points
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-yellow-400 text-black hover:bg-yellow-500"}
              `}
            >
              Redeem Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

/* 🔹 Small reusable stat card */
const StatCard = ({ title, value, highlight }) => (
  <div
    className={`rounded-2xl p-6 shadow-sm border
      ${highlight ? "bg-yellow-400 text-black" : "bg-white"}
    `}
  >
    <p className="text-sm uppercase font-semibold opacity-70">
      {title}
    </p>
    <h2 className="text-4xl font-extrabold mt-3">
      {value}
    </h2>
  </div>
);

export default Rewards;
