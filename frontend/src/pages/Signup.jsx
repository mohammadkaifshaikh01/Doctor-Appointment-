import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BASE_URL;
  const { updateUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
  
    const userData = { username: name, email, password };
  
    try {
      const response = await axios.post(`${API_URL}/register`, userData, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("Response Data:", response.data); 
      toast.success("Signup Successful!");
  
    
     
      localStorage.setItem("token", response.data.token);
  
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Axios Error:", error); // Log entire error object
  
     
    }
  };
  

  return (
    <>
      <div className="flex justify-center items-center h-[60vh] mt-20">
        <div className="w-[550px] bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="text-center py-6 bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-md">
            <h3 className="text-2xl font-semibold">Create an Account</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6 flex flex-col gap-6">
              <div>
                <label className="text-gray-500 text-sm">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label className="text-gray-500 text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label className="text-gray-500 text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
                  placeholder="Enter Your Password"
                />
              </div>

              <button type="submit" className="w-60 bg-blue-500 text-white py-3 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition">
                Sign Up
              </button>
            </div>
          </form>

          <div className="px-6 pb-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?
              <button onClick={() => navigate("/login")} className="ml-1 font-bold text-cyan-500 cursor-pointer hover:underline">
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} theme="light" />
    </>
  );
};

export default Signup;
