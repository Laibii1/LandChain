import Footer from "../Components/Footer";
import { ExploreMoreSection } from "../Components/MarketPlace/ExploreMoreSection";

import { MarketPlaceHeroSection } from "../Components/MarketPlace/MarketPlaceHeroSection";
import { New_Navbar } from "../Components/New_Navbar";

export const NFTMarketplace = ({ walletInfo }) => {
  return (
    <div>
      <MarketPlaceHeroSection walletInfo={walletInfo} />
      <ExploreMoreSection/>

    </div>
  );
}


