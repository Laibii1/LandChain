import React, { useState, useCallback } from "react";

import {NFTMarketplace} from "./Pages/NFTMarketplacePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import {Profile} from "./Pages/Profile";
import FetchNFT from "./Pages/FetchNFTWalletPage";
import NFTCard from "./Components/NFTCard";
import NFTDashboard from "./Pages/NFTDashboard";
import MarketPlaceViewNFT from "./Pages/MarketPlaceViewNFTPage";
import { New_Navbar } from "./Components/New_Navbar";
import Footer from "./Components/Footer";
import UploadNFT from "./Pages/UploadNFTPage";



function App() {
  
  const [walletInfo, setWalletInfo] = useState({
    account: "",
    isConnected: false,
    balance: null,
    accountName:"",
  });

  const handleWalletChange = (info) => {
    console.log("📥 Setting wallet info in App.js:", info);
    setWalletInfo(info);}



  return (
    <>
   
     
    <BrowserRouter>
        <New_Navbar onWalletChange={handleWalletChange} />
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/viewnft" element={<MarketPlaceViewNFT />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Marketplace" element={<NFTMarketplace walletInfo={walletInfo} />} />
        <Route path="/profile" element={<Profile walletInfo={walletInfo}/>} />
        <Route path="/FetchNFT" element={<FetchNFT />} />
        <Route path="/NFTDashboard" element={<NFTDashboard />} />
        <Route path="/NFTCard" element={<NFTCard />} />
        <Route path="/uploadnft" element={<UploadNFT/>} />

        
      </Routes>
      <Footer/>
 
    </BrowserRouter>
    </>
  );
}

export default App;
