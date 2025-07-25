import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const MapSection = () => {
 
  return (
    <section className="text-gray-700 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?q=%C4%B0zmir&amp;z=14&amp;output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex justify-center">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            {/* <p className="leading-relaxed mb-5 text-gray-600"></p> */}
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            />
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
            {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
          </div>
        </div>
      </section>
  
)}