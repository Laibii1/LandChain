import React, { useEffect, useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Center,
  Bounds,
  useBounds,
} from "@react-three/drei";
import * as THREE from "three";

// House Model
function YourHouseModel({ url, cursorX, modelScale, lockedAngle, isLocked }) {
  const modelRef = useRef();
  const { nodes, materials, scene } = useGLTF(url);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = lockedAngle;
    }
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      if (isLocked) {
        modelRef.current.rotation.y = lockedAngle;
      } else {
        modelRef.current.rotation.y = (cursorX - 0.5) * Math.PI * 2;
      }
    }
  });

  const renderMeshesFromNodes = () => {
    const meshElements = [];
    for (let i = 0; i <= 30; i++) {
      const meshKey = `mesh_${i}`;
      if (nodes[meshKey] && nodes[meshKey].geometry) {
        meshElements.push(
          <mesh
            key={i}
            castShadow
            receiveShadow
            geometry={nodes[meshKey].geometry}
            material={nodes[meshKey].material}
          />
        );
      }
    }

    if (meshElements.length > 0) {
      return (
        <group ref={modelRef} scale={modelScale} dispose={null}>
          {meshElements}
        </group>
      );
    }
    return null;
  };

  const renderFromScene = () => {
    if (scene && scene.children.length > 0) {
      return (
        <primitive ref={modelRef} object={scene.clone()} scale={modelScale} />
      );
    }
    return null;
  };

  const renderAllNodes = () => {
    const meshElements = [];
    Object.keys(nodes).forEach((key) => {
      const node = nodes[key];
      if (node && node.geometry) {
        meshElements.push(
          <mesh
            key={key}
            castShadow
            receiveShadow
            geometry={node.geometry}
            material={node.material}
          />
        );
      }
    });

    if (meshElements.length > 0) {
      return (
        <group ref={modelRef} scale={modelScale} dispose={null}>
          {meshElements}
        </group>
      );
    }
    return null;
  };

  const renderedModel =
    renderMeshesFromNodes() || renderFromScene() || renderAllNodes();

  return renderedModel;
}

// Fallback
function FallbackModel({ cursorX, modelScale, lockedAngle, isLocked }) {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      if (isLocked) {
        modelRef.current.rotation.y = lockedAngle;
      } else {
        modelRef.current.rotation.y = (cursorX - 0.5) * Math.PI * 2;
      }
    }
  });

  return (
    <group ref={modelRef} scale={modelScale}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#E8E8E8" />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <coneGeometry args={[2.2, 1.2, 4]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, -0.5, 1.51]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 1.2, 0.05]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[-1, 0.3, 1.51]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      <mesh position={[1, 0.3, 1.51]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      <mesh position={[1.51, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.05, 0.6, 0.8]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      <mesh position={[-1.51, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.05, 0.6, 0.8]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
    </group>
  );
}

// Main Model Loader
function MainModel({ cursorX, modelScale, lockedAngle, isLocked }) {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const possiblePaths = [
    "/assets/HouseModel/MainHouse001.glb",
    "/MainHouse001.glb",
    "/assets/MainHouse001.glb",
    "/public/assets/HouseModel/MainHouse001.glb",
    "./assets/HouseModel/MainHouse001.glb",
    "/models/MainHouse001.glb",
  ];

  const currentPath = possiblePaths[currentPathIndex];

  const tryNextPath = () => {
    if (currentPathIndex < possiblePaths.length - 1) {
      setCurrentPathIndex((prev) => prev + 1);
      setLoadError(false);
    } else {
      setLoadError(true);
    }
  };

  const handleError = (error) => {
    console.error(`❌ Error loading GLB from ${currentPath}:`, error);
    tryNextPath();
  };

  if (loadError) {
    return (
      <FallbackModel
        cursorX={cursorX}
        modelScale={modelScale}
        lockedAngle={lockedAngle}
        isLocked={isLocked}
      />
    );
  }

  return (
    <Suspense
      fallback={
        <FallbackModel
          cursorX={cursorX}
          modelScale={modelScale}
          lockedAngle={lockedAngle}
          isLocked={isLocked}
        />
      }
    >
      <YourHouseModel
        url={currentPath}
        cursorX={cursorX}
        modelScale={modelScale}
        lockedAngle={lockedAngle}
        isLocked={isLocked}
        onError={handleError}
      />
    </Suspense>
  );
}

// Auto-Center Wrapper
function CenteredModel({ cursorX, modelScale, lockedAngle, isLocked }) {
  const bounds = useBounds();

  useEffect(() => {
    setTimeout(() => {
      bounds.refresh().fit();
    }, 100);
  }, []);

  return (
    <Bounds fit clip observe margin={1.5}>
      <MainModel
        cursorX={cursorX}
        modelScale={modelScale}
        lockedAngle={lockedAngle}
        isLocked={isLocked}
      />
    </Bounds>
  );
}

// Viewer Component
export default function AngleDebugGLBViewer() {
  const [modelScale, setModelScale] = useState(1);
  const lockedAngle = (260 * Math.PI) / 180; // 260 degrees in radians

  const adjustScale = (factor) => {
    setModelScale((prev) => Math.max(0.01, Math.min(10, prev * factor)));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="md:w-2/3 lg:pr-20 md:pr-12 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Your Home, Your Token, Your Future
          </h2>
          <div className="w-80 h-1 bg-red-500 rounded-full mb-6"></div>
          <p className="mb-8 text-lg text-gray-700 max-w-xl leading-relaxed">
            Discover a new era of homeownership with our cutting-edge blockchain
            platform. Transform your property into a digital asset you can
            securely trade, manage, and grow.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Sign Up
            </button>
            <button className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Login
            </button>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-[500px] mt-8 md:mt-0">
          <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-75 text-white p-3 rounded-lg font-mono">
              <div className="text-2xl font-bold">🔒 260°</div>
              <div className="text-xs opacity-75">FIXED VIEW</div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10 bg-black bg-opacity-75 text-white p-2 rounded-lg text-xs text-center">
              Fixed Left View (260°)
            </div>

            <Canvas
              camera={{ position: [0, 3, 8], fov: 45 }}
              shadows
              className="h-full w-full bg-gradient-to-b from-blue-100 to-white"
            >
              <ambientLight intensity={0.6} />
              <directionalLight
                position={[10, 10, 10]}
                intensity={1.2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />
              <pointLight position={[-10, -10, -10]} intensity={0.4} />

              <CenteredModel
                cursorX={0.5} // Neutral value since we're not using cursor
                modelScale={modelScale}
                lockedAngle={lockedAngle}
                isLocked={true} // Always locked
              />

              <OrbitControls
                enableZoom={true}
                enablePan={true}
                minDistance={2}
                maxDistance={20}
              />

              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 2, 0]}
                receiveShadow
              >
                <planeGeometry args={[50, 50]} />
                <shadowMaterial opacity={0.15} />
              </mesh>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
