import React, { useState } from "react";
import { TokenClass } from "../../EthersClasses/Token";
import '../font.css';

export const FetchNFTSection = () => {
   const [tokenId, setTokenId] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");
  
   const fetchNFTData = async () => {    // updated (added error mesage)
  if (!tokenId.trim()) {
    setError("Please enter a valid Token ID");
    return;
  }

  try {
    setError("");
    const Manager = new TokenClass();
    const tokenUri = await Manager.tokenURI(tokenId);

    const response = await fetch(tokenUri);
    if (!response.ok) throw new Error("Failed to fetch the token URI");

    const metadata = await response.json();
    if (metadata.image) {
      setImageUrl(metadata.image);
    } else {
      setError("No image found in the token metadata");
    }
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div className="max-w-xl mx-auto mt-40 mb-40 px-6 py-10 border border-gray-300 rounded-lg shadow-md bg-[#191919]">
      <h3 className="text-xl font-semibold text-center mb-5 text-white font-ReemKufi">NFT Viewer</h3>

      <input
        type="text"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
        placeholder="Enter Token ID"
        className="w-full px-4 py-4 mb-4 border text-white bg-[#191919] border-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#D0482E]"
      />

      <button
        onClick={fetchNFTData}
        className="w-full text-ReemKufi bg-[#D0482E] hover:bg-[#A5250D] text-white font-semibold py-4 px-4 rounded-md transition duration-300"
      >
        Fetch NFT
      </button>

      {error && (
        <p className="text-red-500 mt-4 text-sm text-center font-medium">{error}</p>
      )}

      {imageUrl && (
        <div className="mt-6 text-center">
          <img
            src={imageUrl}
            alt="NFT"
            className="max-w-full mx-auto rounded-lg shadow"
          />
        </div>
      )}
    </div>
  );
};


