import { Link } from 'react-router-dom';
import JerseyDisplay from '../components/JerseyDisplay';

// Import relative image paths from support (Vite will handle these)
import cansLineup from '../../support/Portfolio-2024/assets/images/DDBC_cans_1260x578.jpg';
import illustrationSpotlight from '../../support/Portfolio-2024/assets/images/Apricot_Blonde_Illustration_1260x877.jpg';
import twelvePack from '../../support/Portfolio-2024/assets/images/Apricot_Blonde_12_pack_1260x1100.jpg';
import mixedPack from '../../support/Portfolio-2024/assets/images/Booty_Box_12_pack_1260x1100.jpg';
import bikeJerseyAb from '../../support/Portfolio-2024/assets/images/ab_bike_jersey_poster_410x410.jpg';
import bikeJerseyHa from '../../support/Portfolio-2024/assets/images/ha_bike_jersey_poster_410x410.jpg';

export default function CaseStudyDryDock() {
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
        <div className='absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-50 z-0'></div>

        <div className='relative z-20 text-center px-5 flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000'>
          <h1 className='font-heading text-4xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.1em] uppercase mb-4'>
            Dry Dock <span className='text-primary'>Brewing</span> Co.
          </h1>
          <p className='font-mono text-zinc-400 text-xs md:text-sm tracking-[0.3em] uppercase'>
            Creative Direction • Brand Identity • Web Development • Packaging
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
            <p className='text-zinc-300 text-sm md:text-base leading-relaxed'>
              Dry Dock Brewing Co. was in need of uniform branding across their
              product range. They sought a cohesive design approach that would
              allow each beverage to possess its unique visual identity while
              upholding the brand's overarching nautical image.
            </p>
          </div>
          <div className='glass p-8 md:p-10 rounded-2xl border border-white/10'>
            <h6 className='font-mono text-primary text-[14px] tracking-[0.4em] uppercase mb-4'>
              Insights
            </h6>
            <p className='text-zinc-300 text-sm md:text-base leading-relaxed'>
              As Aurora's first craft brewery, community is their core. The
              branding needed to bridge the gap between their nautical homebrew
              roots and their award-winning commercial growth, expanding into
              seasonal bombers and signature barrel-aged series.
            </p>
          </div>
          <div className='glass p-8 md:p-10 rounded-2xl border border-white/10'>
            <h6 className='font-mono text-primary text-[14px] tracking-[0.4em] uppercase mb-4'>
              Deliverables
            </h6>
            <ul className='text-zinc-300 text-sm md:text-base leading-relaxed space-y-2 list-disc list-outside pl-5 marker:text-primary'>
              <li>Brand Identity & Illustration</li>
              <li>Specialized Packaging Design</li>
              <li>Web Architecture (WordPress)</li>
              <li>
                Performance Apparel & Branded Merchandise
              </li>
              <li>Mixed-Pack Strategy (Booty Box)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. The Core Lineup (Full Width Image) */}
      <section className='w-full px-5 mb-12 md:mb-20'>
        <div className='max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/5'>
          <img
            src='/case-studies/DDBC-4-Can-Lineup_1280px.jpg'
            alt='Dry Dock Core Can Lineup'
            className='w-full h-auto'
          />
        </div>
        <div className='mt-8 text-center max-w-2xl mx-auto'>
          <h2 className='font-heading text-2xl md:text-3xl font-light text-white mb-4'>
            A Uniform <span className='text-primary'>Horizons</span>
          </h2>
          <p className='text-zinc-400 text-base leading-relaxed'>
            Every package in the lineup utilizes a distinctive illustration
            anchored by the signature Dry Dock crest. This system enables
            flavor-specific storytelling while ensuring the brand remains
            instantly recognizable on a crowded craft shelf.
          </p>
        </div>
      </section>

      {/* 4. Illustration Spotlight (Alternating Layout) */}
      <section className='max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='order-2 md:order-1'>
          <h2 className='font-heading text-3xl md:text-5xl font-light text-white mb-6 uppercase'>
            The Art of the <span className='text-primary'>Label</span>
          </h2>
          <p className='text-zinc-300 text-base leading-relaxed mb-8'>
            The Apricot Blonde can design defines the creative standard for the
            entire branding system. The design combines detailed character art
            with a nautical map inspired background to build a brand presence
            that is both rooted in the brewery's history and commercially
            aggressive.
          </p>
          <div className='flex gap-4'>
            <div className='h-[1px] flex-1 bg-white/10 self-center'></div>
            <span className='font-mono text-sm text-zinc-500 uppercase tracking-widest'>
              Hand-Drawn Precision
            </span>
          </div>
        </div>
        <div className='order-1 md:order-2 rounded-2xl overflow-hidden border border-white/10 shadow-inner'>
          <img
            src={illustrationSpotlight}
            alt='Apricot Blonde Illustration'
            className='w-full h-auto'
          />
        </div>
      </section>

      {/* 5. Packaging & Variety (Gallery) */}
      <section className='max-w-7xl mx-auto px-5 py-20'>
        <div className='mb-12'>
          <h2 className='font-heading text-3xl font-light text-white uppercase'>
            Packaging <span className='text-primary'>Design</span>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='group overflow-hidden rounded-2xl border border-white/5 bg-zinc-800/50'>
            <img
              src='/case-studies/DDBC-Apricot-Blonde-12-Pack_1280px.jpg'
              alt='Apricot Blonde 12-Pack Nature Shot'
              className='w-full h-auto group-hover:scale-105 transition-transform duration-300 ease-in-out'
            />
            <div className='p-6'>
              <h4 className='text-white font-medium mb-2'>
                Apricot Blonde 12-Pack
              </h4>
              <p className='text-zinc-500 text-base'>
                Translating the core can aesthetic to large-format transit
                packaging.
              </p>
            </div>
          </div>
          <div className='group overflow-hidden rounded-2xl border border-white/5 bg-zinc-800/50'>
            <img
              src='/case-studies/DDBC-Booty-Box-12-Pack_1280px.jpg'
              alt='Dry Dock Booty Box Nature Shot'
              className='w-full h-auto group-hover:scale-105 transition-transform duration-300 ease-in-out'
            />
            <div className='p-6'>
              <h4 className='text-white font-medium mb-2'>
                The "Booty Box" Mixed Pack
              </h4>
              <p className='text-zinc-500 text-base'>
                A pirate-themed variety pack showcasing the 4-can signature
                range.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Apparel (Nature Motif Integration) */}
      <section className='bg-zinc-800/20 py-12'>
        <div className='max-w-7xl mx-auto px-5 text-center'>
          <h2 className='font-heading text-3xl md:text-5xl font-light text-white mb-8'>
            COMMUNITY <span className='text-primary'>GEAR</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12'>
            <div className='rounded-2xl border border-white/10 shadow-2xl overflow-hidden'>
              <JerseyDisplay
                modelPath='/models/Apricot_Blonde_3D_Jersey_v2b.glb'
                posterUrl={bikeJerseyAb}
                title='Apricot Blonde Edition'
              />
            </div>
            <div className='rounded-2xl border border-white/10 shadow-2xl overflow-hidden'>
              <JerseyDisplay
                modelPath='/models/Hop_Abomination_3D_Jersey_v2.glb'
                posterUrl={bikeJerseyHa}
                title='Hop Abomination Edition'
              />
            </div>
          </div>

          <p className='max-w-2xl mx-auto text-zinc-400 text-base leading-relaxed'>
            Tying into Colorado's vibrant cycling culture, the project included
            the development of custom technical bike jerseys featuring the label
            artwork, allowing fans to take the Dry Dock brand onto the trails
            and high-mountain roads.
          </p>
        </div>
      </section>

      {/* 7. Next Project Footer */}
      <section className='py-20 text-center border-t border-white/5'>
        <h6 className='font-mono text-[14px] text-zinc-500 tracking-[0.5em] uppercase mb-8'>
          Next Case Study
        </h6>
        <Link
          to='/work/next-ascent'
          className='font-heading text-4xl md:text-6xl text-white hover:text-primary transition-colors duration-300 ease-in-out uppercase font-light'>
          Next Ascent{' '}
          <span className='block text-zinc-400 md:inline'>Adventures</span>
        </Link>
      </section>
    </div>
  );
}
