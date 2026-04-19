import { Link } from 'react-router-dom';

interface NextCaseStudyProps {
  to: string;
  title: string;
  subtitle?: string;
}

export function NextCaseStudy({ to, title, subtitle }: NextCaseStudyProps) {
  return (
    <section className='py-20 text-center border-t border-white/5'>
      <h6 className='font-mono text-[14px] text-zinc-500 tracking-[0.5em] uppercase mb-8'>
        Next Case Study
      </h6>
      <Link
        to={to}
        className='font-heading text-4xl md:text-6xl text-white hover:text-primary transition-colors duration-500 uppercase font-light'>
        {title}{' '}
        {subtitle && (
          <span className='block text-zinc-400 md:inline'>{subtitle}</span>
        )}
      </Link>
    </section>
  );
}
