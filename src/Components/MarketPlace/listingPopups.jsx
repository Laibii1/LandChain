import React, { forwardRef , useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../font.css";
import { TokenClass } from "../../EthersClasses/Token";
import { MarketplaceClass } from "../../EthersClasses/Marketplace";
import { ethers } from "ethers";
import { _MarketplaceContractAddress } from "../../EthersClasses/ContractAddress";



export const UnifiedPopup = forwardRef(({ mode, onClose }, ref) => {

  // previous file logics
  
  const [directSales, setDirectSales] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [rentSales, setRentSales] = useState([]);
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");


 const navigate = useNavigate();

  const Token = new TokenClass();
  const Marketplace = new MarketplaceClass();

  useEffect(() => {
    // Fetch listings from local storage on mount
    const savedDirectSales =
      JSON.parse(localStorage.getItem("directSales")) || [];
    const savedAuctions = JSON.parse(localStorage.getItem("auctions")) || [];
    const savedRentSales = JSON.parse(localStorage.getItem("rentSales")) || [];

    setDirectSales(savedDirectSales);
    setAuctions(savedAuctions);
    setRentSales(savedRentSales);
  }, []);



const checkAndSetApproval = async () => {
    try {
      const tx = await Token.setApprovalForAll(
        _MarketplaceContractAddress,
        true
      );
      console.log("Approval set for marketplace");
    } catch (error) {
      console.error("Error setting approval:", error);
      throw error;
    }
  };
  const getImageUrl = async (tokenId) => {
    try {
      const uri = await Token.tokenURI(tokenId);
      const response = await fetch(uri);
      const metadata = await response.json();

      return metadata.image;
    } catch (error) {
      console.error("Error fetching token URI:", error);
      return ""; // Return a placeholder or default image URL
    }
  };


// Direct sale submit button function
const handleCreateDirectSale = async () => {
    try {
      // debugger;
      await checkAndSetApproval();
      const imageUrl = await getImageUrl(tokenId);
      const newSale = {
        tokenId,
        price: ethers.parseEther(price.toString()),
        image: imageUrl,
      };
      const updatedDirectSales = [...directSales, newSale];

      setDirectSales(updatedDirectSales);
      localStorage.setItem(
        "directSales",
        JSON.stringify(updatedDirectSales, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      );
      await Marketplace.createDirectSale(tokenId, ethers.parseEther(price));
    } catch (error) {
      console.error("Error creating direct sale:", error);
    }
  };

  // Auction sale submit button function
  const handleCreateAuction = async () => {
    try {
      if (!price || isNaN(price)) {
        throw new Error("Invalid price value");
      }

      await checkAndSetApproval();

      const imageUrl = await getImageUrl(tokenId);

      const newAuction = {
        tokenId,
        highestBid: ethers.parseEther(price.toString()),
        image: imageUrl,
        duration,
      };

      const updatedAuctions = [...auctions, newAuction];

      setAuctions(updatedAuctions);
      localStorage.setItem(
        "auctions",
        JSON.stringify(updatedAuctions, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      );

      await Marketplace.createAuction(
        tokenId,
        ethers.parseEther(price.toString()),
        duration
      );
    } catch (error) {
      console.error("Error creating auction:", error);
    }
  };

  // Rent sale submit button function
  const handleCreateRentSale = async () => {
    try {
      debugger;
      await checkAndSetApproval();
      const imageUrl = await getImageUrl(tokenId);
      const newRentSale = {
        tokenId,
        price: ethers.parseEther(price),
        image: imageUrl,
        duration,
      };
      const updatedRentSales = [...rentSales, newRentSale];

      setRentSales(updatedRentSales);
      localStorage.setItem(
        "rentSales",
        JSON.stringify(updatedRentSales, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      );
      await Marketplace.createRentSale(
        tokenId,
        ethers.parseEther(price),
        duration
      );
    } catch (error) {
      console.error("Error creating rent sale:", error);
    }
  };



  // creation card titles
  const getTitle = () => {
    switch (mode) {
      case 'direct': return 'Create Direct Sale';
      case 'rent': return 'Create Rent Sale';
      case 'auction': return 'Create Auction Sale';
      default: return 'Create Listing';
    }
  };

// function for submit button according to rent, direct, auction buttons
  const getSubmitHandler = () => {
  switch (mode) {
    case 'direct': return handleCreateDirectSale;
    case 'rent': return handleCreateRentSale;
    case 'auction': return handleCreateAuction;
    default: return () => {};
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic based on mode
    console.log(`${mode} submitted!`);
    onClose(); // Close popup after submission
  };

  return (
    <div className="fixed inset-0 z-100 bg-gray-200 bg-opacity-80 flex justify-center items-center">
      <div ref={ref} className="bg-white rounded-2xl border border-black p-8 w-[90%] md:w-3/4 max-w-4xl">
        <h2 className="text-center text-xl font-bold mb-10 font-Inter">{getTitle()}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-semibold block mb-1 font-Inter">Token ID</label>
            <input className="w-full border border-black bg-gray-100 text-black px-4 py-2 rounded-sm font-ReemKufi"
             placeholder="Enter token ID"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
               required />
          </div>
          <div>
            <label className="font-semibold block mb-1 font-Inter">Price</label>
            <input className="w-full border border-black bg-gray-100 text-black px-4 py-2 rounded-sm font-ReemKufi"
             placeholder="Enter price" 
             type="number"
             value={price}
              onChange={(e) => setPrice(e.target.value)}
             required />
          </div>
          <div>
            <label className="font-semibold block mb-1 font-Inter">Duration</label>
            <input className="w-full border border-black bg-gray-100 text-black px-4 py-2 rounded-sm font-ReemKufi"
             placeholder="Enter duration"
             value={duration}
              onChange={(e) => setDuration(e.target.value)}
             required />
          </div>

          <div className="md:col-span-3 flex justify-center pt-4">
            <button
              type="submit"
              onClick={getSubmitHandler()} 
              className="bg-[#D0482E] hover:bg-[#C0290C] text-white px-8 py-2 rounded-md font-ReemKufi font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

