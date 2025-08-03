import { useState } from "react";
import {NFTMarketplace} from "./Pages/NFTMarketplacePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import DropDown from "./Pages/DropDown";
import FetchNFT from "./Pages/FetchNFTWalletPage";
import NFTCard from "./Components/NFTCard";
//import Bottombar from "./Components/Bottombar";
import NFTAuction from "./Pages/NFTAuction";
import NFTDashboard from "./Pages/NFTDashboard";
// import ViewYourNft from "./Pages/ViewYourNft";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Marketplace" element={<NFTMarketplace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/DD" element={<DropDown />} />
        <Route path="/FetchNFT" element={<FetchNFT />} />
        <Route path="/NFTDashboard" element={<NFTDashboard />} />
        <Route path="/NFTCard" element={<NFTCard />} />
        <Route path="/NFTAuction" element={<NFTAuction />} />
      </Routes>
 
    </BrowserRouter>
  );
}

export default App;
