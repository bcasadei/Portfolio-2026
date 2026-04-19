import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    // Vite exposes env variables via import.meta.env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are missing!');
      setStatus('error');
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setStatus('success');
        formRef.current?.reset();
        // Reset success message after 5 seconds to allow another message
        setTimeout(() => setStatus('idle'), 5000);
      },
      (error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      },
    );
  };

  return (
    <div className='w-full max-w-4xl mx-auto px-5 pt-40 pb-24 md:py-32 pointer-events-auto animate-in fade-in slide-in-from-bottom-8 duration-700'>
      <div className='text-center mb-12'>
        <h2 className='font-heading text-3xl md:text-5xl font-light text-white mb-4'>
          START A <span className='text-primary'>PROJECT</span>
        </h2>
        <p className='text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase'>
          Let's build something beautiful together.
        </p>
      </div>

      <div className='glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden'>
        {/* Subtle background glow */}
        <div className='absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none'></div>
        <div className='absolute -bottom-32 -left-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none'></div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className='flex flex-col gap-6 relative z-10'>
          {/* Dynamic Hidden Fields for Template Matching */}
          <input
            type='hidden'
            name='time'
            value={new Date().toLocaleString()}
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='name'
                className='text-[10px] text-zinc-400 font-mono tracking-widest uppercase ml-1'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='John Doe'
                className='w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-black/60 transition-all duration-300 ease-in-out'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                htmlFor='reply_to'
                className='text-[10px] text-zinc-400 font-mono tracking-widest uppercase ml-1'>
                Email
              </label>
              <input
                type='email'
                name='reply_to'
                id='reply_to'
                required
                placeholder='john@example.com'
                className='w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-black/60 transition-all duration-300 ease-in-out'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='title'
              className='text-[10px] text-zinc-400 font-mono tracking-widest uppercase ml-1'>
              Subject
            </label>
            <input
              type='text'
              name='title'
              id='title'
              required
              placeholder='Project Inquiry'
              className='w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-black/60 transition-all duration-300 ease-in-out'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='message'
              className='text-[10px] text-zinc-400 font-mono tracking-widest uppercase ml-1'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              required
              rows={5}
              placeholder='Tell me about your project vision...'
              className='w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-black/60 transition-all duration-300 ease-in-out resize-none'></textarea>
          </div>

          <button
            type='submit'
            disabled={status === 'loading' || status === 'success'}
            className={`mt-4 w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 ease-in-out shadow-xl flex items-center justify-center gap-2
              ${status === 'idle' ? 'bg-primary text-white hover:bg-orange-500 hover:scale-[1.02] shadow-primary/20 hover:shadow-primary/40 cursor-pointer' : ''}
              ${status === 'loading' ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed border border-white/5' : ''}
              ${status === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-default' : ''}
              ${status === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/30 cursor-not-allowed' : ''}
            `}>
            {status === 'idle' && 'Initiate Transmission'}
            {status === 'loading' && (
              <>
                <svg
                  className='animate-spin h-4 w-4 text-zinc-400'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                </svg>
                Encrypting Payload...
              </>
            )}
            {status === 'success' && 'Transmission Received'}
            {status === 'error' && 'Error: Target Unreachable'}
          </button>
        </form>
      </div>
    </div>
  );
}
