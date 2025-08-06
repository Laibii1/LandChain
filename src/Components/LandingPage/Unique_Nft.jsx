
import { useNavigate } from "react-router-dom";
import {  FaChartBar, FaCheckCircle, FaFileInvoiceDollar } from "react-icons/fa";
import bgImage from "../../assets/Black-bg.png";
import BlocksIcon from "../../assets/FourBlocks.png";




export const UniqueNftSection = () => {
  const navigate = useNavigate();

  return (
    <>
     
      <div className="text-center mt-10 mb-8">
        <h1 className="sm:text-3xl text-2xl font-bold text-black mb-5">
          Unique Benefits
        </h1>
      </div>

      {/* Section with background image */}
    <section className="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden mx-auto w-[90%] h-[150vh] sm:h-[110vh] md:h-[100vh]"
style={{ backgroundImage: `url(${bgImage})` }}
>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 z-10" />

        {/* Content on top of image */}
        <div className="relative z-20 px-5 py-10 h-full lg:w-[60%] flex flex-wrap items-center justify-center">
           <div className="lg:mt-10 lg:mb-10 max-w-xl mx-auto text-center">
          <h2 className="text-md md:text-lg font-bold text-white font-Inter font-bold mb-4">
           Elevate Your Digital Portfolio with Unique NFT
           </h2>
           <p className="text-white text-base font-ReemKufi font-light md:text-md">
             Discover Rare and Exclusive Digital Assets. Invest in the Future of Blockchain-Powered Ownership.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="w-full md:w-[300px] border border-white rounded-lg p-3 shadow-lg backdrop-blur-md hover:border-[#D0482E]">
              <div className="w-10 h-10 mb-4 bg-white text-[#D0482E] rounded-full flex items-center justify-center hover:border-2 hover:border-[#D0482E]">
                <FaChartBar  className="h-6 w-6" />
              </div>
              <h2 className="text-md font-semibold font-Inter mb-2 text-white">
                Real-Time Market Insights
              </h2>
              <p className="text-white text-sm font-ReemKufi">
                Up-to-the-minute property valuations. Make informed decisions with live market data.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[300px] border border-white rounded-lg p-3 shadow-lg backdrop-blur-md hover:border-[#D0482E]">
              <div className="w-10 h-10 mb-4 bg-white text-[#D0482E] rounded-full flex items-center justify-center hover:border-2 hover:border-[#D0482E]">
                <FaCheckCircle className="h-6 w-6" />
              </div>
              <h2 className="text-md font-semibold font-Inter mb-2 text-white">
                Instant Verification
              </h2>
              <p className="text-white text-sm font-ReemKufi">
                Prove ownership instantly with blockchain records. No more lengthy title searches.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-[300px] border border-white rounded-lg p-3 shadow-lg backdrop-blur-md hover:border-[#D0482E]">
              <div className="w-10 h-10 mb-4 bg-white text-[#D0482E] rounded-full flex items-center justify-center hover:border-2 hover:border-[#D0482E]">
                <FaFileInvoiceDollar  className="h-6 w-6"  />
              </div>
              <h2 className="text-md font-semibold font-Inter mb-2 text-white">
                Flexible Investment Options
              </h2>
              <p className="text-white text-sm font-ReemKufi">
                Choose from residential, commercial, or mixed-use properties and tailor portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Button below image */}
     <div className="flex justify-center items-center gap-5 mt-10 mb-20">
  <img src={BlocksIcon} alt="Sign Up" className="w-[60px] h-[60px]" />
  <button
    className="text-white bg-[#D0482E] hover:bg-[#7A1806] py-2 px-12 rounded text-md font-ReemKufi font-bold transition-all"
    onClick={() => navigate("/SignUp")}
  >
    Sign Up
  </button>
</div>
    </>
  );
};
