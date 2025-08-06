
import React, { useState, useEffect, useRef } from "react";
import { FaBitcoin, FaUserCircle, FaPen } from "react-icons/fa";
import { ethers } from "ethers";
import "../font.css";



export const UserProfileSection = ({ walletInfo }) => {
  const { account, balance } = walletInfo || {}; // ✅ Add this line


 const [profileImage, setProfileImage] = useState("");
  const fileInputRef = useRef(null);

 

  // Load profile image from localStorage
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) setProfileImage(storedImage);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("profileImage", reader.result);
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };



  return (
<div className="min-h-screen bg-white text-black font-ReemKufi  ">
      {/* Header */}
      
      <div className="flex justify-center mt-40">
  <h1 className="text-2xl font-Inter font-bold">CREATE YOUR PROFILE</h1>
</div>
      <div className="flex mx-auto max-w-6xl justify-between items-center mt-10 ">
      
       <div className="flex justify-between items-center w-full">
  {/* Left Section: Icon + Profile Info */}
  <div className="flex items-center gap-3">
    <FaUserCircle size={40} />
    <div>
      <h2 className="text-lg font-medium">Your Profile</h2>
      <p className="text-sm text-gray-700 font-semibold">Landchain Crypto Platform</p>
    </div>
  </div>

  {/* Right Section: Icon + Balance Info */}
  <div className="flex items-center gap-3 text-right font-ReemKufi">
    <FaBitcoin size={40} />
  <div>
  
     <p><strong>Account :</strong> {account ? `${account.slice(0, 2)}...${account.slice(-4)}` : "Not connected"}</p>

      <p><strong> Balance :</strong> {balance} <span className="text-[#D0482E]">ETH</span></p>
   

  </div>
  </div>
</div>


      </div>

      {/* Profile Card */}
      <div className="bg-[#191919] text-white px-10 py-6 max-w-6xl mx-auto mt-10 rounded-xl">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Panel: Profile Image and Bio */}
          <div className="flex flex-col items-center md:w-2/5 w-full">
            {/* Profile Image */}
            <div className="relative">
  <img
    src={
      profileImage ||
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
    }
    alt="Profile"
    className="w-32 h-32 rounded-full object-cover border-2 border-white"
  />
  <div
    onClick={triggerFileSelect}
    className="absolute bottom-1 right-1 bg-white p-1 rounded-full cursor-pointer"
  >
    <FaPen size={12} className="text-black" />
  </div>
  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    ref={fileInputRef}
    className="hidden"
  />
</div>


            {/* Name */}
            <h3 className="mt-4 font-semibold text-lg">User Name</h3>

            {/* Bio */}
            <div className="w-full">
              <label className="block text-sm mb-1">Bio</label>
              <textarea
                rows={4}
                maxLength={250}
                defaultValue="Lorem ipsum lorem ipsum lorem spum lorem ipsum l ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                className="w-full h-full text-sm text-[#979797] p-2 bg-[#3E3E3E] border border-gray-600 rounded-md focus:outline-none resize-none"
              />
              <p className="text-right text-xs text-gray-400 mt-1">0/250</p>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="md:w-3/5 w-full grid grid-cols-1 md:grid-cols-2 mt-5 gap-6">
            {/* First & Last Name */}
            <div>
              <label className="block text-sm mb-1 font-ReemKufi">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full text-sm text-[#979797] p-2 bg-[#3E3E3E] border border-gray-600 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full text-sm  text-[#979797] p-2 bg-[#3E3E3E] border border-gray-600 rounded-md focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full text-sm text-[#979797] p-2 bg-[#3E3E3E] border border-gray-600 rounded-md focus:outline-none"
              />
            </div>

              {/* phone */}
             <div className="md:col-span-2">
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="+92 000 000 000"
                className="w-full text-sm  text-[#979797] p-2 bg-[#3E3E3E] border border-gray-600 rounded-md focus:outline-none"
              />
            </div>

            {/* country */}
             <div>
              <label className="block text-sm mb-1">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full text-sm  text-[#979797] p-2 bg-[#3E3E3E] border border-gray-600 rounded-md focus:outline-none"
              />
            </div>
           

            {/*  City */}
            <div>
              <label className="block text-sm mb-1">Country</label>
              <input
                type="text"
                placeholder="Coutry"
                className="w-full text-sm  text-[#979797] p-2 bg-[#3E3E3E] border border-gray-600 rounded-md focus:outline-none"
              />
            </div>
           

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col sm:flex-row justify-center sm:justify-between mt-6 gap-4">
              <button className="bg-[#D0482E] text-white px-8 py-2 rounded-[4px]">
                Save Info
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-[4px] border border-gray-300 border-2 hover:border-[#D0482E]">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


