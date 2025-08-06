import { useNavigate } from "react-router-dom";


import user1 from "../../assets/user 1.png";
import user2 from "../../assets/user 2.png";
import user3 from "../../assets/user 3.png";
import user4 from "../../assets/user 4.png";
import arrow from "../../assets/Arrow.png";
import elec from "../../assets/Electricity.png";
import { FaArrowRight } from "react-icons/fa";



export const MarketPlaceHeroSection = ({ walletInfo }) => {
  const navigate = useNavigate();
  const { account,accountName, isConnected } = walletInfo || {};
    
 
  

  return (
    <section className="relative mt-40 text-center px-4 sm:px-8 md:py-2">
      {/* Floating Avatars */}
      <div className="absolute top-10 left-60 hidden md:flex flex-col items-center gap-1">
        <img src={user1} alt="User 1" className="h-14 w-14 rounded-full border-[2px] border-black" />
        <img src={arrow} className="h-6 ml-5 transform rotate-[-10deg]" />
      </div>
      <div className="absolute top-8 right-60 hidden md:flex flex-col items-center gap-1">
        <img src={user2} alt="User 2" className="h-14 w-14 rounded-full border-[2px] border-black" />
        <img src={arrow} className="h-6 mr-10 transform rotate-[50deg]" />
      </div>
      <div className="absolute bottom-0 left-48 hidden md:flex flex-col items-center gap-1">
        <img src={arrow} className="h-6  ml-10 transform rotate-[-120deg]" />
        <img src={user3} alt="User 3" className="h-14 w-14 rounded-full border-[2px] border-black" />
      </div>
      <div className="absolute bottom-0 right-44 hidden md:flex flex-col items-center gap-1">
        <img src={arrow} className="h-6 mr-10 transform rotate-[155deg]" />
        <img src={user4} alt="User 4" className="h-14 w-14 rounded-full border-[2px] border-black" />
      </div>

      {/* Tag Button */}
      <div className="inline-block mt-4 mb-4">
        <button
          className="bg-[#D0482E] text-white px-5 py-2 rounded-full text-sm flex items-center gap-2 font-Inter font-light"
          onClick={() => navigate("/DD")}
        >
          <img src={elec} className="h-6" /> CREATE FOR FAST
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-xl sm:text-3xl font-extrabold text-black leading-tight mb-6 font-Inter font-semibold">
        Discover Secure{" "}
        <span className="border-b-2 border-[#D0482E] inline-block mt-2">Real Estate</span>
        <br />
        in the Digital Age
      </h1>

      {/* Description */}
      <p className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base sm:text-md mb-10 font-ReemKufi">
        Browse and invest in tokenized properties with confidence. Landchain combines blockchain security
        with real-world value to make ownership seamless, transparent, and future-ready. Experience peace
        of mind—whether you're buying your first plot or expanding your portfolio.
      </p>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => navigate("/exploremore")}
          className="group relative bg-[#D0482E] hover:bg-[#BC290D] text-white font-medium py-3 px-6 rounded transition-all duration-300 w-40 hover:w-48 overflow-hidden"
        >
          <span className="block transition-all duration-300 group-hover:translate-x-[-8px] text-center font-ReemKufi font-bold">
            Explore More
          </span>
          <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </button>


        {/* 🔐 Show only if NOT connected */}
        {isConnected && (
          <div
            
            className="border border-gray-400 text-[#535353] font-ReemKufi font-semibold px-6 py-3 rounded "
          >
            { accountName || "Wallet Connected"}
          </div>
        )}
      </div>
    </section>
  );
};
