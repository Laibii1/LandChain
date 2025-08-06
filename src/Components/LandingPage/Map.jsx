import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";

export const MapSection = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zi75dn7",
        "template_n1uesen",
        form.current,
        "xZEaIZzpHfcx9SpHO"
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
    <section className="relative w-full flex justify-center items-center">
      {/* Map and layout as before */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90vh] border-2">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="Lahore Map"
          scrolling="no"
          src="https://maps.google.com/maps?q=Lahore%20Pakistan&z=14&output=embed"
          className="rounded-lg shadow-lg"
          style={{ filter: "contrast(1.1)" }}
        />
      </div>

      <div className="container px-5 py-20 mx-auto flex justify-center">
         {isSent && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-black text-white px-10 py-8 rounded-lg shadow-lg flex flex-col items-center gap-5 border-[1px] border-white">
                <FaCheckCircle className="text-[#D0482E] bg-white rounded-full text-4xl" />
                <span className="text-md font-ReemKufi">Thank you for Feedback!</span>
              </div>
            </div>
          )}
        
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-2/5 md:w-1/2 bg-black bg-opacity-80 rounded-lg p-8 flex flex-col relative z-10"
        >
          <h2 className="text-white text-sm mb-4 font-medium text-center font-Inter">
            Feedback
          </h2>
          <input
            name="user_email"
            className="bg-white rounded border border-gray-300 font-ReemKufi focus:outline-none h-12 focus:border-[#D0482E] text-sm px-4 py-2 mb-2"
            placeholder="Enter Email Address"
            type="email"
            required
          />
          <textarea
            name="message"
            className="bg-white rounded border border-gray-300 font-ReemKufi focus:outline-none focus:border-[#D0482E] h-[230px] text-sm px-4 py-2 mb-4 resize-none"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="text-white bg-[#D0482E] border-0 py-2 px-6 focus:outline-none hover:bg-[#BC290D] rounded text-lg font-ReemKufi"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
