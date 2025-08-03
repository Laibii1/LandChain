import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import '../font.css';


export const PricingSection = () => {
 
  return (
    <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap font-ReemKufi">
          <div className="lg:w-1/4 mt-48 hidden lg:block">
            <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">
                Tokenization
              </p>
              <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                State Ownership
              </p>
              <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                Rental
              </p>
              <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                3d designs
              </p>
              <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                Best House
              </p>
              <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                Filters
              </p>
              <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                Market Insights
              </p>
              <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                Staking
              </p>
              <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                Mining
              </p>
            </div>
          </div>
          <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
            <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">START</h3>
                <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">
                  Free
                </h2>
                <span className="text-sm text-gray-600">Next 3 months</span>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                5 Tokens
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <FaCheckCircle/>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <FiX className="h-5  w-5"/>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                 <FiX className="h-5  w-5"/>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <FiX className="h-5  w-5"/>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <FiX className="h-5  w-5"/>
              </p>
              <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
               <button className="group relative bg-[#D0482E] hover:bg-[#BC290D] text-white font-medium py-4 px-7 rounded transition-all duration-300 w-40 hover:w-48 overflow-hidden">
  <span className="block transition-all duration-300 group-hover:translate-x-[-8px] text-center  font-ReemKufi font-bold">
    Proceed Now
  </span>
  <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
</button>
              </div>
            </div>
            <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-[#D0482E] relative">
              <span className="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <div className="px-2 text-center h-48 flex flex-col items-center  bg-[#D0482E] justify-center">
                <h3 className="tracking-widest text-white text-lg">PRO</h3>
                <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                  $38
                  <span className="text-base text-black mt-5 ml-1">/Month</span>
                </h2>
                <span className="text-md text-white ">
                  Charging <span className="text-black text-lg"> $456 </span> per year
                </span>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                20 Tokens
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <FaCheckCircle/>
                </span>
              </p>
              <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <FaCheckCircle/>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <FiX className="h-5  w-5"/>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
               <FiX className="h-5  w-5"/>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
               <FiX className="h-5  w-5"/>
              </p>
              <div className="p-6 text-center border-t border-gray-300">
               <button className="group relative bg-[#D0482E] hover:bg-[#BC290D] text-white font-medium py-4 px-7 rounded transition-all duration-300 w-40 hover:w-48 overflow-hidden">
  <span className="block transition-all duration-300 group-hover:translate-x-[-8px] text-center  font-ReemKufi font-bold">
    Proceed Now
  </span>
  <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
</button>
              </div>
            </div>
            <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center ">
                <h3 className="tracking-widest">BUSINESS</h3>
                <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                  $54
                  <span className="text-base text-black mt-5 ml-1">/Month</span>
                </h2>
                <span className="text-sm text-gray-600">
                  Charging <span className="text-black text-lg"> $648 </span> per year
                </span>
              </div>
              <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                Unlimited Minting
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                Feature
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                <FaCheckCircle/>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <FaCheckCircle/>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                 <FaCheckCircle/>
                </span>
              </p>
              <div className="p-6 text-center border-t border-gray-300">
 <button className="group relative bg-[#D0482E] hover:bg-[#BC290D] text-white font-medium py-4 px-7 rounded transition-all duration-300 w-40 hover:w-48 overflow-hidden">
  <span className="block transition-all duration-300 group-hover:translate-x-[-8px] text-center  font-ReemKufi font-bold">
    Proceed Now
  </span>
  <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
</button>
</div>
            </div>
          </div>
        </div>
      </section>
)}