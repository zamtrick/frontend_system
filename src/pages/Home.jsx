import React from "react";

const Home = () => {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-black mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Points Earned */}
        <div className="bg-white cursor-pointer border border-yellow-400 rounded-2xl p-6 shadow-sm hover:shadow-yellow-300/40 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide text-black uppercase">
              Points Earned
            </h2>
            <div className="bg-yellow-400 text-black rounded-full px-3 py-1 text-sm font-bold">
              Reward
            </div>
          </div>

          <h3 className="text-5xl font-extrabold text-black mt-6">
            10
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Total points collected
          </p>
        </div>

        {/* Products */}
        <div className="bg-white cursor-pointer border border-black rounded-2xl p-6 shadow-sm hover:shadow-black/30 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide text-black uppercase">
              Products
            </h2>
            <span className="text-2xl">📦</span>
          </div>

          <h3 className="text-5xl font-extrabold text-black mt-6">
            15
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Available rewards
          </p>
        </div>

        {/* Status */}
        <div className="bg-black rounded-2xl cursor-pointer p-6 shadow-sm hover:shadow-yellow-400/40 hover:shadow-lg transition">
          <div className="flex items-center justify-between ">
            <h2 className="text-sm font-semibold tracking-wide text-yellow-400 uppercase">
              Status
            </h2>
            <span className="text-yellow-400 text-xl">●</span>
          </div>

          <h3 className="text-4xl font-extrabold text-white mt-6">
            Active
          </h3>

          <p className="text-sm text-yellow-300 mt-2">
            Account is in good standing
          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;
