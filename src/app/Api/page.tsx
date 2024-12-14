'use client';

import { FC } from 'react';

interface SignInProps {
  onToggle?: () => void; // Add optional typing for onToggle
}

const SignIn: FC<SignInProps> = ({ onToggle }) => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form>
          {/* Form Fields */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={handleToggle}
          className="mt-4 text-sm text-blue-500 hover:underline"
        >
          Toggle something
        </button>
      </div>
    </div>
  );
};

export default SignIn;
