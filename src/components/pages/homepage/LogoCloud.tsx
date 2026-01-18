import { Anchor, Coins, Gem, Mountain, Rocket, Zap } from 'lucide-react';

export default function LogoCloud() {
  const logos = [
    { name: 'Voltic', icon: Zap },
    { name: 'GemStones', icon: Gem },
    { name: 'CoinBase', icon: Coins },
    { name: 'Terra', icon: Mountain },
    { name: 'StarShip', icon: Rocket },
    { name: 'Harbor', icon: Anchor },
  ];

  return (
    <section className='border-y border-slate-100 bg-white py-10 dark:border-slate-800 dark:bg-slate-900/50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
        <p className='mb-6 text-sm font-semibold uppercase tracking-wider text-slate-500'>
          Powering Next-Gen Companies
        </p>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center opacity-60 grayscale transition-all hover:grayscale-0'>
          {logos.map(logo => (
            <div
              key={logo.name}
              className='flex justify-center items-center gap-2 font-bold text-xl text-slate-700 dark:text-slate-300'>
              <logo.icon className='w-6 h-6' />
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
