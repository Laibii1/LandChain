import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../font.css';
import House1 from "../../assets/HeroSectionImg1.png";
import House2 from "../../assets/HeroSectionImg2.png";
import House3 from "../../assets/HeroSectionImg3.png";

const imageSlides = [House1, House2, House3];

export const HeroSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageSlides.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-gray-700 body-font bg-[#FFFEFE] ">
      <div className="max-w-7xl mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {/* Left Side - Text */}
        <div className="md:w-2/3 lg:pr-20 md:pr-12 flex flex-col items-center text-center">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold mb-2 mt-10 text-gray-900 font-ReemKufi">
            Your Home, Your Token, Your Future
          </h2>
          <div className="w-80 h-[2px] bg-[#D0482E] rounded-full mb-4"></div>
          <p className="mb-8 text-[15px] text-gray-800 max-w-xl font-Josefin leading-relaxed font-semibold">
            Discover a new era of homeownership with our cutting-edge blockchain platform.
            Transform your property into a digital asset you can securely trade, manage, and grow.
            With real estate tokenization, gain greater freedom and financial opportunity.
            Your home becomes more than a living space — it becomes a smart investment in your future.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-[#D0482E] hover:bg-[#b83921] text-white px-10 py-3 rounded font-semibold text-md"
              onClick={() => navigate("/SignUp")}
            >
              Sign Up
            </button>
            <button
              className="bg-white text-[#535353] border-[1px] border-black px-12 py-3 rounded font-semibold text-md hover:bg-gray-100"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
          </div>
        </div>

        {/* Right Side - Slideshow */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageSlides.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
