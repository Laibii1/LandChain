/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../font.css';
import house1 from "../../assets/marketplace2.png";
import { TokenClass } from "../../EthersClasses/Token";
import { MarketplaceClass } from "../../EthersClasses/Marketplace";
import { ethers } from "ethers";
import { _MarketplaceContractAddress } from "../../EthersClasses/ContractAddress";
import { MarketPlaceHeroSection } from "./MarketPlaceHeroSection";

function NFTCard({ tokenId, image, onClick }) {
  return (
    <div
      className="flex-shrink-0 w-56 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 mr-4 last:mr-0 cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-full h-56 object-cover"
        src={image}
        alt={`Token #${tokenId}`}
      />
    </div>
  );
}

export const NFTMarketplaceMainSection=()=> {
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

  const fetchListings = async () => {
    // Fetch listings from Marketplace contract and update states
    // Then store them in local storage
    localStorage.setItem("directSales", JSON.stringify(directSales));
    localStorage.setItem("auctions", JSON.stringify(auctions));
    localStorage.setItem("rentSales", JSON.stringify(rentSales));
  };

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

  const handleClearData = () => {
    localStorage.removeItem("directSales");
    localStorage.removeItem("auctions");
    localStorage.removeItem("rentSales");
    setDirectSales([]);
    setAuctions([]);
    setRentSales([]);
    console.log("All local storage data cleared");
  };

  const handleCardClick = (nft, saleType) => {
    if (saleType == "auction") {
      navigate("/NFTAuction", { state: { nft, saleType } });
    } else {
      navigate("/NFTCard", { state: { nft, saleType } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
     
      <MarketPlaceHeroSection/>
      <div className="container mx-auto mt-10 md:mt-20 px-4">
        <div className="mb-8 bg-[#191919] px-6 py-10 rounded-sm shadow-md">
          <h2 className="text-xl font-bold mb-4 text-white font-Inter font-semibold">Create Listing Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="number"
              placeholder="Token ID"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
              className="text-white border-[1px] border-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-3 rounded-md text-sm font-ReemKufi w-full"
            />
            <input
              type="number"
              placeholder="Price (ETH)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="text-white border-[1px] border-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-3 rounded-md text-sm font-ReemKufi w-full"
            />
            <input
              type="number"
              placeholder="Duration (for auction/rent)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="text-white border-[1px] border-white focus:outline-none focus:ring-1 focus:ring-[#D0482E] bg-[#404040] px-3 py-3 rounded-md text-sm font-ReemKufi w-full"
            />
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleCreateDirectSale}
              className="bg-[#D0482E] text-white px-4 py-3 rounded hover:bg-[#7A1806] font-ReemKufi font-bold text-sm"
            >
              Create Direct Sale
            </button>
            <button
              onClick={handleCreateAuction}
              className="bg-[#979797] text-white px-4 py-3 rounded hover:bg-[#787878] font-ReemKufi font-semibold text-sm"
            >
              Create Auction
            </button>
            <button
              onClick={handleCreateRentSale}
              className="border-[1px] border-white text-white px-4 py-3 rounded hover:border-[#D0482E] font-ReemKufi font-semibold text-sm"
            >
              Create Rent Sale
            </button>
          </div>
        </div>

        <div className=" justify-between items-center mb-4 bg-[#191919] px-6 py-10 rounded-sm">
         <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-xl font-bold text-white font-Inter text-left">
            Direct Sales
          </h2>
          <button
            onClick={handleClearData}
            className="bg-[#FFFEFE] text-black px-4 py-2 rounded font-ReemKufi font-semibold text-sm"
          >
            Clear All Data
          </button>
        </div>
          <img src={house1}/>
       

        <div className="flex overflow-x-scroll py-2">
          {directSales.map((sale) => (
            <NFTCard
              key={sale.tokenId}
              tokenId={sale.tokenId}
              image={sale.image}
              onClick={() => handleCardClick(sale, "direct")}
            />
          ))}
        </div>
         </div>

        <div className="justify-between items-center mb-4 bg-[#191919] px-6 py-10 rounded-sm">
          <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-xl font-bold text-white font-Inter text-left">
            Auction
          </h2>
        </div>
          <img src={house1}/>
        
          <div className="flex overflow-x-scroll py-2">
            {auctions.map((auction) => (
              <NFTCard
                key={auction.tokenId}
                tokenId={auction.tokenId}
                image={auction.image}
                onClick={() => handleCardClick(auction, "auction")}
              />
            ))}
          </div>
          </div>
       

        <div className="justify-between items-center mb-4 bg-[#191919] px-6 py-10 rounded-sm">
          <div className="flex justify-between items-center w-full ">
          <h2 className="text-xl font-bold text-white font-Inter text-left">
            Recent Sales
          </h2>
        </div>
            {rentSales.map((sale) => (
              <NFTCard
                key={sale.tokenId}
                tokenId={sale.tokenId}
                image={sale.image}
                onClick={() => handleCardClick(sale, "rent")}
              />
            ))}
          </div>
        </div>
    
    
    </div>
  );
}

*/
