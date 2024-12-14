"use client";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";
import SocialItems from "../SocialProducts/page";
import Socialcards from "../SocialBuy/page";
import Socialcards2 from "../SocialBuy/page";
import Customersays2 from "../Customer2/page";

const HeroSection = () => {
  return (
    <>
    <div className="relative w-full h-screen bg-gradient-to-r from-red-600 via-black to-red-900 flex items-center justify-center text-white overflow-hidden sm:mt-0">
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-red-700 via-black to-red-900"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute z-10 w-80 h-80 bg-gradient-to-r from-red-500 to-black rounded-full"
        animate={{
          x: [0, 50, -50, 0],
          rotate: [0, 180, 360, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
      <motion.h1
  className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 transform transition-transform duration-500 hover:scale-110"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.4 }}
>
  Unlock Your Full Potential with Pro Tools
</motion.h1>
        <motion.p
          className="text-xl opacity-90 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Leverage powerful platforms like Canva Pro, TikTok, CapCut Pro, and
          more to elevate your digital presence.
        </motion.p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-12 mb-8">
          {/* TikTok */}
          <motion.div
            className="transition-transform duration-500 hover:scale-125 flex flex-col items-center"
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <FaTiktok className="text-5xl" />
            <span className="text-sm mt-2">TikTok</span>
          </motion.div>

          {/* Canva */}
          <motion.div
            className="transition-transform duration-500 hover:scale-125 flex flex-col items-center"
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <SiCanva className="text-5xl" />
            <span className="text-sm mt-2">Canva</span>
          </motion.div>

          {/* CapCut */}
          <motion.div
            className="transition-transform duration-500 hover:scale-125 flex flex-col items-center"
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <BiMoviePlay className="text-5xl" />
            <span className="text-sm mt-2">CapCut</span>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.button
          className="mt-5 px-8 py-3 text-xl bg-yellow-500 text-black rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
    <SocialItems/>
    <Socialcards2/>
    <Customersays2/>
    </>
  );
};

export default HeroSection;
