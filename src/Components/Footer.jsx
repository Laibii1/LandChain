import React, { useEffect, useRef, useState } from 'react';
import tailwindIcon from "../assets/tailwind.png";
import reactIcon from "../assets/react.png";
import figmaIcon from "../assets/figma.png";
import mongodbIcon from "../assets/mongo.png";
import nodeIcon from "../assets/node.png";
import solidityIcon from "../assets/solidity.png";
import logo from "../assets/LandChain.png"; 
import linkedinIcon from "../assets/Linkedin.png";
import youtubeIcon from "../assets/Youtube.png";
import twitterIcon from "../assets/X.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {FaCheck, FaCheckCircle} from "react-icons/fa";
import './font.css';


const Footer = () => {
  

// Icons sliding animation
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let position = 0;
    let animationFrameId;

    const scroll = () => {
      if (!trackRef.current || !containerRef.current) return;

      position -= 1;
      if (Math.abs(position) >= trackRef.current.scrollWidth / 2) {
        position = 0;
      }

      trackRef.current.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const icons = [
    tailwindIcon,
    reactIcon,
    figmaIcon,
    mongodbIcon,
    nodeIcon,
    solidityIcon,
  ];


// sending newsletter mail to user by using emailjs browser

 const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_773q7ob", // Replace with your Email.js Service ID
      "template_fgsqzkl", // Replace with your Email.js Template ID
      {
        user_email: email,  // The entered email will be sent to this user
        from_email: "laiba.riaz545@gmail.com" // Your email address
      },
      "_QUTak-OFm_p1Dlto" // Replace with your Email.js Public Key
    )
    .then(() => {
      setIsSent(true);
      setEmail("");
    })
    .catch((error) => console.error("Email sending failed:", error));
  };

useEffect(() => {
  if (isSent) {
    const timer = setTimeout(() => {
      setIsSent(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }
}, [isSent]);


  return (
    <footer className="bg-black text-white mt-20 px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center text-center">
        {/* Logo & Description */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="LandChain Logo" className="w-48 mb-4" />
          <p className="text-sm max-w-sm leading-relaxed font-ReemKufi">
            Discover a new era of homeownership with our cutting-edge blockchain platform. Transform your property into a digital asset you can securely trade, manage, and grow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold underline mb-2 font-ReemKufi">Quick Links</h3>
          
            <Link to='NFTDashboard'className="hover:underline font-ReemKufi">Home</Link>
            <Link to="/FetchNFT" className="hover:underline font-ReemKufi">Wallet</Link>
            <Link to="/DD" className="hover:underline font-ReemKufi">Mint NFT</Link>
            <Link to="/Marketplace" className="hover:underline font-ReemKufi">Market Place</Link>
            <Link to="/Profile" className="hover:underline font-ReemKufi">Profile</Link>
         
        </div>

        {/* Newsletter + Docs */}
        <div className="flex flex-col items-center ">
          <h3 className="text-lg font-semibold mb-2 font-ReemKufi font-bold text-left">Subscribe to our Newsletter to get updates</h3>
         <div className="flex w-full max-w-sm flex-col gap-5">
  {isSent && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black text-white px-10 py-8 rounded-lg shadow-lg flex flex-col items-center gap-5 border-[1px] border-white">
        <FaCheckCircle className="text-[#D0482E] bg-white rounded-full text-4xl" />
        <span className="text-md font-ReemKufi">Thank you for subscribing!</span>
      </div>
    </div>
  )}

  <form onSubmit={sendEmail} className="flex flex-col lg:flex-row gap-2 w-full">
    <input
      type="email"
      placeholder="Enter your email here"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full px-4 py-2 text-black rounded-sm"
    />
    <button className="bg-[#7A1806] px-4 py-2 rounded-sm text-white text-sm hover:bg-[#D0482E] font-ReemKufi font-bold w-full lg:w-auto">
      Subscribe
    </button>
  </form>
</div>

       


          {/* Trems and conditions */}
          <div className="mt-6">
            <h4 className="underline font-semibold mb-1 font-ReemKufi text-left">Documentation</h4>
            <div className="flex flex-wrap gap-4 text-sm mt-2 font-ReemKufi">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Return Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-40 md:gap-40">
  <h4 className="font-bold text-md text-cenetr md:text-center font-Inter">TECHNOLOGICAL STACK</h4>

  
      <div
      className="overflow-hidden border border-white rounded-full px-4 py-2 w-full md:w-2/3 lg:w-2/3  lg:-mr-20"
      ref={containerRef}
    >
      <div
        ref={trackRef}
        className="flex gap-20 w-max"
        style={{ willChange: 'transform' }}
      >
        {/* Duplicated icons for infinite loop */}
        {icons.concat(icons).map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Tech-${index}`}
            className="h-8 md:h-10 "
          />
        ))}
      </div>
    </div>
</div>

      {/* Bottom Legal & Social */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 font-Inter">
        <p className="text-sm">@2025 LandChain<br/><span className="text-sm text-gray-500 underline mt-2 md:mt-0">Terms of Use & Privacy policy</span></p>
        
        <div className="flex gap-5 md:mt-0 m-2">

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src={twitterIcon} alt="Twitter" className="h-7 hover:opacity-80 transition" />
  </a>

  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <img src={youtubeIcon} alt="YouTube" className="h-7 hover:opacity-80 transition" />
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src={linkedinIcon} alt="LinkedIn" className="h-7 hover:opacity-80 transition" />
  </a>
</div>
      
      </div>
    </footer>
  );
};

export default Footer;
