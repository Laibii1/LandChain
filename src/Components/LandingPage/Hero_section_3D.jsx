import React, { useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import model from "../../assets/HouseModel/alpha-blend-litmus.glb";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../font.css";

const modelSlides = [model];

function Model({ url, cursorX }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      scale={0.5}
      position={[0, 0, 0]}
      rotation={[0, (cursorX - 0.5) * Math.PI * 2, 0]}
    />
  );
}

export const HeroSection3D = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorX, setCursorX] = useState(0.5); // 0 to 1 for rotation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modelSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setCursorX(e.clientX / window.innerWidth);
  };

  return (
    <section
      className="text-gray-700 body-font bg-[#FFFEFE]"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {/* Left Side - Text */}
        <div className="md:w-2/3 lg:pr-20 md:pr-12 flex flex-col items-center text-center">
          <h2 className="text-lg sm:text-lg md:text-lg font-bold mb-2 mt-10 text-gray-900 font-ReemKufi">
            Your Home, Your Token, Your Future
          </h2>
          <div className="w-80 h-[2px] bg-[#D0482E] rounded-full mb-4"></div>
          <p className="mb-8 text-[15px] text-gray-800 max-w-xl font-Josefin leading-relaxed font-semibold">
            Discover a new era of homeownership with our cutting-edge blockchain
            platform. Transform your property into a digital asset you can
            securely trade, manage, and grow. Your home becomes more than a
            living space — it becomes a smart investment in your future.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-[#D0482E] hover:bg-[#b83921] text-white px-10 py-3 rounded font-semibold text-md"
              onClick={() => navigate("/SignUp")}
            >
              Sign Up
            </button>
            <button
              className="bg-white text-[#535353] border-[1px] border-black px-12 py-3 rounded font-semibold text-md hover:bg-gray-100"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
          </div>
        </div>

        {/* Right Side - 3D GLB Viewer Slideshow */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-[500px]">
          <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
            <ambientLight />
            <directionalLight position={[2, 2, 2]} />
            <Suspense fallback={null}>
              <Model url={modelSlides[currentIndex]} cursorX={cursorX} />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
