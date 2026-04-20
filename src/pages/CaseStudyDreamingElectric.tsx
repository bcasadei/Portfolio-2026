import { Link } from 'react-router-dom';

export default function CaseStudyDreamingElectric() {
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
        <div className='absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-40 z-0'></div>
        <div className='relative z-20 text-center px-5 flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000'>
          <h1 className='font-heading text-4xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.1em] uppercase mb-4'>
            Dreaming <span className='text-primary'>Electric</span>
          </h1>
          <p className='font-mono text-zinc-400 text-xs md:text-sm tracking-[0.3em] uppercase'>
            AI Video Production • Brand Identity • Workflow Engineering
          </p>
        </div>
      </section>

      {/* 2. Strategic Overview */}
      <section className='max-w-7xl mx-auto px-5 py-12 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
          <div className='glass p-8 md:p-10 rounded-2xl border border-white/10'>
            <h6 className='font-mono text-primary text-[14px] tracking-[0.4em] uppercase mb-4'>
              Overview
            </h6>
            <p className='text-zinc-300 text-sm md:text-base leading-relaxed'>
              Dreaming Electric is an experimental YouTube channel exploring
              AI-generated visuals and surreal storytelling. The project sits at
              the intersection of generative AI, motion design, and cinematic
              world-building, producing short-form video content.
            </p>
          </div>
          <div className='glass p-8 md:p-10 rounded-2xl border border-white/10'>
            <h6 className='font-mono text-primary text-[14px] tracking-[0.4em] uppercase mb-4'>
              The Approach
            </h6>
            <p className='text-zinc-300 text-sm md:text-base leading-relaxed'>
              Utilizing cutting-edge diffusion models and high-end video
              synthesis, each episode is a technical study in consistent
              character generation and atmospheric lighting.
            </p>
          </div>
          <div className='glass p-8 md:p-10 rounded-2xl border border-white/10'>
            <h6 className='font-mono text-primary text-[14px] tracking-[0.4em] uppercase mb-4'>
              Deliverables
            </h6>
            <ul className='text-zinc-300 text-base leading-relaxed space-y-2 list-disc list-outside pl-5 marker:text-primary'>
              <li>Art Direction & Design</li>
              <li>Motion Graphics</li>
              <li>AI Video Synthesis</li>
              <li>Sound Design</li>
              <li>
                ComfyUI production workflow for repeatable AI video generation
              </li>
              <li>A growing library of original video content</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Visual Identity — Showcase */}
      <section className='max-w-7xl mx-auto px-5 py-10'>
        <div className='mb-10'>
          <h2 className='font-heading text-3xl md:text-5xl font-light text-white uppercase'>
            The <span className='text-primary'>Approach</span>
          </h2>
          <p className='mt-4 text-zinc-400 text-base max-w-3xl leading-relaxed'>
            Dreaming Electric was created to house generative AI video
            experiments and to push the boundaries of what AI can achieve in
            video production and motion design.
          </p>
        </div>
        <div className='rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-h-80 md:max-h-100'>
          <img
            src='/case-studies/Dreaming_Electrci_YT_banner.jpg'
            alt='Dreaming Electric Visual Identity'
            className='w-full h-full object-cover object-center block'
          />
        </div>
      </section>

      {/* 4. Project in Focus: Full Speed */}
      <section className='max-w-7xl mx-auto px-5 pt-20 pb-10 md:pb-20 border-t border-white/5'>
        <div className='mb-12'>
          <h6 className='font-mono text-primary text-[12px] tracking-[0.5em] uppercase mb-4'>
            Project in Focus
          </h6>
          <h2 className='font-heading text-3xl md:text-5xl font-light text-white uppercase'>
            "Full Speed"{' '}
            <span className='text-zinc-500'>— Arca Gidan Contest</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Left: Video Embed */}
          <div className='space-y-8'>
            <div className='aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black'>
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/5jtkjMW4ybw'
                title='Full Speed - Arca Gidan Contest'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>
            <p className='text-zinc-400 text-sm leading-relaxed italic'>
              The final contest entry: a high-octane sequence requiring
              frame-by-frame character stability and environment cohesion across
              multiple generative passes.
            </p>

            <div className='pt-8 border-t border-white/5'>
              <h4 className='text-white font-medium mb-4 uppercase tracking-wider'>
                Why Open Source?
              </h4>
              <p className='text-zinc-400 text-sm md:text-base leading-relaxed'>
                The Arca Gidan contest required the use of 75%+ open-source
                models (utilizing weights like Wan, LTXV, Flux, and Z-Image).
                Local open-source ecosystems offer a level of production
                sovereignty and privacy unattainable through commercial AI
                models. By leveraging dedicated hardware, we eliminated
                per-generation costs while drastically reducing the
                environmental footprint compared to energy-intensive hosted
                cloud solutions.
              </p>
            </div>
          </div>

          {/* Right: Character Sheet & Narrative */}
          <div className='space-y-8'>
            <div className='glass p-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden'>
              <img
                src='/case-studies/Daniel-character-sheet.jpg'
                alt='Daniel Character Sheet'
                className='w-full h-auto rounded-xl block'
              />
            </div>
            <div>
              <h4 className='text-white font-medium mb-4 uppercase tracking-wider'>
                The Breakdown
              </h4>
              <p className='text-zinc-400 text-base leading-relaxed mb-6'>
                For the "Full Speed" entry, the primary challenge was
                maintaining the identity of "Daniel" and the Arcane and
                Spiderverse inspired Painterly 3D aesthetic across varied
                lighting and extreme camera angles.
              </p>
              <ul className='space-y-3 text-zinc-500 text-sm'>
                <li className='flex items-start gap-3'>
                  <span className='text-primary mt-1'>→</span>
                  <span>
                    Character sheets used for Nano Banana image edits to
                    maintain precise identity anchoring.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-primary mt-1'>→</span>
                  <span>
                    Custom Z-Image-Turbo LoRAs trained for both character
                    consistency and the specialized painterly style.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-primary mt-1'>→</span>
                  <span>
                    Post-production pacing designed to sync with high-energy
                    sound design.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pillars & Workflow */}
      <section className='max-w-7xl mx-auto px-5 pt-10 md:pt-20 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
        {/* Left: Pillars */}
        <div className='space-y-12'>
          <div>
            <h3 className='font-heading text-2xl text-white uppercase mb-4'>
              Visual Exploration
            </h3>
            <p className='text-zinc-400 leading-relaxed'>
              While the channel maintains a recognizable brand identity and
              digital presence, the work inside remains a laboratory for
              stylistic variety. It's about building a stable home for unstable
              experiments, ensuring the container is consistent even when the
              content is evolving.
            </p>
          </div>
          <div>
            <h3 className='font-heading text-2xl text-white uppercase mb-4'>
              Workflow Engineering
            </h3>
            <p className='text-zinc-400 leading-relaxed'>
              Custom pipelines developed in ComfyUI using node-based generation,
              text-to-image, text-to-video, image-to-video and video-to-video
              models. The workflow isn't just a tool; it's a flexible harness
              meant to capture the unpredictable nature of AI outputs.
            </p>
          </div>
          <div>
            <h3 className='font-heading text-2xl text-white uppercase mb-4'>
              Aesthetic Range
            </h3>
            <p className='text-zinc-400 leading-relaxed'>
              The content strategy is deliberate inconsistency. By jumping
              between neon-noir, surrealism, and synthetic distortion, the
              channel maps the full range of what generative tools can do when
              they aren't forced into a box.
            </p>
          </div>
        </div>

        {/* Right: Production Pipeline */}
        <div className='bg-zinc-950/50 p-8 md:p-12 rounded-3xl border border-white/5'>
          <h2 className='font-heading text-3xl font-light text-white mb-10 uppercase'>
            The <span className='text-primary'>Process</span>
          </h2>
          <ol className='relative border-l border-white/10 space-y-8 ml-4'>
            {[
              {
                step: '01',
                title: 'Script & Storyboard',
                desc: 'Every project begins with a narrative foundation and a detailed storyboard to ensure the visual experimentation remains anchored to a core intention.',
              },
              {
                step: '02',
                title: 'Consistency Planning',
                desc: 'A deliberate strategy to maintain character and style stability — including training custom LoRA models, creating character reference sheets, and using prompt consistency strategies across models.',
              },
              {
                step: '03',
                title: 'Model Orchestration',
                desc: 'Developing custom ComfyUI workflows utilizing text-to-image, text-to-video, and video-to-video models (both open and closed source like Nano Banana) to execute the storyboard.',
              },
              {
                step: '04',
                title: 'Generation & Refinement',
                desc: 'Multiple passes are run to select the best outputs, which are then refined through iterative prompting and node adjustments to meet the visual goals.',
              },
              {
                step: '05',
                title: 'Post-Production',
                desc: 'Editing, pacing, and original sound design provide the final layer of cohesion that separates raw AI generation from a finished cinematic piece.',
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className='ml-6'>
                <span className='absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 border border-white/10'>
                  <span className='w-2 h-2 rounded-full bg-primary'></span>
                </span>
                <div>
                  <span className='font-mono text-[10px] text-primary tracking-widest uppercase'>
                    {step}
                  </span>
                  <h4 className='text-white font-medium mt-1 mb-1'>{title}</h4>
                  <p className='text-zinc-500 text-sm leading-relaxed'>
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Outcome & Results */}
      <section className='max-w-7xl mx-auto px-5 py-10'>
        <div className='mb-12'>
          <h2 className='font-heading text-3xl md:text-5xl font-light text-white uppercase'>
            The <span className='text-primary'>Evolution</span>
          </h2>
          <p className='mt-4 text-zinc-400 text-base max-w-3xl leading-relaxed'>
            Dreaming Electric continues to evolve as a resilient sandbox that
            balances a recognizable brand aesthetic with the flexibility for
            total creative risk. The project functions as a living map of
            generative potential and workflow agility — where every new piece
            expands the technical library.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            {
              title: 'Aesthetic Range',
              desc: 'Testing the ability to jump between diverse stylistic directions while maintaining high production quality.',
            },
            {
              title: 'Agile Workflows',
              desc: 'Building flexible pipelines that adapt to new models and techniques as they emerge from the open source community.',
            },
            {
              title: 'Original Library',
              desc: 'Developing an expansive portfolio of video work that prioritizes stylistic discovery and technical growth.',
            },
            {
              title: 'Boundless Output',
              desc: 'Proving that creative direction remains most powerful when it remains curious and untied to a single look.',
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className='glass p-8 rounded-2xl border border-white/10'>
              <h4 className='text-primary font-medium mb-2 uppercase tracking-wider'>
                {title}
              </h4>
              <p className='text-zinc-400 text-sm leading-relaxed'>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Key Takeaways */}
      <section className='max-w-3xl mx-auto px-5 py-20 text-center'>
        <h6 className='font-mono text-primary text-[12px] tracking-[0.5em] uppercase mb-8'>
          Key Takeaways
        </h6>
        <p className='text-white text-xl md:text-2xl font-light leading-relaxed mb-8 italic opacity-90'>
          "Strong creative direction is the difference between AI-assisted work
          and AI-dependent work. Workflow design is a creative act, not just a
          technical one."
        </p>
        <p className='text-zinc-400 text-base leading-relaxed'>
          Constraints, in time, tools, and format, sharpen decisions rather than
          limit them. And generative AI is most powerful not when used freely,
          but when guided by clear intent and a willingness to iterate.
        </p>
      </section>

      {/* 7. Case Study Footer */}
      <section className='py-20 text-center border-t border-white/5'>
        <h6 className='font-mono text-[14px] text-zinc-500 tracking-[0.5em] uppercase mb-8'>
          Next Case Study
        </h6>
        <Link
          to='/work/dry-dock'
          className='font-heading text-4xl md:text-6xl text-white hover:text-primary transition-colors duration-300 ease-in-out uppercase font-light'>
          Dry Dock{' '}
          <span className='block text-zinc-400 md:inline'>Brewing Co.</span>
        </Link>
      </section>
    </div>
  );
}
