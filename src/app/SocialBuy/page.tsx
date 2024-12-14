"use client";

import { motion } from "framer-motion";
import { FaShoppingCart, FaStar, FaPaintBrush, FaTiktok, FaVideo, FaCamera, FaPhotoVideo, FaFigma, FaVectorSquare, FaVideoSlash } from "react-icons/fa";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  stars: number;
  icon: React.ReactNode;
}

const products: Product[] = [
  { id: 1, title: "Pro Canva Subscription", description: "Create stunning designs with Canva Pro.", price: "$12.99", stars: 4.5, icon: <FaPaintBrush className="text-6xl text-blue-500" /> },
  { id: 2, title: "TikTok Growth Tools", description: "Boost your social media presence.", price: "$8.99", stars: 4.0, icon: <FaTiktok className="text-6xl text-purple-500" /> },
  { id: 3, title: "CapCut Video Editor", description: "Advanced editing tools at your fingertips.", price: "$10.99", stars: 4.8, icon: <FaVideo className="text-6xl text-red-500" /> },
  { id: 4, title: "PicsArt Premium", description: "Unleash your creativity with PicsArt.", price: "$9.49", stars: 4.7, icon: <FaCamera className="text-6xl text-yellow-500" /> },
  { id: 5, title: "Adobe Photoshop Pro", description: "Professional editing tools for all.", price: "$24.99", stars: 4.9, icon: <FaPhotoVideo className="text-6xl text-blue-700" /> },
  { id: 6, title: "Figma Premium", description: "Collaborative design made easy.", price: "$15.99", stars: 4.6, icon: <FaFigma className="text-6xl text-green-500" /> },
  { id: 7, title: "Illustrator Subscription", description: "Vector designs for professionals.", price: "$21.99", stars: 4.8, icon: <FaVectorSquare className="text-6xl text-orange-500" /> },
  { id: 8, title: "Premiere Pro Suite", description: "High-quality video production tools.", price: "$19.99", stars: 4.7, icon: <FaVideoSlash className="text-6xl text-indigo-500" /> },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [rating, setRating] = useState(product.stars);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-xl p-4 text-black overflow-hidden flex flex-col justify-between"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-center mb-4 h-48">
        {product.icon}
      </div>

      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-5 h-5 cursor-pointer ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => handleStarClick(index)} // Handle star click
          />
        ))}
      </div>

      <h3 className="text-lg font-bold mb-2">{product.title}</h3>

      <p className="text-sm opacity-80 mb-4">{product.description}</p>

      <div className="text-lg font-bold mb-6">{product.price}</div>

      <motion.a
        href={`/Socialcart1`}
        className="flex items-center justify-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition duration-300"
        whileTap={{ scale: 0.95 }}
      >
        <FaShoppingCart />
        Add to Cart
      </motion.a>
    </motion.div>
  );
};

export default function Socialcards2() {
  return (
    <div className="p-8 min-h-screen text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-black">Pro Cheap Tools</h1>
        <p className="text-lg md:text-xl opacity-90 text-black">
          Unlock the potential of premium tools at unbeatable prices. Explore and elevate your skills today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
