"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// Simple seeded random number generator for deterministic particle positions
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface ParticlesProps {
  count?: number;
}

const Particles: React.FC<ParticlesProps> = ({ count = 2000 }) => {
  const meshRef = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Create circular texture for particles
  const circleTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const centerX = 64;
      const centerY = 64;
      const radius = 60;

      // Create radial gradient for smooth circle
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      // Draw circle with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Cleanup Three.js resources on unmount
  useEffect(() => {
    const mesh = meshRef.current;
    return () => {
      circleTexture.dispose();
      if (mesh) {
        mesh.geometry.dispose();
        if (mesh.material instanceof THREE.Material) {
          mesh.material.dispose();
        }
      }
    };
  }, [circleTexture]);

  // Generate random particle positions - using a seeded approach to avoid impure function calls
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spread particles in a larger space using seeded random
      positions[i3] = (seededRandom(i * 3) - 0.5) * 20; // x
      positions[i3 + 1] = (seededRandom(i * 3 + 1) - 0.5) * 20; // y
      // Restrict Z range to be further back to avoid "too big" particles
      // Camera is at 5, so we keep particles between -10 and 0
      positions[i3 + 2] = (seededRandom(i * 3 + 2) - 0.5) * 10 - 5; // z
    }

    return positions;
  }, [count]);

  // Handle mouse movement
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Store initial positions and speeds for each particle - using seeded random
  const particleData = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      speed: 0.003 + seededRandom(i * 100) * 0.005, // Slower random upward speed
      xOffset: (seededRandom(i * 100 + 50) - 0.5) * 0.5, // Small horizontal drift
    }));
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const data = particleData[i];

      // Calculate distance from mouse position (normalized to scene space)
      const particleX = positions[i3];
      const particleY = positions[i3 + 1];
      const mouseX = mousePosition.current.x * 10;
      const mouseY = mousePosition.current.y * 10;

      const dx = particleX - mouseX;
      const dy = particleY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 3; // Interaction radius

      // Mouse interaction - push particles away from cursor
      let pushX = 0;
      let pushY = 0;
      if (distance < maxDistance && distance > 0) {
        const force = (1 - distance / maxDistance) * 0.02;
        pushX = (dx / distance) * force;
        pushY = (dy / distance) * force;
      }

      // Move particles upward like bubbles (slower)
      positions[i3 + 1] += data.speed + pushY;

      // Add slight horizontal drift and mouse interaction
      positions[i3] += Math.sin(time * 0.3 + i) * data.xOffset * 0.0005 + pushX;

      // Reset particle to bottom when it goes too high
      if (positions[i3 + 1] > 10) {
        positions[i3 + 1] = -10;
        // Use time-based seeded random for reset positions
        const seed = time * 1000 + i;
        positions[i3] = (seededRandom(seed) - 0.5) * 20;
        positions[i3 + 2] = (seededRandom(seed + 1) - 0.5) * 10 - 5;
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        map={circleTexture}
        transparent
        opacity={1.0}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        alphaTest={0.01}
        color="#ffffff"
        toneMapped={false}
      />
    </points>
  );
};

interface ParticleBackgroundProps {
  className?: string;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
        frameloop={isInView ? "always" : "never"}
        dpr={1} // Fixed low DPR for max performance
      >
        <Particles count={300} />
      </Canvas>
    </div>
  );
};
