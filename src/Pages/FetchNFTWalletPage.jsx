import React, { useState } from "react";

import { New_Navbar } from "../Components/New_Navbar";
import { FetchNFTSection } from "../Components/FetchNFTWallet/FetchNFTWalletSection";
import Footer from "../Components/Footer";


const FetchNFT = () => {

  return (
    <div>
      <New_Navbar/>
      <FetchNFTSection/>
      <Footer/>
    </div>
  );
};

export default FetchNFT;
