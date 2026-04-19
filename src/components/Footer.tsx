import { SocialIcons } from './SocialIcons';

export function Footer() {
  return (
    <footer className='w-full py-8 flex flex-col items-center gap-4 pointer-events-auto mb-10'>
      <SocialIcons />
      <p className='font-mono tracking-widest text-sm text-zinc-400 uppercase'>
        © 2026 Bill Casadei
      </p>
    </footer>
  );
}
