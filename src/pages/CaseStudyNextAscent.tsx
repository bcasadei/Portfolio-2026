import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const pages = [
  {
    id: 'home',
    label: 'Homepage',
    images: [
      '/case-studies/Next-Ascent-Home_pg1.png',
      '/case-studies/Next-Ascent-Home_pg2.png',
    ],
    description:
      'Hero-driven landing page featuring a cycling background that showcases the mountain experience.',
  },
  {
    id: 'bootcamp',
    label: 'Bootcamp',
    images: ['/case-studies/Next-Ascent-Bootcamp_pg1.png'],
    description:
      'Individual bootcamp detail pages optimized for rapid decision-making and booking conversion.',
  },
  {
    id: 'checkout',
    label: 'Checkout',
    images: ['/case-studies/Next-Ascent-Checkout_pg1.png'],
    description:
      'Streamlined 3-step checkout with Apple Pay integration. Reduced abandonment by eliminating form friction.',
  },
];

const mobileScreens = [
  { src: '/case-studies/next_ascent_mobile_home@2x.png', label: 'Home' },
  {
    src: '/case-studies/next_ascent_mobile_adventures@2x.png',
    label: 'Adventures',
  },
  { src: '/case-studies/next_ascent_mobile_detail@2x.png', label: 'Detail' },
  {
    src: '/case-studies/next_ascent_mobile_personal-train@2x.png',
    label: 'Personal Training',
  },
];

function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const timerRef = useRef<any>(null);

  const [prevImg, setPrevImg] = useState(mobileScreens[0].src);
  const [nextImg, setNextImg] = useState(mobileScreens[0].src);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // True Cross-Dissolve: fade next over prev
  useEffect(() => {
    if (mobileScreens[current].src === nextImg) return;

    setNextImg(mobileScreens[current].src);
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setPrevImg(mobileScreens[current].src);
      setIsTransitioning(false);
    }, 800); // Wait for 700ms fade to finish + small buffer

    return () => clearTimeout(timer);
  }, [current, nextImg]);

  useEffect(() => {
    if (interacted) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mobileScreens.length);
    }, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [interacted]);

  const go = (dir: number) => {
    setInteracted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(
      (prev) => (prev + dir + mobileScreens.length) % mobileScreens.length,
    );
  };

  return (
    <div className='flex flex-col items-center gap-6'>
      {/* Phone Frame */}
      <div className='relative' style={{ width: '260px' }}>
        {/* Outer shell — glassmorphic */}
        <div className='relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-[40px] p-[10px] border border-white/25 shadow-[0_40px_100px_-10px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.08)]'>
          {/* Top gloss highlight strip */}
          <div className='absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full'></div>

          {/* Inner bevel */}
          <div
            className='bg-zinc-950 rounded-[32px] overflow-hidden relative'
            style={{ aspectRatio: '9/19.5' }}>
            {/* Notch */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-b-xl z-20'></div>
            {/* Screen */}
            {/* Previous Image (Bottom Layer) */}
            <img
              src={prevImg}
              alt={mobileScreens[current].label}
              className='absolute inset-0 w-full h-full object-cover'
              style={{ objectPosition: 'center 18px' }}
            />
            {/* Next Image (Top Layer) — Fades in */}
            <img
              src={nextImg}
              alt={mobileScreens[current].label}
              className='absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out'
              style={{
                opacity: isTransitioning ? 1 : 0,
                objectPosition: 'center 18px',
              }}
            />
          </div>
          {/* Home Indicator */}
          <div className='flex justify-center mt-2'>
            <div className='w-16 h-1 bg-white/30 rounded-full'></div>
          </div>
        </div>

        {/* Side Buttons (decorative) */}
        <div className='absolute top-20 -right-1 w-[3px] h-8 bg-white/15 rounded-r-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]'></div>
        <div className='absolute top-14 -left-1 w-[3px] h-6 bg-white/15 rounded-l-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]'></div>
        <div className='absolute top-[88px] -left-1 w-[3px] h-6 bg-white/15 rounded-l-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]'></div>
      </div>

      {/* Navigation */}
      <div className='flex items-center gap-4'>
        <button
          onClick={() => go(-1)}
          className='w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-300 ease-in-out text-sm'>
          ←
        </button>

        <div className='flex gap-2'>
          {mobileScreens.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setInteracted(true);
                if (timerRef.current) clearInterval(timerRef.current);
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ease-in-out ${current === i ? 'w-4 h-2 bg-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          className='w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-300 ease-in-out text-sm'>
          →
        </button>
      </div>
    </div>
  );
}

export default function CaseStudyNextAscent() {
  const [activePage, setActivePage] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto-cycle the home hero images every 8s — only when on the homepage tab
  useEffect(() => {
    if (activePage !== 0) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % pages[0].images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activePage, userInteracted]);

  const handleTabClick = (index: number) => {
    setActivePage(index);
    setActiveImage(0);
    setUserInteracted((prev) => !prev); // Force interval reset
  };

  const currentImages = pages[activePage].images;
  const currentSrc = currentImages[activeImage] ?? currentImages[0];

  const [visibleImg, setVisibleImg] = useState(pages[0].images[0]);
  const [fadingImg, setFadingImg] = useState(pages[0].images[0]);
  const [fadeOpacity, setFadeOpacity] = useState(0);

  // Simultaneous Cross-Dissolve: New image fades in over old one
  useEffect(() => {
    if (currentSrc === fadingImg) return;

    // Set the target image and begin fade-in
    setFadingImg(currentSrc);
    setFadeOpacity(1);

    // After fade completes, make it the base image
    const timer = setTimeout(() => {
      setVisibleImg(currentSrc);
      setFadeOpacity(0);
    }, 800); // Matches transition duration + small buffer

    return () => clearTimeout(timer);
  }, [currentSrc, fadingImg]);

  return (
    <div className='w-full min-h-screen bg-zinc-900 pointer-events-auto overflow-x-hidden'>
      {/* 1. Hero Section - Deconstructed to allow 3D scene to breathe at top */}
      <div className='relative pt-32 pb-8 flex justify-center z-30 animate-in fade-in duration-1000'>
        <Link
          to='/work'
          className='flex items-center gap-2 text-white/40 hover:text-primary transition-all duration-300 ease-in-out font-mono text-[14px] uppercase tracking-[0.2em] group'>
          <span className='group-hover:-translate-x-1 transition-transform duration-300 ease-in-out'>
            ←
          </span>
          Return to Work
        </Link>
      </div>

      <section className='relative w-full py-16 md:py-24 overflow-hidden bg-black border-y border-white/5 z-20'>
        <div className='relative z-20 text-center px-5 flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000'>
          <h1 className='font-heading text-4xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.1em] uppercase mb-4'>
            Next <span className='text-primary'>Ascent</span> Adventures
          </h1>
          <p className='font-mono text-zinc-400 text-sm md:text-base tracking-[0.3em] uppercase'>
            Creative Direction • Brand Identity • E-Commerce Strategy
          </p>
        </div>
      </section>

      {/* 2. Strategic Overview (The Blueprint) */}
      <section className='max-w-7xl mx-auto px-5 py-12 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
          <div className='glass p-8 md:p-10 rounded-2xl border border-white/10'>
            <h6 className='font-mono text-primary text-[14px] tracking-[0.4em] uppercase mb-4'>
              The Challenge
            </h6>
            <p className='text-zinc-300 text-base leading-relaxed'>
              Next Ascent Adventures required a resilient e-commerce
              architecture to automate complex outdoor bootcamp bookings and
              eliminate operational friction. The primary objective centered on
              propelling business growth while expanding the visibility of their
              signature mountain training experiences.
            </p>
          </div>
          <div className='glass p-8 md:p-10 rounded-2xl border border-white/10'>
            <h6 className='font-mono text-primary text-[14px] tracking-[0.4em] uppercase mb-4'>
              Insights
            </h6>
            <p className='text-zinc-300 text-base leading-relaxed'>
              Initial assessment identified a legacy visual identity that relied
              on generic regional motifs common across the Colorado market. The
              project prioritized modernizing the brand architecture and
              established a custom visual foundation before the Shopify
              integration commenced.
            </p>
          </div>
          <div className='glass p-8 md:p-10 rounded-2xl border border-white/10'>
            <h6 className='font-mono text-primary text-[14px] tracking-[0.4em] uppercase mb-4'>
              Deliverables
            </h6>
            <ul className='text-zinc-300 text-base leading-relaxed space-y-2'>
              <li>• Brand Identity & Design System</li>
              <li>• Shopify Architecture</li>
              <li>• Performance UX/UI Design</li>
              <li>• Digital Operations Training</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Brand Identity & Design logic */}
      <section className='max-w-7xl mx-auto px-5 pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* Logo Showcase (order-2 on mobile, order-1 on desktop) */}
        <div className='order-2 md:order-1 relative flex items-center justify-center'>
          <div className='group relative w-full max-w-lg aspect-square bg-zinc-950 rounded-3xl border border-white/10 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] flex items-center justify-center overflow-hidden cursor-crosshair'>
            {/* Version A: Reversed (Green/White) - Visible on Black */}
            <div className='absolute inset-0 flex items-center justify-center p-16 transition-opacity duration-300 ease-in-out group-hover:opacity-0'>
              <img
                src='/case-studies/Next_Ascent_Logo_Rev.svg'
                alt='Next Ascent Logo Reversed'
                className='w-full h-auto'
              />
            </div>

            {/* Version B: Standard (Green/Black) - Visible on White */}
            <div className='absolute inset-0 flex items-center justify-center p-16 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
              <img
                src='/case-studies/Next_Ascent_Logo_2Color.svg'
                alt='Next Ascent Logo Standard'
                className='w-full h-auto'
              />
            </div>

            {/* Interactive Tags */}
            <div className='absolute top-8 left-8 font-mono text-[9px] text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400 transition-colors duration-300 ease-in-out'>
              Identity Study v1.0
            </div>
            <div className='absolute bottom-8 right-8 font-mono text-[9px] text-zinc-600 uppercase tracking-widest transition-all duration-300 ease-in-out'>
              <span className='group-hover:hidden text-zinc-600'>
                2-Color Reversed
              </span>
              <span className='hidden group-hover:block text-zinc-950 font-medium'>
                2-Color Standard
              </span>
            </div>

            {/* Subtle Bounding indicators */}
            <div className='absolute top-4 right-4 w-2 h-2 border-t border-r border-white/5 group-hover:border-black/10 transition-colors duration-300 ease-in-out'></div>
            <div className='absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/5 group-hover:border-black/10 transition-colors duration-300 ease-in-out'></div>
          </div>
        </div>

        {/* Content Block (order-1 on mobile, order-2 on desktop) */}
        <div className='order-1 md:order-2'>
          <h2 className='font-heading text-3xl md:text-5xl font-light text-white mb-6 uppercase'>
            Brand <span className='text-primary'>Identity</span>
          </h2>
          <p className='text-zinc-300 text-base leading-relaxed mb-8'>
            Next Ascent Adventures required a modern visual identity that
            honored their Irish heritage while feeling at home in the
            high-performance outdoor market. The redesign integrates a custom
            Celtic knot into a minimalist mountain range, forming a distinctive
            mark that scales from technical apparel to mobile apps.
          </p>
          <div className='flex gap-4'>
            <div className='h-[1px] flex-1 bg-white/10 self-center'></div>
            <span className='font-mono text-sm text-zinc-500 uppercase tracking-widest'>
              Strategic Foundation
            </span>
          </div>
        </div>
      </section>

      {/* 4. Platform Architecture — Interactive Browser Showcase */}
      <section className='hidden md:block max-w-7xl mx-auto px-5 py-10'>
        <div className='mb-10'>
          <h2 className='font-heading text-3xl md:text-5xl font-light text-white uppercase'>
            E-Commerce <span className='text-primary'>Architecture</span>
          </h2>
          <p className='mt-4 text-zinc-400 text-base max-w-3xl leading-relaxed truncate'>
            {pages[activePage].description}
          </p>
        </div>

        {/* Browser Chrome Frame — Glassmorphic */}
        <div className='rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-xl'>
          {/* Browser Top Bar */}
          <div className='flex items-center gap-3 px-4 py-3 bg-white/5 border-b border-white/10 backdrop-blur-sm'>
            {/* Traffic Lights */}
            <div className='flex gap-1.5'>
              <div className='w-3 h-3 rounded-full bg-red-500/60'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500/60'></div>
              <div className='w-3 h-3 rounded-full bg-green-500/60'></div>
            </div>
            {/* Address Bar */}
            <div className='flex-1 mx-4'>
              <div className='bg-white/8 backdrop-blur-sm rounded-md px-3 py-1 flex items-center gap-2 border border-white/10'>
                <span className='text-green-400/60 text-[10px]'>🔒</span>
                <span className='font-mono text-[11px] text-zinc-400'>
                  nextascentadventures.com
                </span>
              </div>
            </div>
            {/* Page Tabs */}
            <div className='flex gap-1'>
              {pages.map((page, i) => (
                <button
                  key={page.id}
                  onClick={() => handleTabClick(i)}
                  className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out ${
                    activePage === i
                      ? 'bg-primary text-white'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                  }`}>
                  {page.label}
                  {/* Auto-cycle indicator on Homepage tab */}
                  {i === 0 && !userInteracted && (
                    <span className='ml-1.5 w-1 h-1 rounded-full bg-white/60 inline-block animate-pulse'></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Screenshot Display — 2-Layer Cross-Dissolve */}
          <div
            className='relative overflow-hidden bg-zinc-950'
            style={{ minHeight: '400px' }}>
            <div className='transition-all duration-500 ease-in-out translate-y-6'>
              {/* Layer 1: The current (visible) image */}
              <img
                src={visibleImg}
                alt={`Next Ascent ${pages[activePage].label}`}
                className='w-full h-auto block'
              />
              {/* Layer 2: The incoming image (fading in) */}
              <img
                src={fadingImg}
                alt={`Next Ascent ${pages[activePage].label}`}
                className='absolute inset-0 w-full h-auto block transition-opacity duration-300 ease-in-out pointer-events-none'
                style={{ opacity: fadeOpacity }}
              />
            </div>
          </div>
        </div>

        {/* Progress indicators for home auto-cycle */}
        {activePage === 0 && (
          <div className='flex justify-center gap-2 mt-4'>
            {pages[0].images.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  activeImage === i ? 'w-8 bg-primary' : 'w-4 bg-white/20'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* 5. Mobile Experience — Phone Frame Carousel */}
      <section className='max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* Left: Phone Frame Carousel */}
        <MobileCarousel />

        {/* Right: Content */}
        <div>
          <h2 className='font-heading text-3xl md:text-5xl font-light text-white mb-6 uppercase'>
            Mobile <span className='text-primary'>First</span>
          </h2>
          <p className='text-zinc-300 text-base leading-relaxed mb-8'>
            Bootcamp decisions happen in parking lots, on trails, and between
            training sessions. The mobile experience was built to reduce
            friction at that moment: a direct, distraction-free path from
            discovery to confirmed booking.
          </p>
          <ul className='text-zinc-500 text-sm font-mono space-y-2 uppercase tracking-tight list-disc list-outside pl-5 marker:text-primary'>
            <li>Shopify Mobile Checkout</li>
            <li>Thumb-First Navigation</li>
            <li>Micro-Interaction Design</li>
          </ul>
        </div>
      </section>

      {/* 6. Case Study Footer */}
      <section className='py-20 text-center border-t border-white/5'>
        <h6 className='font-mono text-[14px] text-zinc-500 tracking-[0.5em] uppercase mb-8'>
          Next Case Study
        </h6>
        <Link
          to='/work/dreaming-electric'
          className='font-heading text-4xl md:text-6xl text-white hover:text-primary transition-colors duration-300 ease-in-out uppercase font-light'>
          Dreaming{' '}
          <span className='block text-zinc-400 md:inline'>Electric</span>
        </Link>
      </section>
    </div>
  );
}
