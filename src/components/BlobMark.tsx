import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export interface BlobMarkProps {
  scale?: number;
  color?: string;
  distort?: number;
  speed?: number;
  isActive?: boolean;
}

/** 
 * The core 3D object for composing inside existing WebGL scenes (like the Hero).
 * Requires to be wrapped in a <Canvas>. 
 */
export function BlobMark({ 
  scale = 1, 
  color = "#ea580c",
  distort = 0.4,
  speed = 2,
  isActive = true
}: BlobMarkProps) {
  const materialRef = useRef<any>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (materialRef.current) {
      // Snap opacity instead of a slow cinematic crossfade
      const targetOpacity = isActive ? 1 : 0;
      // Maximize distortion instantly
      const targetDistort = isActive ? distort : 2.0;

      materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, targetOpacity, delta * 12)
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, delta * 8)
    }
    if (meshRef.current) {
       // Aggressively expand the shell before it snaps out of existence
       const targetScale = isActive ? scale : scale * 1.5;
       meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, delta * 8))
    }
  })

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial 
          ref={materialRef}
          color={color} 
          attach="material" 
          distort={distort} 
          speed={speed} 
          roughness={0.2}
          metalness={0.8}
          transparent={true}
          opacity={1}
        />
      </Sphere>
    </Float>
  )
}

/** 
 * A completely self-contained DOM element version.
 */
export function StandaloneBlobMark({ 
  width = "64px", 
  height = "64px", 
  ...props 
}: BlobMarkProps & { width?: string, height?: string }) {
  return (
    <div style={{ width, height }} className="pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        <BlobMark {...props} />
      </Canvas>
    </div>
  )
}
