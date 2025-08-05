import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGavel, FaHome, FaPlus, FaTags } from 'react-icons/fa';
import {  UnifiedPopup } from './listingPopups';

export function AddingButton() {
const [isOpen, setIsOpen] = useState(false);

  
  const navigate = useNavigate();
 
const [popupMode, setPopupMode] = useState(null); // 'direct', 'rent', 'auction'
const popupRef = useRef(null);

// Close popup when clicking outside
 useEffect(() => {
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupMode(null);
    }
  };
  if (popupMode) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [popupMode]);



  const toggleSpeedDial = () => {                  // add button condition
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div data-dial-init className="fixed end-6 bottom-6 group">
        {/* DirectListing here */}
        <div
          id="speed-dial-menu-default"
          className={`flex flex-col items-center mb-4 space-y-2 ${isOpen ? 'block' : 'hidden'}`}
        >
          <button
            title='Create DirectListing'
            type="button"
            data-tooltip-target="tooltip-share"
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-white hover:text-black bg-white rounded-full border-2 border-black dark:border-black shadow-sm dark:hover:text-black dark:text-white hover:bg-white dark:bg-black dark:hover:bg-white focus:ring-4 focus:ring-black focus:outline-none dark:focus:ring-black"
             onClick={() => setPopupMode('direct')}
          >
            <FaHome className="w-5 h-5" />
            <span className="sr-only">DirectListing</span>
          </button>

        </div>
        {/* Rent sale here */}
       <div
          id="speed-dial-menu-default"
          className={`flex flex-col items-center mb-4 space-y-2 ${isOpen ? 'block' : 'hidden'}`}
        >
          <button
           title='Create Rent Sales'
            type="button"
            data-tooltip-target="tooltip-share"
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-white hover:text-black bg-white rounded-full border-2 border-black dark:border-black shadow-sm dark:hover:text-black dark:text-white hover:bg-white dark:bg-black dark:hover:bg-white focus:ring-4 focus:ring-black focus:outline-none dark:focus:ring-black"
          onClick={() => setPopupMode('rent')}
          >
            <FaTags className="w-5 h-5" />
            <span className="sr-only">Rent Sales</span>
          </button>

        </div>


        {/*  Auction Sales here */}
        <div
          id="speed-dial-menu-default"
          className={`flex flex-col items-center mb-4 space-y-2 ${isOpen ? 'block' : 'hidden'}`}
        >
          <button
            title='Create Auction Sales'
            type="button"
            data-tooltip-target="tooltip-share"
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-white hover:text-black bg-white rounded-full border-2 border-black dark:border-black shadow-sm dark:hover:text-black dark:text-white hover:bg-white dark:bg-black dark:hover:bg-white focus:ring-4 focus:ring-black focus:outline-none dark:focus:ring-black"
          onClick={() => setPopupMode('auction')}

          >
            <FaGavel className="w-5 h-5" />
            <span className="sr-only"> Auction Sales</span>
          </button>

         
        </div>

         {/* plus button here */}
        
        <button
          type="button"

          onClick={toggleSpeedDial}
          aria-controls="speed-dial-menu-default"
          aria-expanded={isOpen}
          className="flex items-center justify-center text-white bg-black-500 rounded-full border-2 border-white w-14 h-14 hover:bg-blue-800 dark:bg-black dark:hover:bg-[#D0482E] focus:ring-4 focus:ring-black focus:outline-none dark:focus:ring-[#D0482E] transition-transform duration-300"
        >
          <FaPlus className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>


        {/* Create DirectListing Popup */}
   {popupMode && (
  <UnifiedPopup mode={popupMode} ref={popupRef} onClose={() => setPopupMode(null)} />
)}

    </div>
  );
}
