"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Line, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function useSlowRotate(ref: React.RefObject<THREE.Group | THREE.Mesh>) {
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.22;
  });
}

// ─── 1 — AI Network ───
function AiNetworkScene() {
  const g = useRef<THREE.Group>(null!);
  useSlowRotate(g as any);
  const satellites = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => {
        const a = (i / 5) * Math.PI * 2;
        return [Math.cos(a) * 1.1, Math.sin(a) * 0.65, (Math.random() - 0.5) * 0.45] as [number, number, number];
      }),
    []
  );
  return (
    <group ref={g}>
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.35} />
      </mesh>
      {satellites.map((p, i) => (
        <group key={i}>
          <mesh position={p as any}>
            <sphereGeometry args={[0.11, 12, 12]} />
            <meshStandardMaterial color={i === 0 ? "#22c55e" : "#ffffff"} transparent opacity={0.9} />
          </mesh>
          {/* @ts-ignore */}
          <Line points={[[0, 0, 0], p]} color="white" opacity={0.12} transparent lineWidth={1} />
        </group>
      ))}
    </group>
  );
}
export function AiNetworkMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-full min-h-[6rem] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <AiNetworkScene />
      </Canvas>
    </div>
  );
}

// ─── 2 — SaaS Layers ───
function SaasLayersScene() {
  const g = useRef<THREE.Group>(null!);
  useFrame((_, d) => {
    if (g.current) g.current.rotation.y += d * 0.18;
  });
  return (
    <group ref={g} position={[0, -0.15, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, i * 0.34 - 0.34, 0]} rotation={[0.15, -0.4, 0]}>
          <boxGeometry args={[1.85, 0.08, 1.1]} />
          <meshStandardMaterial color={i === 1 ? "#ffffff" : "#e5e5e5"} transparent opacity={0.96 - i * 0.18} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}
export function SaasLayersMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-full min-h-[6rem] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [2.2, 1.6, 2.8], fov: 40 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 4, 3]} intensity={1.2} />
        <SaasLayersScene />
      </Canvas>
    </div>
  );
}

// ─── 3 — Pipeline ───
function PipelineScene() {
  return (
    <group position={[0, 0, 0]}>
      {[0, 1, 2, 3].map((i) => (
        <group key={i} position={[(i - 1.5) * 0.72, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.48, 0.48, 0.48]} />
            <meshStandardMaterial color={i === 3 ? "#22c55e" : "#ffffff"} transparent opacity={i === 3 ? 1 : 0.12} roughness={0.5} />
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(0.48, 0.48, 0.48)]} />
              <lineBasicMaterial color="white" transparent opacity={0.35} />
            </lineSegments>
          </mesh>
          {i < 3 && (
            <mesh position={[0.42, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <coneGeometry args={[0.07, 0.14, 8]} />
              <meshBasicMaterial color="white" transparent opacity={0.55} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}
export function PipelineMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-full min-h-[6rem] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [0, 0, 3.4], fov: 42 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.25}>
          <PipelineScene />
        </Float>
      </Canvas>
    </div>
  );
}

// ─── 4 — Cloud Infra ───
function CloudStackScene() {
  return (
    <group>
      <group position={[0, 0.45, 0]}>
        <mesh position={[-0.38, 0, 0]}>
          <sphereGeometry args={[0.34, 16, 16]} />
          <meshStandardMaterial color="white" transparent opacity={0.92} />
        </mesh>
        <mesh position={[0.18, 0.12, 0]}>
          <sphereGeometry args={[0.42, 16, 16]} />
          <meshStandardMaterial color="white" transparent opacity={0.96} />
        </mesh>
        <mesh position={[0.52, -0.05, -0.12]}>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color="#e5e5e5" transparent opacity={0.88} />
        </mesh>
      </group>
      <group position={[0, -0.55, 0]}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, i * 0.22 - 0.22, 0]}>
            <boxGeometry args={[1.35, 0.16, 0.55]} />
            <meshStandardMaterial color="#18181b" roughness={0.7} />
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(1.35, 0.16, 0.55)]} />
              <lineBasicMaterial color="white" transparent opacity={0.18} />
            </lineSegments>
          </mesh>
        ))}
        <mesh position={[0.55, -0.02, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
      </group>
    </group>
  );
}
export function CloudStackMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-full min-h-[6rem] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [0, 0.15, 3.1], fov: 42 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 4, 3]} intensity={1.1} />
        <Float speed={1} rotationIntensity={0.08} floatIntensity={0.3}>
          <CloudStackScene />
        </Float>
      </Canvas>
    </div>
  );
}

// ─── 5 — Shield ───
function ShieldScene() {
  const g = useRef<THREE.Group>(null!);
  useSlowRotate(g as any);
  return (
    <group ref={g}>
      <mesh>
        <octahedronGeometry args={[0.95, 0]} />
        <meshStandardMaterial color="white" wireframe transparent opacity={0.1} />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.95, 0]} />
        <meshStandardMaterial color="white" transparent opacity={0.015} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.06, 0]}>
        <boxGeometry args={[0.38, 0.32, 0.14]} />
        <meshStandardMaterial color="white" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.18, 0]}>
        <torusGeometry args={[0.14, 0.03, 8, 20, Math.PI]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}
export function ShieldMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-full min-h-[6rem] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [0, 0, 2.9], fov: 44 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <ShieldScene />
      </Canvas>
    </div>
  );
}

// ─── Tech Icon Orbit ───
function TechOrbitScene() {
  const icons = ["AI", "API", "DB", "☁", "🔒", "⚡"];
  const group = useRef<THREE.Group>(null!);
  useFrame((_, d) => {
    if (group.current) group.current.rotation.y += d * 0.16;
  });
  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[0.42, 20, 20]} />
        <meshStandardMaterial color="white" transparent opacity={0.06} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.42, 20, 20]} />
        <meshStandardMaterial color="white" transparent opacity={0.02} />
      </mesh>
      {icons.map((label, i) => {
        const angle = (i / icons.length) * Math.PI * 2;
        const x = Math.cos(angle) * 1.35;
        const z = Math.sin(angle) * 1.35;
        return (
          <group key={label} position={[x, 0, z]}>
            <Float speed={1.4 + i * 0.15} floatIntensity={0.35} rotationIntensity={0.2}>
              {/* @ts-ignore */}
              <Text position={[0, 0, 0]} fontSize={0.22} color="white" anchorX="center" anchorY="middle" outlineWidth={0.008} outlineColor="#000">
                {label}
              </Text>
              <mesh position={[0, -0.18, -0.06]}>
                <planeGeometry args={[0.52, 0.28]} />
                <meshBasicMaterial color="white" transparent opacity={0.07} />
              </mesh>
            </Float>
          </group>
        );
      })}
    </group>
  );
}
export function TechIconOrbitMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-[340px] w-full rounded-xl border border-white/10 bg-black"}>
      <Canvas camera={{ position: [0, 1.2, 4.2], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 4, 3]} intensity={1} />
        <TechOrbitScene />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

// ─── Vision Orbit — 5 pillars around central Intelligence ───
function VisionOrbitScene() {
  const labels = ["Software", "AI", "Automation", "Cloud", "Security"];
  const g = useRef<THREE.Group>(null!);
  useFrame((_, d) => {
    if (g.current) g.current.rotation.y += d * 0.12;
  });
  return (
    <group ref={g}>
      <mesh>
        <sphereGeometry args={[0.32, 20, 20]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.2} />
      </mesh>
      {/* @ts-ignore */}
      <Text position={[0, 0, 0.34]} fontSize={0.11} color="black" anchorX="center" anchorY="middle" fontWeight={700}>
        CORE
      </Text>
      {labels.map((label, i) => {
        const angle = (i / labels.length) * Math.PI * 2;
        const x = Math.cos(angle) * 1.45;
        const z = Math.sin(angle) * 1.45;
        return (
          <group key={label} position={[x, 0, z]}>
            <mesh>
              <sphereGeometry args={[0.14, 12, 12]} />
              <meshStandardMaterial color="white" transparent opacity={0.85} />
            </mesh>
            {/* @ts-ignore */}
            <Line points={[[0, 0, 0], [ -x * 0.72, 0, -z * 0.72]]} color="white" opacity={0.08} transparent lineWidth={1} />
            {/* @ts-ignore */}
            <Text position={[0, -0.32, 0]} fontSize={0.09} color="white" anchorX="center" anchorY="middle" outlineWidth={0.005} outlineColor="#000">
              {label}
            </Text>
          </group>
        );
      })}
    </group>
  );
}
export function VisionOrbitMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-[280px] w-full rounded-xl border border-white/10 bg-black"}>
      <Canvas camera={{ position: [0, 1.4, 4.2], fov: 42 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 4, 3]} intensity={1} />
        <VisionOrbitScene />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}

// ─── Scale / Target / Growth / Staircase minis (lightweight) ───
function ScaleBarsScene() {
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[(i - 1) * 0.6, (i * 0.3) / 2 - 0.15, 0]}>
          <boxGeometry args={[0.42, 0.3 + i * 0.32, 0.42]} />
          <meshStandardMaterial color="white" transparent opacity={0.12 + i * 0.28} roughness={0.5} />
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(0.42, 0.3 + i * 0.32, 0.42)]} />
            <lineBasicMaterial color="white" transparent opacity={0.28} />
          </lineSegments>
        </mesh>
      ))}
    </group>
  );
}
export function ScaleBarsMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-full min-h-[6rem] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [1.8, 1.4, 2.6], fov: 42 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <Float speed={1} rotationIntensity={0.08} floatIntensity={0.2}>
          <ScaleBarsScene />
        </Float>
      </Canvas>
    </div>
  );
}

function TargetScene() {
  const g = useRef<THREE.Group>(null!);
  useSlowRotate(g as any);
  return (
    <group ref={g}>
      {[0.55, 0.38, 0.22].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r, 0.02, 12, 32]} />
          <meshStandardMaterial color="white" transparent opacity={0.45 - i * 0.12} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
export function TargetMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-full min-h-[6rem] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [0, 0, 2.6], fov: 44 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <TargetScene />
      </Canvas>
    </div>
  );
}

function GrowthBarsScene() {
  const vals = [0.5, 0.9, 1.3, 1.7];
  return (
    <group>
      {vals.map((h, i) => (
        <mesh key={i} position={[(i - 1.5) * 0.55, h / 2 - 0.65, 0]}>
          <boxGeometry args={[0.36, h, 0.36]} />
          <meshStandardMaterial color={i === 3 ? "#22c55e" : "white"} transparent opacity={0.14 + i * 0.2} />
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(0.36, h, 0.36)]} />
            <lineBasicMaterial color="white" transparent opacity={0.25} />
          </lineSegments>
        </mesh>
      ))}
    </group>
  );
}
export function GrowthBarsMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-full min-h-[6rem] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [0, 0.2, 3.2], fov: 42 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <Float speed={1} rotationIntensity={0.06} floatIntensity={0.2}>
          <GrowthBarsScene />
        </Float>
      </Canvas>
    </div>
  );
}

function StaircaseScene() {
  return (
    <group>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[ (i - 1.5) * 0.72, i * 0.28 - 0.32, 0]}>
          <boxGeometry args={[0.62, 0.18, 0.62]} />
          <meshStandardMaterial color="white" transparent opacity={0.1 + i * 0.22} roughness={0.4} />
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(0.62, 0.18, 0.62)]} />
            <lineBasicMaterial color="white" transparent opacity={0.3} />
          </lineSegments>
        </mesh>
      ))}
    </group>
  );
}
export function StaircaseMini({ className }: { className?: string }) {
  return (
    <div className={className ?? "h-[200px] w-full rounded-xl border border-white/[0.08] bg-black"}>
      <Canvas camera={{ position: [1.9, 1.5, 2.8], fov: 40 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 4, 3]} intensity={1.2} />
        <Float speed={0.9} rotationIntensity={0.1} floatIntensity={0.22}>
          <StaircaseScene />
        </Float>
      </Canvas>
    </div>
  );
}
