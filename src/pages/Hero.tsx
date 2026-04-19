import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div
        className={`min-h-[75vh] flex flex-col items-center justify-center px-5 md:px-0 pointer-events-none transition-opacity duration-300 ease-in-out ${isVideoOpen ? 'opacity-0' : 'opacity-100'}`}>
        {/* Play Reel Button */}
        {/* <button
          onClick={() => setIsVideoOpen(true)}
          className='pointer-events-auto group flex items-center justify-center gap-3 mb-6 px-6 py-2 rounded-full glass transition-all duration-300 hover:bg-primary hover:pr-7 hover:scale-105 shadow-xl hover:shadow-[0_0_20px_rgba(0,0,0,0.8)] cursor-pointer border border-white/10 hover:border-primary'>
          <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-all duration-300'>
            <svg
              className='w-4 h-4 text-white fill-current'
              viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z' />
            </svg>
          </div>
          <span className='font-mono text-sm tracking-widest text-white uppercase font-medium'>
            Watch Reel
          </span>
        </button> */}

        <p className='font-mono tracking-widest text-sm text-zinc-400 uppercase mb-4'>
          Creative Director & Designer
        </p>

        <h2 className='font-heading text-5xl md:text-8xl lg:text-9xl font-light text-white leading-none text-center mb-8 flex flex-col gap-2'>
          <span>SHAPING</span>
          <span className='text-primary'>STRATEGIC</span>
          <span>EXPERIENCES</span>
        </h2>

        <p className='font-body text-base text-zinc-400 text-center max-w-xl mb-12 px-4'>
          Brand Identity • Design • AI Integration
        </p>

        <Link
          to='/work'
          className='pointer-events-auto group px-8 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-105 shadow-xl'>
          View Case Studies
        </Link>
      </div>

      {/* Fullscreen Video Modal */}
      {isVideoOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-500'>
          <div className='relative w-full h-full max-w-6xl max-h-[80vh] mx-4 border border-white/10 rounded-3xl overflow-hidden shadow-2xl'>
            <video
              autoPlay
              controls
              className='w-full h-full object-cover'
              onEnded={() => setIsVideoOpen(false)}>
              {/* Replace with actual video path */}
              <source src='/reel.mp4' type='video/mp4' />
            </video>

            <button
              onClick={() => setIsVideoOpen(false)}
              className='absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
