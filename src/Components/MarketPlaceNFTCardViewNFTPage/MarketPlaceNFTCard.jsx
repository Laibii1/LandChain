import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { MarketplaceClass } from "../../EthersClasses/Marketplace";
import { FaArrowLeft } from "react-icons/fa";
import "../font.css";

export const ViewNFTCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Contractor = new MarketplaceClass();

  const [nftData, setNftData] = useState(() => {
    const fromState = location.state;
    const fromStorage = localStorage.getItem("nftData");
    return fromState || (fromStorage ? JSON.parse(fromStorage) : null);
  });

  useEffect(() => {
    if (location.state) {
      localStorage.setItem("nftData", JSON.stringify(location.state));
    }
  }, [location.state]);

  if (!nftData) return <p>No NFT Data</p>;

  const { nft, saleType } = nftData;

  const dummyNft = {
    title: "Untitled NFT",
    description:
      "This is a placeholder description for an NFT without provided details.",
    price: "0.01",
    tokenId: "0",
    image:
      "https://beyondainow.com/wp-content/uploads/2023/03/AI-and-Creativity-How-Machines-are-Changing-the-Art-World-1.png",
  };

  const safeNft = {
    ...dummyNft,
    ...nft,
  };

  const handleAction = async () => {
    const parsedPrice = ethers.parseEther(nft.price.toString());

    if (saleType === "Direct")
      await Contractor.buyDirectSale(nft.tokenId, parsedPrice);
    else if (saleType === "Rent")
      await Contractor.rentNFT(nft.tokenId, parsedPrice);
    else if (saleType === "Auction")
      await Contractor.placeBid(nft.tokenId, parsedPrice);
  };

  const getButtonLabel = () => {
    switch (saleType) {
      case "Direct":
        return "Buy Now";
      case "Rent":
        return "Rent Now";
      case "Auction":
        return "Auction Sale";
      default:
        return "Take Action";
    }
  };

  return (
    <section className="relative min-h-screen bg-white font-ReemKufi">
      {/* Fullscreen Top Image Section */}
      <div
        className="absolute top-0 left-0 w-full h-[90vh] z-40 bg-cover bg-center flex items-end text-white"
        style={{
          backgroundImage: `url(${safeNft.image})`,
        }}
      >
        <div className="relative z-50 p-10 flex flex-col md:flex-row w-full justify-between items-end bg-black/40">
          {/* Text Content */}
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold mb-3">{safeNft.title}</h1>
            <p className="text-sm text-gray-200">{safeNft.description}</p>
          </div>

          {/* Floor Price Section */}
          <div className="flex space-x-5">
            <div className="text-right">
              <p className="text-sm font-semibold">Min PRICE</p>
              <p className="text-md font-bold">{ethers.formatEther(
                ethers.parseEther((safeNft.price * 0.01).toString())
              )} ETH</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">Base PRICE</p>
              <p className="text-md font-bold">{ethers.formatEther(
                ethers.parseEther((safeNft.price * 0.1).toString())
              )}
               ETH</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">Max PRICE</p>
              <p className="text-md font-bold">{ethers.formatEther(
                      ethers.parseEther(safeNft.price.toString())
                    )} ETH</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to push content below image */}
      <div className="h-[100vh]" />

      {/* Content Section */}
      <div className="px-4 mt-10 flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute -top-16 left-0 w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-gray-200 transition z-50"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* NFT Card */}
          <div className="flex flex-col lg:flex-row bg-[#f3f3f3] shadow-md rounded-xl overflow-hidden w-full p-6 pt-14 lg:pt-6 border border-gray-200 font-bold">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={safeNft.image}
                alt={`Token #${safeNft.tokenId}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Info */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-10 flex flex-col justify-center gap-3">
              <h5 className="text-3xl font-semibold text-gray-800 my-4">
                Token #{safeNft.tokenId}
              </h5>

              <div className="text-sm text-gray-700 flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-[16px]">Item Minted</span>
                  <span className="text-[15px] text-black">
                    ${ethers.formatEther(
                ethers.parseEther((safeNft.price * 3000).toString())
              )}
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-700 flex flex-col gap-3">
                <div className="flex justify-between">
                  <span className="text-md text-gray-500">PUBLIC</span>
                  <span className="text-md">
                    {ethers.formatEther(
                      ethers.parseEther(safeNft.price.toString())
                    )}{" "}
                    ETH
                  </span>
                </div>

                <div className="flex justify-between bg-white rounded-lg items-center px-2">
                  <span className="text-green-600 font-medium text-md">
                    <span className="text-xl">• </span>MINTING NOW
                  </span>
                  <span className="text-green-600 font-semibold text-sm">
                    ${ethers.formatEther(
                ethers.parseEther((safeNft.price * 3000).toString())
              )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">
                    Nft - First Edition
                  </span>
                  <span className="text-gray-500">
                    {ethers.formatEther(
                      ethers.parseEther(safeNft.price.toString())
                    )}{" "}
                    ETH
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">Sale Type</span>
                  <span>{saleType}</span>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={handleAction}
                  className="w-full bg-[#D0482E] text-white py-2 rounded-sm font-semibold hover:bg-[#7A1806] transition"
                >
                  {getButtonLabel()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
