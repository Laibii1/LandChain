import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { New_Navbar } from "../Components/New_Navbar";
import  {HeroSection3D}  from "../Components/Landing page/Hero_section_3D";
import { PropertyCards } from "../Components/Landing page/Property_tockenization_cards_section";
import { UniqueNftSection } from "../Components/Landing page/Unique_Nft";
import { FutureInsightSection } from "../Components/Landing page/FutureInsight_section";
import { PricingSection } from "../Components/Landing page/Pricing";
import { QuoteSection } from "../Components/Landing page/Quote";
import { MapSection } from "../Components/Landing page/Map";
import Footer from "../Components/Footer";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <New_Navbar />
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
