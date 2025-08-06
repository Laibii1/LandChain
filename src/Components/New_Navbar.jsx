import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import { BrowserProvider, formatEther } from "ethers";
import { NavLink } from "react-router-dom";

import LandChain from "../assets/LandChain.png";
import SearchIcon from "../assets/searchicon.png";
import "./font.css";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWallet, FaUnlink, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const New_Navbar = ({ onWalletChange }) => {
const [account, setAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [balance, setBalance] = useState(null);
  const [accountName, setAccountName] = useState("");


//    Fetch balance when account/connection changes
  useEffect(() => {
  const fetchDetails = async () => {
    if (account && isConnected && typeof window.ethereum !== "undefined") {
      try {
        const provider = new BrowserProvider(window.ethereum);

        // Get balance
        const balanceWei = await provider.getBalance(account);
        const balanceEth = formatEther(balanceWei);
        const formattedBalance = parseFloat(balanceEth).toFixed(4);
        setBalance(formattedBalance);

        // Get ENS name
        const ensName = await provider.lookupAddress(account);
        setAccountName(ensName || ""); // fallback to empty string if no ENS
      } catch (error) {
        console.error("Error fetching wallet details:", error);
        setBalance(null);
        setAccountName("");
      }
    }
  };

  fetchDetails();
}, [account, isConnected]);


  //  Notify parent (App.js) about wallet status
const prevState = useRef({});
useEffect(() => {
  if (onWalletChange && account && isConnected && balance !== null) {
    onWalletChange({ account, isConnected, balance, accountName });
  }
}, [account, isConnected, balance, accountName]);




  // Popup auto-hide
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  //  Check wallet status on mount
  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    const userDisconnected = localStorage.getItem("walletDisconnected") === "true";

    if (typeof window.ethereum !== "undefined" && !userDisconnected) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
        }
      } catch (error) {
        console.error("Error checking connection:", error);
      }
    }
  };

 const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        localStorage.removeItem("walletDisconnected");
        setShowPopup(true);

        // Reload the page after successful connection
        window.location.reload();
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  } else {
    alert("Please install MetaMask!");
  }
};

const disconnectWallet = () => {
  setAccount("");
  setIsConnected(false);
  setBalance(null);
  localStorage.setItem("walletDisconnected", "true");

  // Reload the page after disconnection
  window.location.reload();
};








  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#D0482E] px-4 py-1 rounded-3xl w-[95%] mt-8 flex flex-wrap items-center justify-between">

     {/* Logo */}
      <div className="flex items-center space-x-3 ml-2 ">
      <Link to="/">
        <img src={LandChain} alt="LandChain Logo" className=" cursor-pointer h-[35px] lg:h-[50px] sm:h-[35px] md:h-[35px]" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="bg-[#F9DCD5] rounded-full px-4 py-2 w-1/2 lg:w-1/4 flex items-center mx-auto lg:mx-0 lg:mt-0">
       <img
         src={SearchIcon}
         alt="Search Icon"
         className="w-5 h-5 mr-3 cursor-pointer"
         onMouseEnter={() => setShowPlaceholder(true)}
         onMouseLeave={() => setShowPlaceholder(false)}
       />
        <input
          type="text"
           placeholder={showPlaceholder ? "Search" : ""}
           className="bg-transparent outline-none w-full text-sm placeholder-black font-ReemKufi font-semibold"
         />
        </div>

      {/* Hamburger Toggle */}
      <div className="lg:hidden ml-auto z-50">
        {menuOpen ? (
          <FiX
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Fullscreen Hamburger Menu */}
      {menuOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90%] bg-black opacity-90 text-white text-center flex flex-col py-6 gap-4 z-40 lg:hidden transition-all rounded-b-3xl">
      <NavLink to="/" className={({ isActive }) =>   isActive ? "underline font-medium" : "hover:underline"  }>        
        Home
       </NavLink>        
       
        <NavLink to="/FetchNFT" className={({ isActive }) =>  isActive ? "underline font-medium" : "hover:underline"}>        
        Wallet
        </NavLink>        
       
       <NavLink to="/uploadnft" className={({ isActive }) => isActive ? "underline font-medium" : "hover:underline"}>
          Mint NFT
        </NavLink>        
       
        <NavLink to="/Marketplace" className={({ isActive }) =>   isActive ? "underline font-medium" : "hover:underline" }>        
        Market Place
        </NavLink>        
       
       <NavLink to="/Profile" className={({ isActive }) => isActive ? "underline font-medium" : "hover:underline" }>        
        Profile
        </NavLink>
     </div>
      )}

      {/* Nav Links for Large Screens */}
      <div className="hidden lg:flex lg:items-center lg:space-x-6 text-white text-sm font-medium font-Inter">
     <NavLink to="/" className={({ isActive }) =>   isActive ? "underline font-medium" : "hover:underline"  }>        
        Home
       </NavLink>        
       
        <NavLink to="/FetchNFT" className={({ isActive }) =>  isActive ? "underline font-medium" : "hover:underline"}>        
        Wallet
        </NavLink>        
       
       <NavLink to="/uploadnft" className={({ isActive }) => isActive ? "underline font-medium" : "hover:underline"}>
          Mint NFT
        </NavLink>        
       
        <NavLink to="/Marketplace" className={({ isActive }) =>   isActive ? "underline font-medium" : "hover:underline" }>        
        Market Place
        </NavLink>        
       
       <NavLink to="/Profile" className={({ isActive }) => isActive ? "underline font-medium" : "hover:underline" }>        
        Profile
        </NavLink>
      </div>

      {/* Wallet Button & Address */}
     <div className="hidden lg:flex items-center space-x-4">
  {isConnected && (
    <span className="text-white text-xs md:text-sm font-semibold bg-black/20 px-3 py-1 rounded-full font-ReemKufi">
      {account.slice(0, 6)}...{account.slice(-4)}
    </span>
  )}
{showPopup && (
 <div className="fixed mt-80 inset-0 flex items-center justify-center z-50">

      <div className="bg-black text-white px-10 py-8 rounded-lg shadow-lg flex flex-col items-center gap-5 border-[1px] border-white">
        <FaCheckCircle className="text-[#D0482E] bg-white rounded-full text-4xl" />
        <span className="text-md font-ReemKufi">Wallet Connected Succesfully!</span>
      </div>
    </div>
)}
  

  {isConnected ? (
   <button
      onClick={disconnectWallet}
      className="bg-[#535353] text-white mr-2 px-3 py-3 rounded-md text-sm hover:bg-[#7A1806] font-ReemKufi"
    >
      Disconnect
    </button>


  ) : (
    <button
      onClick={connectWallet}
      className="bg-[#535353] text-white mr-2 px-4 py-3 rounded-md text-sm hover:bg-[#7A1806] font-ReemKufi"
    >
      Connect Wallet
    </button>
  )}
    </div>

{/* Wallet Icon for Small/Medium Screens */}
<div className="flex lg:hidden ml-4">
  {showPopup && (
 <div className="fixed mt-80 inset-0 flex items-center justify-center z-50">

      <div className="bg-black text-white px-10 py-8 rounded-lg shadow-lg flex flex-col items-center gap-5 border-[1px] border-white">
        <FaCheckCircle className="text-[#D0482E] bg-white rounded-full text-4xl" />
        <span className="text-md font-ReemKufi">Wallet Connected Succesfully!</span>
      </div>
    </div>
)}

  {isConnected ? (
    <FaUnlink
      onClick={disconnectWallet}
      className="text-white text-lg cursor-pointer"
      title="Disconnect Wallet"
    />
  ) : (
    <FaWallet
      onClick={connectWallet}
      className="text-white text-xl cursor-pointer"
      title="Connect Wallet"
    />
  )}
</div>
    </nav>
  );
};
