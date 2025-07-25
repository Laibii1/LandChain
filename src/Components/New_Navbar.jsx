import React, { useState, useEffect } from "react";
import LandChain from "../assets/LandChain logo.png";
import SearchIcon from "../assets/searchicon.png";
import "./font.css";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWallet, FaUnlink  } from "react-icons/fa";
import { Link } from "react-router-dom";

export const New_Navbar = () => {
  const [account, setAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
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
  };

  return (
    <nav className="bg-[#D0482E] px-4 py-1 rounded-3xl w-[95%] mx-auto mt-8 z-50 flex flex-wrap items-center justify-between relative">
     {/* Logo */}
      <div className="flex items-center space-x-3 ml-2 -mb-2">
      <Link to="/">
        <img src={LandChain} alt="LandChain Logo" className=" cursor-pointer h-[35px] lg:h-[60px] sm:h-[35px] md:h-[35px]" />
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
       <a href="#" className="hover:underline">Wallet</a>
       <a href="#" className="hover:underline">Mint NFT</a>
       <a href="#" className="hover:underline">Market Place</a>
      <a href="#" className="hover:underline">Profile</a>
     </div>
      )}

      {/* Nav Links for Large Screens */}
      <div className="hidden lg:flex lg:items-center lg:space-x-6 text-white text-md font-medium font-Inter">
        <Link to="/FetchNFT"> <a className="hover:underline">Wallet</a></Link>
       <Link to="/">  <a className="hover:underline">Mint NFT</a></Link>
       <Link to="/Marketplace"> <a className="hover:underline">Market Place</a></Link>
       <Link to="/Profile"> <a className="hover:underline">Profile</a> </Link>
      </div>

      {/* Wallet Button & Address */}
     <div className="hidden lg:flex items-center space-x-4">
  {isConnected && (
    <span className="text-white text-xs md:text-sm font-semibold bg-black/20 px-3 py-1 rounded-full font-ReemKufi">
      {account.slice(0, 6)}...{account.slice(-4)}
    </span>
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
