import Image from 'next/image';

const smapleCustormer = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64',
];

export default function AuthSidebar() {
  return (
    <div className='relative hidden flex-col justify-between bg-[#0B1120] p-12 text-white lg:flex'>
      <div className='absolute inset-0 bg-[linear-gradient(to_bottom_right,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20'></div>

      <div className='relative z-10'>
        <h1 className='mt-8 text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl text-white'>
          Architecting the <br /> digital future.
        </h1>

        <p className='mt-6 max-w-sm text-lg text-slate-300 font-medium leading-relaxed'>
          Join top-tier enterprises using our consultation platform to scale
          their software infrastructure securely and efficiently.
        </p>
      </div>

      <div className='relative z-10 mt-12'>
        <div className='mb-8 h-px w-full bg-slate-700' />
        <div className='flex items-center gap-4'>
          <div className='flex -space-x-4'>
            {smapleCustormer.map((src, i) => (
              <div
                key={i}
                className='relative h-12 w-12 rounded-full border-2 border-[#0B1120] bg-slate-800 overflow-hidden'>
                <Image
                  src={src}
                  alt={`User ${i + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
            <div className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0B1120] bg-slate-800 text-xs font-bold text-white'>
              +2k
            </div>
          </div>

          <div>
            <div className='flex text-yellow-400 gap-0.5 mb-1'>
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className='text-sm'>
                  {star}
                </span>
              ))}
            </div>
            <p className='text-sm font-medium text-slate-200'>
              Trusted by developers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
