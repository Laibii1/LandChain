
//                  USING ********* MarketPlaceViewNFTPage ******** instead this card


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { MarketplaceClass } from "../EthersClasses/Marketplace";

const NFTCard = () => {
  const Contractor = new MarketplaceClass();
  const location = useLocation();
  const navigate = useNavigate();
  const { nft, image, title, price, change, saleType } = location.state;

  const handleAction = () => {
    console.log(`Action for NFT with token ID: ${nft.tokenId}`);
    if (saleType === "direct") {
      Contractor.buyDirectSale(nft.tokenId, nft.price);
    } else if (saleType === "rent") {
      Contractor.rentNFT(nft.tokenId, nft.price);
    }
  };

  const getActionButtonText = () => {
    if (saleType === "direct") return "Buy Now";
    if (saleType === "rent") return "Rent";
    return "Take Action";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 max-w-sm w-full">
        <img
          src={nft.image}
          alt={`Token #${nft.tokenId}`}
          className="w-full h-64 object-cover"
        />
        <div className="p-5 space-y-3">
          <h5 className="text-xl font-semibold text-gray-800">
            Token #{nft.tokenId}
          </h5>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Price:</span>{" "}
            {ethers.formatEther(nft.price)} ETH
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Sale Type:</span> {saleType}
          </p>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleAction}
              className="flex-1 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              {getActionButtonText()}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
