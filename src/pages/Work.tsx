import { Link } from 'react-router-dom';

export function Work() {
  return (
    <div className='w-full max-w-6xl mx-auto px-5 pt-36 pb-12 pointer-events-auto animate-in fade-in slide-in-from-bottom-8 duration-700'>
      <h2 className='font-heading text-3xl md:text-5xl font-light text-white mb-8 text-center md:text-left'>
        SELECTED <span className='text-primary'>WORKS</span>
      </h2>

      {/* Dynamic Masonry Grid Structure */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
        {/* CASE STUDY 1: Dreaming Electric (Featured Full Width) */}
        <Link to='/work/dreaming-electric' className="md:col-span-2 flex items-center justify-center aspect-square md:aspect-[21/9] bg-zinc-900 bg-[url('/case-studies/Dreaming_Electric_banner.png')] bg-cover bg-center border border-white/10 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 cursor-pointer group relative overflow-hidden">
          <div className='absolute inset-0 bg-linear-to-t from-zinc-900/90 via-transparent to-transparent z-10'></div>
          {/* Hover Overlay */}
          <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-11'></div>
          
          <div className='relative z-20 flex flex-col items-center w-fit px-4'>
            <h3 className='font-heading text-3xl md:text-5xl font-light text-white group-hover:scale-105 transition-transform duration-300 ease-in-out text-center uppercase'>
              DREAMING ELECTRIC
            </h3>
            {/* Capsule centered relative to title wrapper, but positioned below to avoid pulling title off-center */}
            <div className='absolute top-full left-1/2 -translate-x-1/2 mt-4 px-6 py-2 w-full min-w-max rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 ease-in-out delay-75 shadow-2xl'>
              <p className='font-mono tracking-[0.2em] text-[10px] md:text-xs text-primary text-center uppercase whitespace-nowrap'>
                AI INTEGRATION • MOTION DESIGN • BRAND IDENTITY
              </p>
            </div>
          </div>
        </Link>

        {/* CASE STUDY 2: Dry Dock Brewing */}
        <Link to='/work/dry-dock' className="flex flex-col items-center justify-center aspect-square md:aspect-[4/3] bg-zinc-900 bg-[url('/case-studies/dd_portfolio_thumb.jpg')] bg-cover bg-center border border-white/10 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 cursor-pointer group relative overflow-hidden">
          <div className='absolute inset-0 bg-linear-to-t from-zinc-900/90 via-transparent to-transparent z-10'></div>
          {/* Hover Overlay */}
          <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-11'></div>

          <h3 className='font-heading text-2xl md:text-4xl font-light text-white z-20 group-hover:scale-105 transition-transform duration-300 ease-in-out text-center px-4 uppercase'>
            DRY DOCK BREWING CO.
          </h3>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 mt-8 md:mt-12 z-20 px-4 py-1.5 w-[90%] md:max-w-[85%] rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 ease-in-out delay-75'>
            <p className='font-mono tracking-[0.2em] text-[10px] md:text-xs text-primary text-center leading-relaxed uppercase'>
              CREATIVE DIRECTION • BRAND IDENTITY <br /> WEB DEVELOPMENT • PACKAGING
            </p>
          </div>
        </Link>

        {/* CASE STUDY 3: Next Ascent */}
        <Link to='/work/next-ascent' className="flex flex-col items-center justify-center aspect-square md:aspect-[4/3] bg-zinc-900 bg-[url('/case-studies/naa_portfolio_1920x959.jpg')] bg-cover bg-center border border-white/10 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 cursor-pointer group relative overflow-hidden">
          <div className='absolute inset-0 bg-linear-to-t from-zinc-900/90 via-transparent to-transparent z-10'></div>
          {/* Hover Overlay */}
          <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-11'></div>

          <h3 className='font-heading text-2xl md:text-4xl font-light text-white z-20 group-hover:scale-105 transition-transform duration-300 ease-in-out text-center px-4 uppercase'>
            NEXT ASCENT ADVENTURES
          </h3>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 mt-8 md:mt-12 z-20 px-4 py-1.5 w-[90%] md:max-w-[85%] rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 ease-in-out delay-75'>
            <p className='font-mono tracking-[0.2em] text-[10px] md:text-xs text-primary text-center leading-relaxed uppercase'>
              CREATIVE DIRECTION • BRAND IDENTITY <br /> WEB DEVELOPMENT
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
