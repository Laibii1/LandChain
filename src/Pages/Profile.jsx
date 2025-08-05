import React from "react";
import { New_Navbar } from "../Components/New_Navbar";
import { UserProfileSection } from "../Components/userProfile/userProfileSection";
import Footer from "../Components/Footer";


export const Profile = ({walletInfo}) => {
  return (
    <div>
   
     <UserProfileSection walletInfo={walletInfo}/>
     
    </div>
  );
};


