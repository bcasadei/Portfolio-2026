import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='absolute top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between px-5 pt-[30px] pb-4 md:pb-6 md:px-12 gap-4 md:gap-0 pointer-events-none'>
      <Link
        to='/'
        className='group font-heading text-xl md:text-2xl font-light tracking-[0.2em] uppercase pointer-events-auto'>
        <span className='text-white group-hover:text-primary transition-colors duration-300 ease-in-out'>
          Bill
        </span>{' '}
        <span className='text-primary group-hover:text-white transition-colors duration-300 ease-in-out'>
          Casadei
        </span>
      </Link>

      <nav className='flex items-center gap-2 md:gap-4 pointer-events-auto'>
        {[
          { label: 'Work', path: '/work' },
          { label: 'About', path: '/about' },
          { label: 'Contact', path: '/contact' },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className='glass px-4 py-1.5 rounded-full font-mono text-[10px] md:text-sm text-white/70 hover:text-primary tracking-widest uppercase transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 whitespace-nowrap pointer-events-auto shadow-lg'>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
