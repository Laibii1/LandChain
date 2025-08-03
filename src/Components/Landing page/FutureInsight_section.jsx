import { FaShieldAlt, FaHandScissors, FaUser} from "react-icons/fa";
import FutureInsightSectionImg from "../../assets/FutureInsightPic.png"
import FutureInsightIcon1 from "../../assets/FutureInsightIcon1.png"
import FutureInsightIcon2 from "../../assets/FutureInsightIcon2.png"
import FutureInsightIcon3 from "../../assets/FutureInsightIcon3.png"

export const FutureInsightSection = () => {
 
  return (
    <section className="text-gray-700 body-font border-t border-gray-200 m-5">
      <div className="flex flex-col text-center w-full mt-10 ">
            <h1 className="sm:text-3xl text-2xl font-bold font-Inter text-gray-900">
             Future Insights
            </h1>
          </div>
        <div className="container px-5 py-10 mx-auto ">
          <div className="lg:w-full w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={FutureInsightSectionImg}
            />
          </div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full mt-7">

  {/* Card 1 */}
  <div className="mb-2">
    <div className="flex flex-col items-center rounded-lg h-full bg-white px-5 hover:bg-[#F0F0F0] hover:shadow-xl">
      <div className="w-25 h-25">
        <img src={FutureInsightIcon1} alt="Block Icon" className="w-25 h-25 object-contain" />
      </div>
      <h2 className="text-gray-900 text-md font-bold text-center mb-2 mt-4 font-bold font-ReemKuf">
       Transparent & Secure Ownership
      </h2>
      <p className="text-center text-base mb-4 font-ReemKufi text-sm">
        All transactions recorded on blockchain Immutable proof of ownership.
      </p>


    </div>
  </div>
      
      {/* Card 2 */}

<div className="mb-2 ">
    <div className="flex flex-col items-center rounded-lg h-full bg-white px-5 hover:bg-[#F0F0F0] hover:shadow-xl">
      <div className="w-25 h-25 ">
        <img src={FutureInsightIcon2} alt="Bars Icon" className="w-25 h-25 object-contain" />
      </div>
      <h2 className="text-gray-900 text-md font-bold text-center mb-2 mt-4 font-bold font-ReemKuf">
          Smart Contracts, Smarter Investing
      </h2>
      <p className="text-center text-base mb-4  text-sm  font-ReemKufi">
        Automated, hassle-free property management Receive rental
                  income directly to your wallet
      </p>

       
    </div>
  </div>



           {/* Card 3 */}

      <div className="mb-2 ">
      <div className="flex flex-col items-center rounded-lg h-full bg-white px-5 hover:bg-[#F0F0F0] hover:shadow-xl">
        
        {/* GIF Icon */}
        <div className="w-25 h-25 ">
          <img
            src={FutureInsightIcon3} // Make sure icon.gif is in public/assets/
            alt="Coins Icon"
            className="w-25 h-25  object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-gray-900 text-md font-bold text-center mb-2 mt-4 font-bold font-ReemKufi">
       Reduced Costs, Higher Returns
        </h2>

        {/* Description */}
        <p className="text-center text-base mb-4 text-sm  font-ReemKufi">
         Lower fees compared to traditional real estate No middlemen
                  means more profit for you
        </p>
       

      </div>
    </div>
    </div>
    
        </div>
      </section>
  
)}