import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Star, Users, Gift } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Points Earned",
        data: [50, 75, 60, 90, 120, 110, 150],
        borderColor: "#FACC15",
        backgroundColor: "rgba(250,204,21,0.2)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#FACC15",
      },
    ],
  };

  const barData = {
    labels: ["Rewards Redeemed", "Products Bought", "Users Active"],
    datasets: [
      {
        label: "Count",
        data: [5, 15, 30],
        backgroundColor: ["#FACC15", "#000000", "#FACC15"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#000000" } },
    },
    scales: {
      x: { ticks: { color: "#000000" }, grid: { color: "#e5e7eb" } },
      y: { ticks: { color: "#000000" }, grid: { color: "#e5e7eb" } },
    },
  };

  return (
    <section className="bg-gray-50 min-h-screen flex justify-center">
      {/* Center container with max width */}
      <div className="w-full max-w-4xl p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 sm:mb-8">
          Analytics
        </h1>

        {/* Top stats with icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="bg-white border cursor-pointer border-yellow-400 rounded-2xl p-4 sm:p-6 shadow-sm flex items-center gap-3 sm:gap-4">
            <Star size={28} className="text-yellow-400" />
            <div>
              <p className="text-xs sm:text-sm uppercase font-semibold text-gray-500">
                Total Points
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-1">
                150
              </h2>
            </div>
          </div>

          <div className="bg-black cursor-pointer rounded-2xl p-4 sm:p-6 shadow-sm flex items-center gap-3 sm:gap-4">
            <Users size={28} className="text-yellow-400" />
            <div>
              <p className="text-xs sm:text-sm uppercase font-semibold text-yellow-400">
                Active Users
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                30
              </h2>
            </div>
          </div>

          <div className="bg-white border cursor-pointer border-black rounded-2xl p-4 sm:p-6 shadow-sm flex items-center gap-3 sm:gap-4">
            <Gift size={28} className="text-black" />
            <div>
              <p className="text-xs sm:text-sm uppercase font-semibold text-gray-500">
                Rewards Redeemed
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-1">
                5
              </h2>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Points Over Time
            </h2>
            <Line data={lineData} options={options} />
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Activity Overview
            </h2>
            <Bar data={barData} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
