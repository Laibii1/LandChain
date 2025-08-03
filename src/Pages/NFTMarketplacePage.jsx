import Footer from "../Components/Footer";
import { NFTMarketplaceMainSection } from "../Components/MarketPlace/NFTMarketplace";
import { New_Navbar } from "../Components/New_Navbar";

export const NFTMarketplace=()=> {
 
  return (
    <div>
      <New_Navbar/>
      <NFTMarketplaceMainSection/> 
      <Footer/>
    </div>
  );
}


