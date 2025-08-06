import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { New_Navbar } from "../Components/New_Navbar";
import  {HeroSection3D}  from "../Components/Landingpage/Hero_section_3D";
import { PropertyCards } from "../Components/Landingpage/Property_tockenization_cards_section";
import { UniqueNftSection } from "../Components/Landingpage/Unique_Nft";
import { FutureInsightSection } from "../Components/Landingpage/FutureInsight_section";
import { PricingSection } from "../Components/Landingpage/Pricing";
import { QuoteSection } from "../Components/Landingpage/Quote";
import { MapSection } from "../Components/Landingpage/Map";
import Footer from "../Components/Footer";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
     
      <HeroSection3D/>
      <PropertyCards/>
      <UniqueNftSection/>
      <FutureInsightSection/>
      <PricingSection/>
      <QuoteSection/>
      <MapSection/>

    </div>
  );
};

export default LandingPage;
