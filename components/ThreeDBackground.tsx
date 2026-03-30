'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate a spherical spread of subtle particles
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null!);
  
  // Create 1000 points scattered inside a sphere
  const sphere = useMemo(() => {
    const positions = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const radius = Math.random() * 20 + 5; // Distance range
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions.set([x, y, z], i * 3);
    }
    return positions;
  }, []);

  // Soft oscillation mapped to time and cursor (implicitly through scroll context if needed)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00E5FF"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 w-full h-screen -z-40 pointer-events-none mix-blend-screen opacity-40">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <React.Suspense fallback={null}>
          <FloatingParticles />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
