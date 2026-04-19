import { ApertureMark } from './ApertureMark';
import { Float } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

export function EvolutionScene() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <group visible={isHomePage}>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
        <ApertureMark />
      </Float>
    </group>
  );
}
