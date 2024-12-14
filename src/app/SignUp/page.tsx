"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // For 3D animations

const SignUp = ({ onToggle }: { onToggle: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || password !== confirmPassword) {
      setError("Please fill in all fields correctly.");
      return;
    }

    // Simulate success
    setSuccessMessage("You have successfully signed up! Welcome to our store.");
    setError(""); // Reset error message
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-10 rounded-xl shadow-xl w-96 relative overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* 3D Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 opacity-50 rounded-xl"
          animate={{
            rotateX: "30deg",
            rotateY: "30deg",
            scale: 1.2,
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: -1,
          }}
        ></motion.div>

        <h2 className="text-4xl text-center font-bold text-white mb-8">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-indigo-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <div className="flex items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="ml-2 text-indigo-600"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Already have an account? Sign In link */}
        <div className="mt-4 text-center">
          <span className="text-white">
            Already have an account?{" "}
          <a href="/SignIn"><button
              onClick={onToggle}
              className="text-indigo-600 hover:underline"
            >
              Sign In
            </button></a>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
