import { Suspense, useEffect, useRef } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
import { Routes, Route, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EvolutionScene } from './components/EvolutionScene';

// Router Pages
import { Hero } from './pages/Hero';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import CaseStudyDryDock from './pages/CaseStudyDryDock';
import CaseStudyNextAscent from './pages/CaseStudyNextAscent';
import CaseStudyDreamingElectric from './pages/CaseStudyDreamingElectric';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

function App() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // Scroll to top and track page view on route change
  useEffect(() => {
    window.scrollTo(0, 0);

    // Explicitly track page view for GA4 on SPA route changes
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-LF1MK329TK', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <div className='relative w-full min-h-dvh bg-zinc-900 flex flex-col'>
      {/* 1. BASE: Ambient Video (Basement) */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className='object-cover w-full h-full opacity-40 mix-blend-screen pointer-events-none'> */}
        {/* Reels */}
        {/* </video> */}
        <div className='absolute bottom-0 left-0 right-0 h-[40vh] bg-linear-to-t from-black to-transparent pointer-events-none z-10'></div>
      </div>

      {/* 2. TEXTURE: Grid & Dots (Independent Layer) */}
      <div className='fixed inset-0 z-5 pointer-events-none'>
        <div className='absolute inset-0 bg-grid opacity-40'></div>
        <div className='absolute inset-0 bg-dots opacity-60 mix-blend-screen'></div>
      </div>

      {/* 2. INTERACTIVE: 3D Scene Layer (Fixed to viewport) */}
      <div className='fixed inset-0 z-10 pointer-events-auto'>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 25, near: 0.1, far: 1000 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true,
          }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <EvolutionScene />
          </Suspense>
          <Environment preset='city' />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* 3. SCROLLING: Content Layer (Moves over fixed backgrounds) */}
      <main
        ref={mainRef}
        className='relative z-20 w-full flex-1 flex flex-col pointer-events-none'>
        <Header />

        <div className='flex-1 w-full pointer-events-none'>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/work' element={<Work />} />
            <Route path='/work/dry-dock' element={<CaseStudyDryDock />} />
            <Route path='/work/next-ascent' element={<CaseStudyNextAscent />} />
            <Route
              path='/work/dreaming-electric'
              element={<CaseStudyDreamingElectric />}
            />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </main>
      <CookieConsent />
    </div>
  );
}

export default App;
