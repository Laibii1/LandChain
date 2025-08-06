import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown, FaCheck, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import classNames from "classnames";
import { TokenClass } from "../../EthersClasses/Token";
import elec from "../../assets/Electricity.png";
import axios from "axios";

import "../font.css"

// Steps List
const steps = [
  "Property Details",
  "Ownership Information",
  "Document uploads",
  "Upload NFT",
  "Submit",
];




// Step Indicator
const StepIndicator = ({ currentStep, completedSteps }) => (
  <div className="flex mt-10 items-center justify-between mb-6 relative max-w-4xl mx-auto font-ReemKufi">
    {steps.map((label, i) => (
      <div key={i} className="flex-1 flex flex-col items-center relative z-10">
        {completedSteps.includes(i) && (
          <div className="absolute -top-6 w-5 h-5 bg-green-700 rounded-full flex items-center justify-center text-white text-xs z-10">
            <FaCheck />
          </div>
        )}
        <div
          className={classNames(
            "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-20",
            {
              "bg-black": currentStep >= i,
              "bg-gray-400": currentStep < i,
            }
          )}
        >
          {`0${i + 1}`}
        </div>
        <p className="text-[12px] text-center mt-1 font-semibold mb-10">{label}</p>
      </div>
    ))}
    <div className="absolute top-4 left-[10%] right-[10%] h-1 bg-gray-300 z-0 ">
      <div
        className="h-1 bg-black transition-all duration-700"
        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
      ></div>
    </div>
  </div>
);

// Card Wrapper
const Card = ({ title, index, currentStep, setCurrentStep, children }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  const handleToggle = () => {
    setCurrentStep(index);
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border border-black rounded-lg p-4 my-4 shadow-sm bg-white">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleToggle}>
        <h2 className="text-lg font-semibold">{title}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

// STEP 1
const Step1Fields = ({ data, setData, setIsValid }) => {
  useEffect(() => {
    const allFilled = Object.values(data).every(Boolean);
    setIsValid(allFilled);
  }, [data]);

  return (
    <div className="space-y-4 font-ReemKufi mt-10">
      <div>
        <label className="block text-[#535353] text-sm font-medium">Enter the address</label>
        <input
          type="text"
          className="w-full border border-black rounded p-2 mt-1 text-[#535353] text-sm "
          placeholder="Address"
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-[#535353] text-sm  font-medium">Enter the legal description</label>
        <input
          type="text"
          className="w-full border border-black text-[#535353] text-sm  rounded p-2 mt-1"
          placeholder="Legal description"
          value={data.legal}
          onChange={(e) => setData({ ...data, legal: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-[#535353] text-sm font-medium">Enter the Plot Number</label>
        <input
          type="text"
          className="w-full border border-black text-[#535353] text-sm rounded p-2 mt-1"
          placeholder="Parcel/ Plot Number"
          value={data.plot}
          onChange={(e) => setData({ ...data, plot: e.target.value })}
        />
      </div>
    </div>
  );
};

// STEP 2
const Step2Fields = ({ data, setData, setIsValid }) => {
  useEffect(() => {
    const isValid = data.ownerName.trim() !== "";
    setIsValid(isValid);
  }, [data]);

  return (
    <div className="space-y-4 font-ReemKufi">
      <div>
        <label className="block  text-[#535353] text-sm font-semibold text-sm mb-1">
          Enter the Owner Name
        </label>
        <input
          type="text"
          placeholder="Owner Name"
          className="w-full border border-black text-[#535353] text-sm rounded p-2 placeholder-gray-400"
          value={data.ownerName}
          onChange={(e) => setData({ ...data, ownerName: e.target.value })}
        />
      </div>
      <div>
        <label className="block  text-[#535353] text-sm font-semibold text-sm mb-1">
          Enter the Previous Owner Name{" "}
          <span className="text-red-600 font-bold">(* If applicable)</span>
        </label>
        <input
          type="text"
          placeholder="Previous Owner Name"
          className="w-full border border-black text-[#535353] text-sm rounded p-2 placeholder-gray-400"
          value={data.previousOwner}
          onChange={(e) => setData({ ...data, previousOwner: e.target.value })}
        />
      </div>
    </div>
  );
};

// STEP 3
const Step3Uploads = ({ files, setFiles, setIsValid }) => {
  useEffect(() => {
    const allUploaded = Object.values(files).every((file) => file !== null);
    setIsValid(allUploaded);
  }, [files]);

  const handleFileChange = (key, file) => {
    // Only allow specific document file types
    const allowedTypes = [
      "application/pdf",
      "application/msword", // .doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
      "text/plain", // .txt
    ];

    if (file && allowedTypes.includes(file.type)) {
      setFiles((prev) => ({ ...prev, [key]: file }));
    } else {
      alert("Only PDF, DOC, DOCX, and TXT files are allowed.");
    }
  };

  const UploadBox = ({ label, name }) => (
    <div className="flex flex-col gap-2">
      <label className="flex flex-col items-center justify-center p-6 border border-dashed border-black text-[#535353] text-sm rounded-md cursor-pointer hover:bg-gray-50 transition text-center">
        <FaCloudUploadAlt className="text-3xl text-gray-600 mb-2" />
        <span className="text-sm font-medium">{label}</span>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => handleFileChange(name, e.target.files[0])}
        />
        {/* Show uploaded file name */}
      {files[name] && (
        <span className="mt-2 text-xs text-gray-400 truncate">
          {files[name].name}
        </span>
      )}
      </label>
      
    </div>
  );

  return (
    <div className="grid font-ReemKufi grid-cols-1 sm:grid-cols-2 gap-4">
      <UploadBox label="Property Details" name="propertyDetails" />
      <UploadBox label="Tax Records" name="taxRecords" />
      <UploadBox label="Owner ID" name="ownerId" />
      <UploadBox label="Property Survey" name="propertySurvey" />
      <UploadBox label="Mortgage Document" name="mortgageDoc" />
      <UploadBox label="Title Documents" name="titleDoc" />
    </div>
  );
};

// STEP 4
const Step4Uploads = ({ file, setFile, setIsValid }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setIsValid(!!file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  return (
    <label className="flex border border-dashed border-black text-[#535353] text-sm font-ReemKufi flex-col items-center justify-center p-6 rounded-md cursor-pointer hover:bg-gray-50 transition text-center">
      {preview ? (
        <img
          src={preview}
          alt="Uploaded NFT"
          className="w-60 h-60 object-cover rounded"
        />
      ) : (
        <>
          <FaCloudUploadAlt className="text-3xl text-gray-600 mb-2" />
          <span className="text-sm font-medium">Upload Your NFT</span>
        </>
      )}
      <input
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </label>
  );
};

// FINAL COMPONENT
export default function NftUploadForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [validSteps, setValidSteps] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [metadataCounter, setMetadataCounter] = useState(0);
  const [popupMessage, setPopupMessage] = useState("");
const [popupType, setPopupType] = useState(""); // success | error
const tokenClass = new TokenClass();

useEffect(() => {
  const savedCounter = localStorage.getItem("metadataCounter");
  if (savedCounter) {
    setMetadataCounter(parseInt(savedCounter));
  }
}, []);

const uploadToPinata = async (file, name) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("pinataMetadata", JSON.stringify({ name }));

    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: import.meta.env.VITE_REACT_APP_PINATA_API_KEY,
          pinata_secret_api_key: import.meta.env
            .VITE_REACT_APP_PINATA_SECRET_API_KEY,
        },
      }
    );

    return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
  };

const createMetadata = (data, imageUrl) => {
  return {
    name: `Property ${metadataCounter}`,
    description: `Property at ${data.address}`,
    image: imageUrl,
    attributes: [
      { trait_type: "Address", value: data.address },
      { trait_type: "Legal Description", value: data.legal },
      { trait_type: "Parcel/Lot Number", value: data.plot },
      { trait_type: "Current Owner", value: data.ownerName },
      { trait_type: "Previous Owner", value: data.previousOwner },
      { trait_type: "Purchase Price", value: "N/A" },
      { trait_type: "Date of Purchase", value: "N/A" },
      { trait_type: "Property Size", value: "N/A" },
      { trait_type: "Zoning Information", value: "N/A" },
    ],
  };
};

const handleSubmit = async () => {
  if (validSteps.length >= 4) {
    try {
      setCurrentStep(4);
      setShowPopup(true);
      setPopupMessage("Uploading NFT...");
      setPopupType("");

      // 1. Upload NFT image
      const imageUrl = await uploadToPinata(
        step4,
        `Property_Image_${metadataCounter}`
      );

      // 2. Create metadata
      const metadata = createMetadata({ ...step1, ...step2 }, imageUrl);

      // 3. Upload metadata
      const metadataFile = new Blob([JSON.stringify(metadata)], {
        type: "application/json",
      });

      const metadataUrl = await uploadToPinata(
        metadataFile,
        `Property_Metadata_${metadataCounter}`
      );

      // 4. Mint NFT
      await tokenClass.mint(metadataUrl);

      // 5. Update counter
      const newCounter = metadataCounter + 1;
      setMetadataCounter(newCounter);
      localStorage.setItem("metadataCounter", newCounter.toString());

      // 6. Success popup
      setPopupMessage("NFT uploaded and minted successfully!");
      setPopupType("success");

      // 7. Reset form after delay
      setTimeout(() => {
        setShowPopup(false);
        setPopupMessage("");
        resetForm();
      }, 2000);
    } catch (error) {
      console.error("Error during NFT minting:", error);
      setPopupMessage("There was an error uploading or minting the NFT.");
      setPopupType("error");

      setTimeout(() => {
        setShowPopup(false);
        setPopupMessage("");
      }, 3000);
    }
  }
};


  // All form states (lifted up)
  const [step1, setStep1] = useState({ address: "", legal: "", plot: "" });
  const [step2, setStep2] = useState({ ownerName: "", previousOwner: "" });
  const [step3, setStep3] = useState({
    propertyDetails: null,
    taxRecords: null,
    ownerId: null,
    propertySurvey: null,
    mortgageDoc: null,
    titleDoc: null,
  });
  const [step4, setStep4] = useState(null);

  const handleValidationChange = (stepIndex, isValid) => {
    setValidSteps((prev) =>
      isValid
        ? [...new Set([...prev, stepIndex])]
        : prev.filter((i) => i !== stepIndex)
    );
  };

  const resetForm = () => {
    setStep1({ address: "", legal: "", plot: "" });
    setStep2({ ownerName: "", previousOwner: "" });
    setStep3({
      propertyDetails: null,
      taxRecords: null,
      ownerId: null,
      propertySurvey: null,
      mortgageDoc: null,
      titleDoc: null,
    });
    setStep4(null);
    setValidSteps([]);
    setCurrentStep(0);
  };


  return (
    <section>
      {/* Hero section of Upload Nft Page*/}
     <section className="relative mt-40 text-center px-4 sm:px-8 md:py-2">
      {/* Tag Button */}
      <div className="inline-block mt-4 mb-4">
        <button
          className="bg-[#D0482E] text-white px-5 py-2 rounded-full text-sm flex items-center gap-2 font-Inter font-light"
          onClick={() => {
    document.getElementById("Form")?.scrollIntoView({ behavior: "smooth" });
  }}
        >
          <img src={elec} className="h-6" /> NFT Minting
        </button>
      </div>
      {/* Heading */}
      <h1 className="text-xl sm:text-3xl font-extrabold text-black mb-6 font-Inter ">
       Dont Replace. Integrate
      </h1>
      {/* Description */}
      <p className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base sm:text-md mb-20 font-ReemKufi">
        Browse and invest in tokenized properties with confidence. Landchain combines blockchain security
        with real-world value to make ownership seamless, transparent, and future-ready. Experience peace
        of mind—whether you're buying your first plot or expanding your portfolio.
      </p>
      <hr className="w-3/5  mx-auto border-t-1 border-gray-400" />

    </section>


       {/* Upload Nft Form*/}
    <section>
    <div className="max-w-4xl mx-auto p-4 relative font-ReemKufi " id="Form">
      <h1 className="text-2xl font-bold text-center mb-20">Property Verification Form</h1>

      <StepIndicator currentStep={currentStep} completedSteps={validSteps} />

      <Card title="Property Details" index={0} currentStep={currentStep} setCurrentStep={setCurrentStep}>
        <Step1Fields data={step1} setData={setStep1} setIsValid={(isValid) => handleValidationChange(0, isValid)} />
      </Card>

      <Card title="Ownership Information" index={1} currentStep={currentStep} setCurrentStep={setCurrentStep}>
        <Step2Fields data={step2} setData={setStep2} setIsValid={(isValid) => handleValidationChange(1, isValid)} />
      </Card>

      <Card title="Document uploads" index={2} currentStep={currentStep} setCurrentStep={setCurrentStep}>
        <Step3Uploads files={step3} setFiles={setStep3} setIsValid={(isValid) => handleValidationChange(2, isValid)} />
      </Card>

      <Card title="Upload NFT" index={3} currentStep={currentStep} setCurrentStep={setCurrentStep}>
        <Step4Uploads file={step4} setFile={setStep4} setIsValid={(isValid) => handleValidationChange(3, isValid)} />
      </Card>

      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          className={`text-white font-semibold py-3 px-10 rounded-md transition-all duration-200 ${
            validSteps.length >= 4
              ? "bg-[#D0482E] hover:bg-white hover:text-black border hover:border-[#D0482E]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={validSteps.length < 4}
        >
          Submit
        </button>
      </div>

      {/* Popup Modal */}
     {showPopup && (
  <div
    className={`fixed top-20 right-10 px-6 py-3 font-ReemKufi rounded-xl text-white shadow-lg z-50 transition-all duration-300 ${
      popupType === "success"
        ? "bg-green-600"
        : popupType === "error"
        ? "bg-red-600"
        : "bg-black"
    }`}
  >
    {popupMessage}
  </div>
)}
    </div>
    </section>
    </section>
  );
}
