import { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Center, Resize } from '@react-three/drei';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';

interface ApertureMarkProps {
  color?: string;
  isActive?: boolean;
}

export function ApertureMark({ color = '#ea580c' }: ApertureMarkProps) {
  const svg = useLoader(SVGLoader, '/Aperature-mark-small.svg');

  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    }; // Cleanup
  }, [hovered]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // 1. Smooth Volume Swell
    const targetScale = hovered ? 1.08 : 1.0;
    groupRef.current.scale.setScalar(
      THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, delta * 2),
    );

    // 2. Magnetic Mouse Tracking!
    // The mark physically 'leans' into the cursor position when hovered
    const targetRotX = hovered ? -(state.pointer.y * 0.4) : 0;
    const targetRotZ = hovered ? -(state.pointer.x * 0.4) : 0;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      delta * 6,
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetRotZ,
      delta * 6,
    );
  });

  const geometries = useMemo(() => {
    return svg.paths
      .map((shapePath) => {
        const shapes = shapePath.toShapes(true);
        return shapes.map((shape) => {
          return new THREE.ExtrudeGeometry(shape, {
            depth: 8, // Reduced core thickness so the bevels do most of the physical work
            bevelEnabled: true,
            bevelThickness: 3.0, // Bows the front and back faces out heavily into thick, pill-like liquid curves
            bevelSize: 0.8, // Pushed as far out as possible before the internal SVG vectors pinch themselves
            bevelSegments: 16, // Doubled the polygon curve smoothness again for maximum glass-like reflections
            curveSegments: 64,
            steps: 2,
          });
        });
      })
      .flat();
  }, [svg]);

  // Removed all complex manual useFrame scale/rotation physics.
  // We now rely entirely on React-Three-Drei's perfectly bounded wrappers.
  return (
    <group
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}>
      <Resize scale={6}>
        <Center>
          <group rotation={[Math.PI, 0, 0]}>
            {geometries.map((geo, idx) => (
              <mesh key={idx} geometry={geo}>
                {/* 
                  Upgraded to an absolute top-tier MeshPhysicalMaterial.
                  By adding an intense clearcoat layer and cranking the metalness/envMapIntensity, 
                  we dynamically force it to mirror the City Preset HDR exactly like wet liquid metal.
                */}
                <meshPhysicalMaterial
                  color={color}
                  metalness={1.0} // Makes it a pure mirror
                  roughness={0.15} // Highly polished surface
                  clearcoat={1.0} // Adds a literal shiny wet-glass layer over the metal
                  clearcoatRoughness={0.1}
                  envMapIntensity={2.5}
                  transparent={true}
                  opacity={0.25}
                  transmission={1.0} // Transforms simple opacity into physical glass refraction!
                  thickness={0.5} // The density of the internal glass/resin
                  ior={1.5} // Index of Refraction (1.5 = heavy crystal/resin)
                />
              </mesh>
            ))}
          </group>
        </Center>
      </Resize>
    </group>
  );
}
