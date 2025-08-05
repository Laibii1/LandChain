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
import { AddingButton } from "./AddingButton";
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


export const ExploreMoreSection = () => {
  const navigate = useNavigate();
  const [directSales, setDirectSales] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [rentSales, setRentSales] = useState([]);

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
    <section className=" px-4 mt-40 z-[10] relative">
     
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
  );
};
