import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreMore1 from "../../assets/ExploreMore1.png";
import ExploreMore2 from "../../assets/ExploreMore2.png";
import ExploreMore3 from "../../assets/ExploreMore3.png";
import house1 from "../../assets/marketplace1.png";
import house2 from "../../assets/marketplace2.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
import arrow from "../../assets/Arrow.png";
import elec from "../../assets/Electricity.png";
import { AddingButton } from "./AddingButton";
import { FaArrowRight } from "react-icons/fa";
import "../font.css";

const dummyExploreData = [
  { id: 1, title: "Explore NFT A", price: "0.001", change: "+2.5%", image: ExploreMore1 },
  { id: 2, title: "Explore NFT B", price: "0.005", change: "-1.2%", image: ExploreMore2 },
  { id: 3, title: "Explore NFT C", price: "0.002", change: "+3.1%", image: ExploreMore3 },
  { id: 4, title: "Explore NFT D", price: "0.005", change: "-1.2%", image: ExploreMore1 },
  { id: 5, title: "Explore NFT E", price: "0.002", change: "+3.1%", image: ExploreMore2 },
];

const dummyAuctionData = [
  {id: 1, title: "Abstract Landscape", description: "A vibrant digital artwork of surreal mountain scenery.", price: "1",change: "+2.5%", image: ExploreMore1 },
  {id: 2, title: "Cyberpunk City Lights", description: "Futuristic skyline illuminated with neon digital elements.",price: "0.5", change: "-1.2%", image: ExploreMore2  },
  {id: 3, title: "Pixel Portrait", description: "Retro-style pixelated face representing NFT identity.", price: "2", change: "+3.1%", image: ExploreMore3 },
  {id: 4, title: "Modern Smart Home", description: "Digitized render of a blockchain-integrated home.", price: "2", change: "+3.1%", image: house1 },
  {id: 5,title: "Eco Villa Concept",description: "An artistic vision of a sustainable digital residence.",price: "2", change: "+3.1%",image: house2 }
];

const dummyRentData = [
  {id: 1, title: "Abstract Landscape", description: "A vibrant digital artwork of surreal mountain scenery.", price: "1",change: "+2.5%", image: ExploreMore1 },
  {id: 2, title: "Cyberpunk City Lights", description: "Futuristic skyline illuminated with neon digital elements.",price: "0.5", change: "-1.2%", image: ExploreMore2  },
  {id: 3, title: "Pixel Portrait", description: "Retro-style pixelated face representing NFT identity.", price: "2", change: "+3.1%", image: ExploreMore3 },
  {id: 4, title: "Modern Smart Home", description: "Digitized render of a blockchain-integrated home.", price: "2", change: "+3.1%", image: house1 },
  {id: 5,title: "Eco Villa Concept",description: "An artistic vision of a sustainable digital residence.",price: "2", change: "+3.1%",image: house2 }
];
const dummyDirectData = [
  {id: 1, title: "Abstract Landscape", description: "A vibrant digital artwork of surreal mountain scenery.", price: "1",change: "+2.5%", image: ExploreMore1 },
  {id: 2, title: "Cyberpunk City Lights", description: "Futuristic skyline illuminated with neon digital elements.",price: "0.5", change: "-1.2%", image: ExploreMore2  },
  {id: 3, title: "Pixel Portrait", description: "Retro-style pixelated face representing NFT identity.", price: "2", change: "+3.1%", image: ExploreMore3 },
  {id: 4, title: "Modern Smart Home", description: "Digitized render of a blockchain-integrated home.", price: "2", change: "+3.1%", image: house1 },
  {id: 5,title: "Eco Villa Concept",description: "An artistic vision of a sustainable digital residence.",price: "2", change: "+3.1%",image: house2 }
];


export const MarketPlaceSection = ({ walletInfo }) => {
  const navigate = useNavigate();
  const [directSales, setDirectSales] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [rentSales, setRentSales] = useState([]);
  const { account,accountName, isConnected } = walletInfo || {};

  useEffect(() => {
    const savedDirectSales = JSON.parse(localStorage.getItem("directSales")) || [];
    const savedAuctions = JSON.parse(localStorage.getItem("auctions")) || [];
    const savedRentSales = JSON.parse(localStorage.getItem("rentSales")) || [];

    setDirectSales(savedDirectSales.length > 0 ? savedDirectSales : dummyDirectData);
    setAuctions(savedAuctions.length > 0 ? savedAuctions : dummyAuctionData);
    setRentSales(savedRentSales.length > 0 ? savedRentSales : dummyRentData);
  }, []);

  const handleCardClick = (nft, saleType) => {
    navigate("/viewnft", { state: { nft, saleType } });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const renderStyledCards = (data, saleType) => {
    return data.map((nft) => (
      <div
        key={nft.id}
        onClick={() => handleCardClick(nft, saleType)}
        className="cursor-pointer"
        style={{ paddingRight: "3px" }}
      >
        <div className="rounded-lg overflow-hidden shadow-md relative w-[95%] mx-auto">
          <img src={nft.image} alt={nft.title} className="w-full h-[230px] object-cover" />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent p-3">
            <h3 className="text-white text-sm font-semibold">{nft.title}</h3>
            <p className="text-white text-xs">
              Floor Price: {nft.price}
              <span className="text-red-500 ml-2">{nft.change}</span>
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section>
       <section className="relative mt-40 text-center px-4 sm:px-8 md:py-2">
           {/* Floating Avatars */}
           <div className="absolute top-10 left-60 hidden md:flex flex-col items-center gap-1">
             <img src={user1} alt="User 1" className="h-14 w-14 rounded-full border-[2px] border-black" />
             <img src={arrow} className="h-6 ml-5 transform rotate-[-10deg]" />
           </div>
           <div className="absolute top-8 right-60 hidden md:flex flex-col items-center gap-1">
             <img src={user2} alt="User 2" className="h-14 w-14 rounded-full border-[2px] border-black" />
             <img src={arrow} className="h-6 mr-10 transform rotate-[50deg]" />
           </div>
           <div className="absolute bottom-0 left-48 hidden md:flex flex-col items-center gap-1">
             <img src={arrow} className="h-6  ml-10 transform rotate-[-120deg]" />
             <img src={user3} alt="User 3" className="h-14 w-14 rounded-full border-[2px] border-black" />
           </div>
           <div className="absolute bottom-0 right-44 hidden md:flex flex-col items-center gap-1">
             <img src={arrow} className="h-6 mr-10 transform rotate-[155deg]" />
             <img src={user4} alt="User 4" className="h-14 w-14 rounded-full border-[2px] border-black" />
           </div>
     
           {/* Tag Button */}
           <div className="inline-block mt-4 mb-4">
             <button
               className="bg-[#D0482E] text-white px-5 py-2 rounded-full text-sm flex items-center gap-2 font-Inter font-light"
               onClick={() => navigate("/uploadnft")}
             >
               <img src={elec} className="h-6" /> CREATE FOR FAST
             </button>
           </div>
     
           {/* Heading */}
           <h1 className="text-xl sm:text-3xl font-extrabold text-black leading-tight mb-6 font-Inter font-semibold">
             Discover Secure{" "}
             <span className="border-b-2 border-[#D0482E] inline-block mt-2">Real Estate</span>
             <br />
             in the Digital Age
           </h1>
     
           {/* Description */}
           <p className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base sm:text-md mb-10 font-ReemKufi">
             Browse and invest in tokenized properties with confidence. Landchain combines blockchain security
             with real-world value to make ownership seamless, transparent, and future-ready. Experience peace
             of mind—whether you're buying your first plot or expanding your portfolio.
           </p>
     
           {/* Buttons */}
           <div className="flex justify-center items-center gap-6">
             <button
                onClick={() => {
    document.getElementById("ExploreMore")?.scrollIntoView({ behavior: "smooth" });
  }}
               className="group relative bg-[#D0482E] hover:bg-[#BC290D] text-white font-medium py-3 px-6 rounded transition-all duration-300 w-40 hover:w-48 overflow-hidden"
             >
               <span className="block transition-all duration-300 group-hover:translate-x-[-8px] text-center font-ReemKufi font-bold">
                 Explore More
               </span>
               <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
             </button>
     
     
             {/* 🔐 Show only if NOT connected */}
             {isConnected && (
               <div
                 
                 className="border border-gray-400 text-[#535353] font-ReemKufi font-semibold px-6 py-3 rounded "
               >
                 { accountName || "Wallet Connected"}
               </div>
             )}
           </div>
         </section>


    <section id="ExploreMore" className=" px-4 mt-40 z-[10] relative">
     
      {/* Explore More */}
      <h2 className="text-center text-2xl font-bold font-Inter  mb-10">Explore More</h2>
      <Slider {...settings}>
        {dummyExploreData.map((nft) => (
          <div
            key={nft.id}
           onClick={() => navigate("/NFTDashboard")}
            className="cursor-pointer"
            style={{ paddingRight: "3px" }}
          >
            <div className="rounded-lg overflow-hidden shadow-md relative w-[95%] mx-auto ">
              <img src={nft.image} alt={nft.title} className="w-full h-[230px] object-cover" />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent p-3">
                <h3 className="text-white text-sm font-semibold">{nft.title}</h3>
                <p className="text-white text-xs">
                  Floor Price: {nft.price}
                  <span className="text-red-500 ml-2">{nft.change}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Auction Sales */}
      <h2 className="text-center text-2xl font-bold font-Inter mt-10 mb-10">Auction Sales</h2>
      <Slider {...settings}>{renderStyledCards(auctions, "Auction")}</Slider>

      {/* Rent Sales */}
      <h2 className="text-center text-2xl font-bold font-Inter mt-10 mb-10">Rent Sales</h2>
      <Slider {...settings}>{renderStyledCards(rentSales, "Rent")}</Slider>

      {/* Direct Sales */}
      <h2 className="text-center text-2xl font-bold font-Inter mt-10 mb-10">Direct Sales</h2>
      <Slider {...settings}>{renderStyledCards(directSales, "Direct")}</Slider>

      <AddingButton />
    </section>
    </section>
  );
};
