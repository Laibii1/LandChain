import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Components/Footer";
import { HeroSection } from "../Components/Landing page/Hero_section";
import { PropertyCards } from "../Components/Landing page/Property_tockenization_cards_section";
import { AttributeSection } from "../Components/Landing page/Attributes";
import { UniqueNftSection } from "../Components/Landing page/Unique_Nft";
import { PricingSection } from "../Components/Landing page/Pricing";
import { MapSection } from "../Components/Landing page/Map";
import { New_Navbar } from "../Components/New_Navbar";


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <New_Navbar />
      <HeroSection/>
      <PropertyCards/>
      <AttributeSection/>
      <UniqueNftSection/>
      <PricingSection/>
      <MapSection/>
      <Footer />
    </div>
  );
};

export default LandingPage;
