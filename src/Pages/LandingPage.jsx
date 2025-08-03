import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { New_Navbar } from "../Components/New_Navbar";
import { HeroSectionCopy } from "../Components/LandingPage/Hero_section_copy";
import { PropertyCards } from "../Components/LandingPage/Property_tockenization_cards_section";
import { UniqueNftSection } from "../Components/LandingPage/Unique_Nft";
import { FutureInsightSection } from "../Components/LandingPage/FutureInsight_section";
import { PricingSection } from "../Components/LandingPage/Pricing";
import { QuoteSection } from "../Components/LandingPage/Quote";
import { MapSection } from "../Components/LandingPage/Map";
import Footer from "../Components/Footer";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <New_Navbar />
      <HeroSectionCopy />
      <PropertyCards />
      <UniqueNftSection />
      <FutureInsightSection />
      <PricingSection />
      <QuoteSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
