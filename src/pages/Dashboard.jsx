import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const LOGIN_REWARD_POINTS = 100;

const Dashboard = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [addedPoints, setAddedPoints] = useState(0);

  useEffect(() => {
    const rewardGiven = localStorage.getItem("loginRewardGiven");

    if (!rewardGiven) {
      const currentPoints =
        Number(localStorage.getItem("userPoints")) || 0;

      const updatedPoints = currentPoints + LOGIN_REWARD_POINTS;

      localStorage.setItem("userPoints", updatedPoints);
      localStorage.setItem("loginRewardGiven", "true");

      setAddedPoints(LOGIN_REWARD_POINTS);
      setShowAlert(true);

      setTimeout(() => setShowAlert(false), 4000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <div className="md:ml-64 flex flex-col">
        <main className="flex-1 overflow-y-auto p-4 pb-20 md:pb-4">

          {showAlert && (
            <div className="mb-4 p-4 rounded-xl bg-green-100 text-green-800 font-semibold">
              🎉 Welcome! You earned {addedPoints} points for logging in!
            </div>
          )}

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
