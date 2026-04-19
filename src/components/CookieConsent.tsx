import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to let the hero animation settle
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2.5rem)] max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500'>
      <div className='glass p-6 md:px-8 md:py-6 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-2xl bg-zinc-950/60'>
        <div className='text-center md:text-left'>
          <h4 className='font-heading text-white text-sm uppercase tracking-widest mb-1'>Privacy Protocol</h4>
          <p className='text-zinc-400 text-[13px] leading-relaxed'>
            We use third-party technologies to track interactions and optimize the strategic experience.
          </p>
        </div>
        <button
          onClick={handleAccept}
          className='whitespace-nowrap px-6 py-2.5 bg-primary text-white rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-orange-500 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-primary/20 cursor-pointer pointer-events-auto'>
          Accept & Initialize
        </button>
      </div>
    </div>
  );
}
