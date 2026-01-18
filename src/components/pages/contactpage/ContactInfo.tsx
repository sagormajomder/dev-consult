import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className='flex flex-col gap-8'>
      {/* Info Card */}
      <div className='bg-white dark:bg-[#151c2b] p-8 rounded-xl shadow-sm border border-[#cfd7e7] dark:border-gray-700'>
        <h3 className='text-xl font-bold text-[#0d121b] dark:text-white mb-8'>
          Contact Information
        </h3>
        <div className='flex flex-col gap-6'>
          {/* Visit Us */}
          <div className='flex gap-4 items-start'>
            <div className='w-10 h-10 rounded-full bg-[#135bec]/10 flex items-center justify-center shrink-0 text-[#135bec] mt-1'>
              <MapPin className='w-5 h-5' />
            </div>
            <div className='flex flex-col'>
              <span className='text-xs font-bold text-[#4c669a] dark:text-gray-400 uppercase tracking-wider mb-1'>
                Visit Us
              </span>
              <p className='text-[#0d121b] dark:text-white font-medium'>
                Mirpur, Dhaka
                <br />
                Bangladesh
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className='flex gap-4 items-start'>
            <div className='w-10 h-10 rounded-full bg-[#135bec]/10 flex items-center justify-center shrink-0 text-[#135bec] mt-1'>
              <Mail className='w-5 h-5' />
            </div>
            <div className='flex flex-col'>
              <span className='text-xs font-bold text-[#4c669a] dark:text-gray-400 uppercase tracking-wider mb-1'>
                Email Us
              </span>
              <a
                href='mailto:hello@devconsult.com'
                className='text-[#0d121b] dark:text-white font-medium hover:text-[#135bec] transition-colors'>
                hello@devconsult.com
              </a>
            </div>
          </div>

          {/* Call Us */}
          <div className='flex gap-4 items-start'>
            <div className='w-10 h-10 rounded-full bg-[#135bec]/10 flex items-center justify-center shrink-0 text-[#135bec] mt-1'>
              <Phone className='w-5 h-5' />
            </div>
            <div className='flex flex-col'>
              <span className='text-xs font-bold text-[#4c669a] dark:text-gray-400 uppercase tracking-wider mb-1'>
                Call Us
              </span>
              <a
                href='tel:+8801683428564'
                className='text-[#0d121b] dark:text-white font-medium hover:text-[#135bec] transition-colors'>
                +8801683428564
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className='flex gap-4 mt-8 pt-8 border-t border-[#cfd7e7] dark:border-gray-700'>
          <a
            href='https://x.com/sagormajomder'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#9ca3af] hover:text-[#135bec] transition-colors'>
            <Twitter className='w-6 h-6' />
          </a>
          <a
            href='https://github.com/sagormajomder'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#9ca3af] hover:text-[#135bec] transition-colors'>
            <Github className='w-6 h-6' />
          </a>
          <a
            href='https://linkedin.com/in/sagor-majomder'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#9ca3af] hover:text-[#135bec] transition-colors'>
            <Linkedin className='w-6 h-6' />
          </a>
        </div>
      </div>
    </div>
  );
}
