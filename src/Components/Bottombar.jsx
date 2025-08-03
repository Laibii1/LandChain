import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaWallet, FaPlus, FaUser, FaPalette} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

function Bottombar() {
  const navigate = useNavigate();
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white rounded-full bottom-4 left-1/2 dark:bg-[#D0482E] ">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-[#7A1806] dark:hover:bg-[#7A1806] group"
          onClick={() => {
            navigate("/NFTDashboard");
          }}
        >
          <FaHome className="h-8 w-8 text-white"/>
          <span className="sr-only">Home</span>
        </button>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300  rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-wallet"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-[#7A1806] dark:hover:bg-[#7A1806] group"
          onClick={() => {
            navigate("/FetchNFT");
          }}
        >
         <FaWallet className="h-8 w-8 text-white"/>
          
          <span className="sr-only">Wallet</span>
        </button>
        <div
          id="tooltip-wallet"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Wallet
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div className="flex items-center justify-center">
          <button
            data-tooltip-target="tooltip-new"
            type="button"
            className="inline-flex items-center justify-center w-[50px] h-[50px] font-medium bg-black rounded-full hover:bg--[#7A1806] dark:hover:bg-[#7A1806] group focus:ring-4 focus:ring-black focus:outline-none dark:focus:ring-black"
            onClick={() => {
              navigate("/dd");
            }}
          >
           <FaPlus className="h-8 w-8 text-white"/>
            <span className="sr-only">New item</span>
          </button>
        </div>
        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Create new item
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-[#7A1806] dark:hover:bg-[#7A1806] group"
          onClick={() => {
            navigate("/Marketplace");
          }}
        >
         <FiSettings className="h-8 w-8 text-white"/>
          <span className="sr-only">Settings</span>
        </button>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-profile"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-[#7A1806] dark:hover:bg-[#7A1806] group"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <FaUser className="h-8 w-8 text-white"/>
          <span className="sr-only">Profile</span>
        </button>
        <div
          id="tooltip-profile"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Profile
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}

export default Bottombar;
