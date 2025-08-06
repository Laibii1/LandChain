import '../font.css';
import {FaArrowRight} from "react-icons/fa";
import propertyIcon1 from '../../assets/propertyIcon1.png'; 
import propertyIcon2 from '../../assets/propertyIcon2.png';
import propertyIcon3 from '../../assets/propertyIcon3.png';


export const PropertyCards = () => {
 
  return (
   <section className="text-gray-700 body-font border-t border-gray-200 w-full">
  <div className="w-full px-10 lg:px-10 py-20"> 
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-md text-[#D0482E] font-bold font-Inter tracking-widest title-font mb-1">
        NonFungibleTokens
      </h2>
      <h1 className="sm:text-3xl text-2xl font-bold font-Inter text-gray-900">
        Property Tokenization
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">

  {/* Card 1 */}
  <div className="mb-2 h-50">
    <div className="flex flex-col items-center rounded-lg bg-white px-5 border border-black shadow-xl">
      <div className="w-20 h-20 m-5">
        <img src={propertyIcon1} alt=" Icon" className="w-20 h-20 object-contain" />
      </div>
      <h2 className="text-gray-900 text-lg font-semibold text-center mb-2 font-bold font-Inter">
        Unlock Partial Ownership
      </h2>
      <p className="text-center text-base mb-4 font-ReemKufi text-sm">
        Invest in fractions of prime real estate. Start your property portfolio with lower capital.
      </p>

      {/* Learn More Button */}
      <button className="group relative bg-[#D0482E] hover:bg-[#BC290D] text-white font-medium py-2 px-6 rounded mb-5 transition-all duration-300 w-40 hover:w-48 overflow-hidden">
  <span className="block transition-all duration-300 group-hover:translate-x-[-8px] text-center  font-ReemKufi font-bold">
    Learn More
  </span>
  <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
</button>

    </div>
  </div>
      
      {/* Card 2 */}

<div className="mb-2 ">
    <div className="flex flex-col items-center rounded-lg  bg-white px-5 border border-black shadow-xl">
      <div className="w-20 h-20 m-5">
        <img src={propertyIcon2} alt=" Icon" className="w-20 h-20 object-contain" />
      </div>
      <h2 className="text-gray-900 text-lg font-semibold text-center mb-2 font-bold font-Inter">
         Trade Properties Like Stocks
      </h2>
      <p className="text-center text-base mb-4  text-sm  font-ReemKufi">
         Buy and sell property tokens anytime No more waiting months
                    for real estate transactions
      </p>

       {/* Learn More Button */}
      <button className="group relative bg-[#D0482E] hover:bg-[#BC290D] text-white font-medium py-2 px-6 rounded mb-5 transition-all duration-300 w-40 hover:w-48 overflow-hidden">
  <span className="block transition-all duration-300 group-hover:translate-x-[-8px] text-center  font-ReemKufi font-bold">
    Learn More
  </span>
  <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
</button>
    </div>
  </div>



           {/* Card 3 */}

      <div className="mb-2 ">
      <div className="flex flex-col items-center rounded-lg  bg-white px-5 border border-black shadow-xl ">
        
        {/* GIF Icon */}
        <div className="w-20 h-20 m-5">
          <img
            src={propertyIcon3} // Make sure icon.gif is in public/assets/
            alt=" Icon"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-gray-900 text-lg font-semibold text-center mb-2 font-bold font-Inter">
         Invest Globally, From Anywhere
        </h2>

        {/* Description */}
        <p className="text-center text-base mb-4 text-sm  font-ReemKufi">
         Access international property markets Diversify your
                    portfolio across borders
        </p>
       
        {/* Learn More Button */}
      <button className="group relative bg-[#D0482E] hover:bg-[#BC290D] text-white font-medium py-2 px-6 rounded mb-5 transition-all duration-300 w-40 hover:w-48 overflow-hidden">
  <span className="block transition-all duration-300 group-hover:translate-x-[-8px] text-center  font-ReemKufi font-bold">
    Learn More
  </span>
  <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
</button>

      </div>
    </div>

           </div>
  </div>
</section>
  
)}