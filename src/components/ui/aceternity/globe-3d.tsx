"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function useIsLight() {
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    const check = () => setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return isLight;
}

function WireGlobe({ isLight }: { isLight: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });
  const fg = isLight ? "#09090b" : "#ffffff";
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial color={fg} wireframe transparent opacity={isLight ? 0.06 : 0.08} />
      </mesh>
      <mesh scale={1.02}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial color={fg} transparent opacity={isLight ? 0.02 : 0.025} roughness={0.3} />
      </mesh>
    </Float>
  );
}

function Ring({ isLight }: { isLight: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.18;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.6, 0, 0]}>
      <torusGeometry args={[2.15, 0.015, 16, 120]} />
      <meshBasicMaterial color={isLight ? "#09090b" : "#ffffff"} transparent opacity={isLight ? 0.08 : 0.12} />
    </mesh>
  );
}

export function HeroGlobe3D({ className }: { className?: string }) {
  const isLight = useIsLight();
  return (
    <div className={className ?? "absolute inset-0 -z-10 opacity-40"}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={isLight ? 1 : 0.6} />
        <directionalLight position={[3, 3, 4]} intensity={isLight ? 0.5 : 0.8} />
        <Stars radius={12} depth={40} count={1200} factor={3} fade speed={0.6} />
        <WireGlobe isLight={isLight} />
        <Ring isLight={isLight} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} enableDamping dampingFactor={0.05} rotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}

export function TechOrbit3D({ className }: { className?: string }) {
  const isLight = useIsLight();
  const fg = isLight ? "#09090b" : "#ffffff";
  return (
    <div className={className ?? "h-[320px] w-full opacity-70"}>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={isLight ? 1 : 0.7} />
        <directionalLight position={[2, 3, 3]} intensity={isLight ? 0.6 : 0.9} />
        <Stars radius={10} depth={30} count={800} factor={2.5} fade speed={0.5} />
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh>
            <icosahedronGeometry args={[1.25, 1]} />
            <meshStandardMaterial color={fg} wireframe transparent opacity={isLight ? 0.05 : 0.07} />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[1.25, 1]} />
            <meshStandardMaterial color={fg} transparent opacity={isLight ? 0.015 : 0.02} roughness={0.4} />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
