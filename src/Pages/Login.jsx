import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaArrowLeft } from "react-icons/fa";
import Logo from "../assets/LandChain.png";
import HouseImg from "../assets/Login-img.png";
import '../Components/font.css';

const Login = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (agree && fullName && email && password) {
      navigate("/Marketplace");
    } else {
      alert("Please complete all fields and agree to the terms.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-[#191919] text-white flex overflow-hidden shadow-lg">
        
        {/* Left Image Panel */}
        <div className="w-2/3 hidden md:block relative px-3 py-5 ">
          <img
            src={HouseImg}
            alt="Building"
            className="h-full w-full object-cover rounded-lg"
          />
          {/* Logo & Button */}
          <div className="absolute top-6 left-6">
            <img src={Logo} alt="Landchain Logo" className="h-12" />
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-10 right-6 text-[12px] border border-white rounded-full px-4 py-1 bg-[#2C2C2C] hover:border-[#D0482E] transition font-ReemKufi flex items-center gap-2"
          >
            <FaArrowLeft className="text-white text-sm" />
               Back to Main page
          </button>
        </div>

        {/* Right Form Panel */}
        <div className="w-full text-center justify-center md:w-1/2 px-8 py-20">
          <h2 className="text-xl font-bold mb-2 font-Inter">Get Started Now</h2>
          <p className="text-[12px] mb-6 text-gray-300">Please login to your account to continue</p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="text-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-2 rounded-md text-sm font-ReemKufi mb-2 w-full"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-2 rounded-md text-sm font-ReemKufi mb-2 w-full"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-2 rounded-md text-sm font-ReemKufi mb-2 w-full"
            />

            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="mt-1 accent-white bg-transparent"
                />
                <span className="text-[12px] font-ReemKufi">
                 I agree to{' '}
                 <a href="#" className="text-[#D0482E] underline">
                   Terms & Conditions
                 </a>
               </span>
              </label>
              <a href="#" className="text-white text-[13px] hover:underline font-ReemKufi">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full mt-2 font-ReemKufi font-bold bg-[#D0482E] hover:bg-[#A5250D] text-white font-semibold py-2 rounded transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-2">
            Don’t have an account?{' '}
            <a href="/signup" className="text-[#D0482E] underline">
              Create an account
            </a>
          </p>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-sm">Or</span>
            <hr className="flex-grow border-t border-gray-600" />
          </div>

          <div className="flex gap-4">
            <button className="flex-1 border border-white py-2 rounded flex items-center justify-center gap-2 hover:border-[#D0482E] transition">
              <FcGoogle className="text-lg" /> Google
            </button>
            <button className="flex-1 border border-white py-2 rounded flex items-center justify-center gap-2 hover:border-[#D0482E]  transition">
              <FaApple className="text-lg" /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
