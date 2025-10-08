import React from "react";

const Login = () => {
  return (
    <div className="w-full md:w-1/2 max-w-sm ">
      <div className="bg-black/70 p-6 md:p-8 rounded-2xl shadow-lg w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
          Gym Management Login
        </h2>
        <form className="space-y-4 md:space-y-5">
          {/* Email */}
          <div>
            <label className="block text-md font-medium text-gray-200 mb-2">
              Enter Username 
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-md font-medium text-gray-200 mb-2">
              Password
            </label>
            <input
              type="Password"
              placeholder="Enter your Password"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        {/* <p className="text-gray-400 text-lg text-center mt-4 md:mt-5">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-400 hover:underline">
            Sign up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
