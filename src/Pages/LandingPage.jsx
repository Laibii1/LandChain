import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { New_Navbar } from "../Components/New_Navbar";
import { PropertyCards } from "../Components/Landing page/Property_tockenization_cards_section";
import { UniqueNftSection } from "../Components/Landing page/Unique_Nft";
import { FutureInsightSection } from "../Components/Landing page/FutureInsight_section";
import { PricingSection } from "../Components/Landing page/Pricing";
import { QuoteSection } from "../Components/Landing page/Quote";
import { MapSection } from "../Components/Landing page/Map";
import { HeroSectionCopy } from "../Components/LandingPage/Hero_section_copy";

import Footer from "../Components/Footer";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSectionCopy/>
      <PropertyCards />
      <UniqueNftSection />
      <FutureInsightSection />
      <PricingSection />
      <QuoteSection />
      <MapSection />

    </div>
  );
};

export default LandingPage;
