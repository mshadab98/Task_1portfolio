import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

const ShapeParticles = ({ count = 50 }) => {
  const shapes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      scale: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
      shape: Math.floor(Math.random() * 3), // 0: box, 1: sphere, 2: tetrahedron
      color: new THREE.Color().setHSL(
        Math.random() * 0.2 + 0.5, // Hue (purples to blues)
        0.8, // Saturation
        0.6  // Lightness
      ),
    }));
  }, [count]);

  return (
    <group>
      {shapes.map((data, i) => (
        <ParticleShape key={i} {...data} />
      ))}
    </group>
  );
};

const ParticleShape = ({ position, rotation, scale, speed, shape, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    // Slow rotation
    meshRef.current.rotation.x += speed * 0.2;
    meshRef.current.rotation.y += speed * 0.3;

    // Slight movement based on time
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time * speed) * 0.01;
    meshRef.current.position.x += Math.cos(time * speed * 0.8) * 0.01;
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
      position={position}
    >
      <mesh
        ref={meshRef}
        rotation={rotation}
        scale={scale}
      >
        {shape === 0 && <boxGeometry args={[1, 1, 1]} />}
        {shape === 1 && <sphereGeometry args={[0.7, 16, 16]} />}
        {shape === 2 && <tetrahedronGeometry args={[0.8, 0]} />}
        <meshPhongMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          shininess={60}
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

export default ShapeParticles;
