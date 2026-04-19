import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, isActive }: { url: string; isActive: boolean }) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  // Set initial 3/4 view rotation
  useState(() => {
    scene.rotation.y = 0.5; // Ideal 3/4 balance
  });

  // Smoothly scale up on hover
  useFrame((_, delta) => {
    if (ref.current) {
      const targetScale = isActive ? 3.0 : 2.9;
      ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1 * (delta * 60));
    }
  });

  return <primitive ref={ref} object={scene} position={[0, -1.8, 0]} />;
}

export default function JerseyDisplay({ 
  modelPath, 
  title,
  posterUrl
}: { 
  modelPath: string; 
  title: string; 
  posterUrl?: string;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='flex flex-col h-full group'>
      <div 
        className='flex-1 relative min-h-[400px] md:min-h-[500px] bg-zinc-800/50 rounded-t-2xl overflow-hidden'
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <Canvas 
          shadows 
          dpr={[1, 2]}
          frameloop='always' // Keep always for smooth scaling transitions
        >
          <PerspectiveCamera makeDefault position={[0, 0, 3.2]} fov={45} />
          <ambientLight intensity={0.9} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6} contactShadow={false} adjustCamera={false}>
              <Model url={modelPath} isActive={isActive} />
            </Stage>
            <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 1.5} 
            makeDefault 
          />
        </Canvas>
        
        <div className={`absolute bottom-4 right-4 pointer-events-none transition-opacity duration-300 ease-in-out ${isActive ? 'opacity-40' : 'opacity-0'}`}>
          <p className='font-mono text-sm text-white uppercase tracking-[0.2em]'>Drag to Rotate</p>
        </div>
      </div>
      
      <div className='py-4 bg-black/40 border-t border-white/5 rounded-b-2xl text-center backdrop-blur-md'>
        <p className='font-mono text-sm text-zinc-500 uppercase tracking-widest'>{title}</p>
      </div>
    </div>
  );
}

// Preload models
useGLTF.preload('/models/Apricot_Blonde_3D_Jersey_v2b.glb');
useGLTF.preload('/models/Hop_Abomination_3D_Jersey_v2.glb');
