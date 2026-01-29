import React, { useState, useEffect } from "react";

// Product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    points: 120,
    image:
      "https://i.pinimg.com/736x/33/fe/93/33fe935e6843ef3baf30f5b1bcf7b641.jpg",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
  },
  {
    id: 2,
    name: "Smart Watch",
    points: 200,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description:
      "Smart watch with fitness tracking, notifications, and customizable watch faces.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    points: 150,
    image:
      "https://i.pinimg.com/736x/88/ca/24/88ca2472db2920fed4c870b192fda11d.jpg",
    description: "Portable Bluetooth speaker with deep bass and crystal-clear sound.",
  },
  {
    id: 4,
    name: "Umbrella",
    points: 80,
    image:
      "https://i.pinimg.com/736x/59/1d/8a/591d8a66aed0589b50a268ba1b717ef6.jpg",
    description: "Compact and sturdy umbrella, perfect for rainy days.",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    points: 90,
    image:
      "https://i.pinimg.com/736x/2b/85/3b/2b853bcad30f7dff9ae0a49f0be03c83.jpg",
    description:
      "Ergonomic gaming mouse with customizable DPI and RGB lighting.",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    points: 180,
    image:
      "https://i.pinimg.com/736x/6f/15/b4/6f15b47410cbc7085ee11de8d4ab5d83.jpg",
    description: "Mechanical keyboard with tactile keys and durable build.",
  },
  {
    id: 7,
    name: "Fitness Tracker",
    points: 140,
    image:
      "https://i.pinimg.com/736x/75/73/d2/7573d2fc105e5f2108b17281889045ac.jpg",
    description: "Fitness tracker to monitor heart rate, steps, and sleep.",
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    points: 160,
    image:
      "https://i.pinimg.com/736x/2c/98/55/2c9855007237b5181e6dc46455c5a344.jpg",
    description:
      "Compact earbuds with active noise cancellation and excellent sound quality.",
  },
];

// Modal Component
const Modal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-50 bg-opacity-50"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ×
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">Points: {product.points}</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

// Product Card
const ProductCard = ({
  product,
  userPoints,
  isRedeemed,
  onRedeem,
  onMoreInfo,
}) => {
  const canRedeem = userPoints >= product.points && !isRedeemed;

  return (
    <div className="bg-white rounded-2xl border shadow hover:shadow-lg transition">
      <div className="relative h-40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          {product.points} pts
        </span>
      </div>

      <div className="p-4">
        <h2 className="font-bold">{product.name}</h2>

        <button
          onClick={() => onRedeem(product.id)}
          disabled={!canRedeem}
          className={`mt-3 w-full py-2 rounded-xl font-semibold transition ${
            isRedeemed
              ? "bg-green-500 text-white cursor-not-allowed"
              : canRedeem
              ? "bg-yellow-400 hover:bg-yellow-500"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isRedeemed ? "Redeemed" : canRedeem ? "Redeem" : "Not enough points"}
        </button>

        <button
          onClick={() => onMoreInfo(product)}
          className="mt-2 w-full py-2 rounded-xl bg-gray-700 text-white hover:bg-blue-500"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

// Main Component
const Product = () => {
  const userPoints = 100;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [redeemed, setRedeemed] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("redeemedProducts")) || [];
    setRedeemed(stored);
  }, []);

  const handleRedeem = (id) => {
    if (redeemed.includes(id)) return;

    const updated = [...redeemed, id];
    setRedeemed(updated);
    localStorage.setItem("redeemedProducts", JSON.stringify(updated));

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      {showAlert && (
        <div className="mb-4 p-3 rounded-xl bg-green-100 text-green-800 font-semibold">
          🎉 Product successfully redeemed!
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            userPoints={userPoints}
            isRedeemed={redeemed.includes(product.id)}
            onRedeem={handleRedeem}
            onMoreInfo={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Product;
