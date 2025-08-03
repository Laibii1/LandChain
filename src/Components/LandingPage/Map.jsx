import React from "react";

export const MapSection = () => {
  return (
    <section className="relative w-full flex justify-center items-center">
      {/* Google Map Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90vh] border-2">
  <iframe
    width="100%"
    height="100%"
    frameBorder="0"
    title="Lahore Map"
    color="black"
    scrolling="no"
    src="https://maps.google.com/maps?q=Lahore%20Pakistan&z=14&output=embed"
    style={{
      filter: "contrast(1.1)",
    }}
    className="rounded-lg shadow-lg"
  />
</div>
        <div className="container px-5 py-20 mx-auto flex justify-center">
          <div className="lg:w-2/5 md:w-1/2 bg-black bg-opacity-80 rounded-lg p-8 flex flex-col relative z-10">
            <h2 className="text-white text-sm mb-4 font-medium text-center font-Inter">
              Feedback
            </h2>
          
            <input
              className="bg-white rounded border border-gray-300 font-ReemKufi focus:outline-none h-12 focus:border-[#D0482E] text-sm px-4 py-2 mb-2"
              placeholder="Enter Email Address"
              type="email"
            />
            <textarea
              className="bg-white rounded border border-gray-300 font-ReemKufi focus:outline-none focus:border-[#D0482E] h-[230px] text-sm px-4 py-2 mb-2 mb-4 resize-none"
              placeholder="Message"
            />
            <button className="text-white bg-[#D0482E] border-0 py-2 px-6 focus:outline-none hover:bg-[#BC290D] rounded text-lg font-ReemKufi">
              Submit
            </button>
           
          </div>
        </div>
      </section>
  
)}
