'use client'
import { useState } from 'react';
import { FaShoppingCart, FaBoxOpen, FaChartBar, FaCreditCard, FaGlobe, FaTruck } from 'react-icons/fa';

export default function InteractiveShowcase() {
  const [hovered, setHovered] = useState(false);

  const features = [
    { title: "Online Store Setup", icon: <FaShoppingCart />, description: "Launch your e-commerce store with ease and style." },
    { title: "Inventory Management", icon: <FaBoxOpen />, description: "Effortlessly manage your products and stock levels." },
    { title: "Sales Analytics", icon: <FaChartBar />, description: "Gain insights into your store's performance and trends." },
    { title: "Payment Solutions", icon: <FaCreditCard />, description: "Secure and seamless payment gateways for all transactions." },
    { title: "Global Reach", icon: <FaGlobe />, description: "Expand your customer base with worldwide accessibility." },
    { title: "Shipping Integration", icon: <FaTruck />, description: "Streamline delivery with automated shipping tools." },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-200">
          Empower Your <span className="text-red-500">E-commerce</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Discover features that make online selling efficient, intuitive, and impactful. Hover over the cards to read carefully.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-full mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg p-6 cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Icon Placeholder */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-br from-red-500 to-gray-600 rounded-full text-white text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-100 mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-red-600 to-gray-800 rounded-full opacity-40 blur-2xl transform animate-spin-slow"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-black to-gray-700 rounded-full opacity-30 blur-3xl transform animate-pulse"></div>
    </section>
  );
}
