export function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-5 pt-40 pb-24 md:py-32 pointer-events-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Large Typographic Hook */}
        <div className="lg:col-span-5 text-center lg:text-left">
           <h2 className="font-heading text-4xl md:text-6xl font-light text-white mb-6">SHAPING <br/><span className="text-primary font-medium tracking-tight">STRATEGIC</span><br/>EXPERIENCES.</h2>
           <div className="h-1 w-24 bg-primary mx-auto lg:mx-0 rounded-full mb-6"></div>
           <p className="text-zinc-400 font-mono text-sm tracking-widest uppercase">Creative Direction • Brand Identity • Motion & Video • AI Engineering</p>
        </div>

        {/* Right Column - Glassmorphic Content Block */}
        <div className="lg:col-span-7 glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-6 text-zinc-300 text-base leading-relaxed relative z-10">
            <p>
              I am a committed Creative Director and Technologist focused on shaping strategic digital architectures that generate tangible outcomes for businesses and elevate the human experience.
            </p>
            <p>
              My core specializations bridge the critical gap between aesthetics and execution, spanning high-fidelity brand identity, advanced user interface design, motion graphics, and professional video editing. 
            </p>
            <p>
              Having seen the industry evolve, I now heavily integrate <strong className="text-white font-medium">Artificial Intelligence</strong> into my technical workflow. By leveraging generative text/image modeling, code-assist agents, and neural frameworks, I am able to rapidly conceptualize, engineer dynamic frontends, and scale creative production at unprecedented speeds.
            </p>
          </div>

          {/* Skill Pills */}
          <div className="mt-10 flex flex-wrap gap-3 relative z-10">
            {['Brand Identity', 'UI / UX Design', 'Generative AI', 'Motion Graphics', 'Video Editing', 'React & WebGL'].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full border border-white/10 bg-black/40 text-zinc-300 text-sm font-mono tracking-wider uppercase backdrop-blur-sm shadow-inner transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary/50 hover:text-white cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
