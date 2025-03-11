import React, { useState } from "react";
import "./Index.css";
import Dashboard from "./Dashboard";

const HelloPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cream">
      {/* Header */}
      <header className="w-full flex justify-between p-4">
        <h1 className="text-2xl font-bold">Bokas Store</h1>
        <nav className="flex gap-4">
          <a href="#" className="text-gray-700 font-semibold">HOME</a>
          <a href="#" className="text-gray-700 font-semibold">CATEGORY</a>
          <a href="#" className="text-gray-700 font-semibold">CONTACT</a>
        </nav>
        <div className="flex gap-4">
          <span className="text-xl">🔍</span>
          <span className="text-xl">👤</span>
        </div>
      </header>

     

      {/* Login Form */}
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80 mt-6">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
         {/* Login Section */}
      <div className="flex flex-col items-center mt-20">
        

        <p className="mt-2 text-blue-500">CAN'T LOGIN TO ACCOUNT? PLEASE CONTACT TO ADMIN!</p>
      </div>
      </form>
    </div>
  );
};

export default HelloPage;