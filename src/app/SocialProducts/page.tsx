"use client";

import { motion } from "framer-motion";
import { FaTiktok, FaPaintBrush } from "react-icons/fa";
import { SiCanva, SiAdobe } from "react-icons/si";

const CapCutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-16 h-16"
  >
    <path d="M22 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9.03l4.38 2.6L7 14.24V9.03zm10 6.21-4.38-2.6 4.38-2.61v5.21zM2 18V6h20v12H2z" />
  </svg>
);

const cards = [
  { id: 1, title: "TikTok", icon: <FaTiktok />, color: "bg-gradient-to-r from-red-700 to-black" },
  { id: 2, title: "Canva", icon: <SiCanva />, color: "bg-gradient-to-r from-red-700 to-black" },
  { id: 3, title: "CapCut", icon: <CapCutIcon />, color: "bg-gradient-to-r from-red-700 to-black" },
  { id: 4, title: "PicsArt", icon: <FaPaintBrush />, color: "bg-gradient-to-r from-red-700 to-black" },
  { id: 5, title: "Photoshop", icon: <SiAdobe />, color: "bg-gradient-to-r from-red-700 to-black" },
];

const SocialItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={`relative ${card.color} rounded-xl shadow-lg p-6 overflow-hidden`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20 z-0"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          ></motion.div>

          <div className="relative z-10 flex items-center justify-center mb-4 text-white">
            {card.icon}
          </div>

          <h3 className="relative z-10 text-center text-xl font-bold text-white">
            {card.title}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialItems;
