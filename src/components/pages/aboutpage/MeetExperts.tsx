import Container from '@/components/layouts/Container';
import { ExternalLink } from 'lucide-react';

const EXPERTS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ZrLISVrcaK43vIxbwgxHYtxD4I9cgtzwuco_zX5DYRiMY0echPeHm_BE4NjhnSwp-hPLo72Z-EhKpziJ1aYLlI7QGXOTBV4LPC-9cIH2WKo7VYS10-QEt6Z3QQLXS6n5ahWHtuhm6fdtGvJnGNMkNOodPFEHP-cZKmBFc0u8FcZfzhHI2jCsNbhnZLoSNKpWZc54XdyNsKYX9S6IyVjcQF1891a3OW5yz6jtgsRbKfeccGXYnU4NRO_ESo7kICRDtPfKSicJ2_o',
  },
  {
    name: 'David Chen',
    role: 'CTO',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfIIypM2IJHbCYWk4Mzs-9Zayqn40A9QiCgcn_PzcQ-QmXuQDQOo9WSdo3j9OfX_tWZc8_eWOR7o198532vgWP7q6B6JzNQvWC3TfMeaJKu4lqK_5Ie_O7d-8zrbO3tpsAm_Gs3qVqhXlDD8kNS0cYXByzHeNL6gVMNrwhbHbjKjW_Ap3t6Z2JVqSsYaKGUvuB5BWctPl9g9-Q2XJn1kLQyudPx-BhIsdYwcShN-s3RxQsv9oBECOxeWkC3xnv7_XMYQcQBugkrvk',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Developer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwhsIbrm-3Z3JeJPW8L5gYIln57fmXLz-7PdtD_NvYVH_rmU6H8RTN_H8hPbhVJGSkMnuJL8MT-pp4lLdzO1DBUwCm-IcqjPt8UK3kVCIsDmrxwLX1h1h5emqAfLqkuNvQw343_afjIC2wMuhl1lX7iHkNgmnYUEloTEz49sjJMRkSTbFp23NyllWlUWU9iOcsdgB2jg8jx_zul1ltSK4amqCGKjrXqpjM_kfYJaXJdP_uLz5UOv8mPb9J_ObRDhLGULwtWfAhvFo',
  },
  {
    name: 'Michael Ross',
    role: 'Product Manager',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBm-V-vj5sNQLwGaAN6YKXl03npPQqO_3wRm8LoaMV4YxqgBK8OcBiANyOTfQ1_yLf7CSmHYrIOoWQUVoFpJcuk8A_qQHpLrf7HKV7CsOuSbZIbcawZm6KEqPXo9thjE03mfsveyn8Zwa1ozBJvRJEHcy-EPkyRE7KEHIsCn7NmMRffyXopnXytXZxX6xoqgXRBhqpcj_OAGxh64KErE9Fa58oGmYxTu_7bclWnYF-bKnQbcAVsZWwlneDVfasJXLDWhiYb1pgB2zs',
  },
  {
    name: 'Sagor Majomder',
    role: 'Full Stack Dev',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBm-V-vj5sNQLwGaAN6YKXl03npPQqO_3wRm8LoaMV4YxqgBK8OcBiANyOTfQ1_yLf7CSmHYrIOoWQUVoFpJcuk8A_qQHpLrf7HKV7CsOuSbZIbcawZm6KEqPXo9thjE03mfsveyn8Zwa1ozBJvRJEHcy-EPkyRE7KEHIsCn7NmMRffyXopnXytXZxX6xoqgXRBhqpcj_OAGxh64KErE9Fa58oGmYxTu_7bclWnYF-bKnQbcAVsZWwlneDVfasJXLDWhiYb1pgB2zs',
  },
];

export default function MeetExperts() {
  return (
    <div className='w-full bg-[#f6f6f8] dark:bg-[#101622] py-16'>
      <Container>
        <h2 className='text-[32px] md:text-4xl font-bold leading-tight text-[#0d121b] dark:text-white mb-10 text-center'>
          Meet the Experts
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {EXPERTS.map((expert, index) => (
            <div
              key={index}
              className='group flex flex-col items-center text-center bg-white dark:bg-[#151c2b] p-6 rounded-lg border border-transparent hover:border-[#cfd7e7] dark:hover:border-gray-700 transition-all'>
              <div
                className='w-32 h-32 rounded-full mb-4 bg-gray-200 bg-cover bg-center'
                style={{ backgroundImage: `url("${expert.image}")` }}></div>
              <h3 className='text-lg font-bold text-[#0d121b] dark:text-white'>
                {expert.name}
              </h3>
              <p className='text-sm text-[#135bec] font-medium mb-3'>
                {expert.role}
              </p>
              <div className='flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                <button className='text-gray-400 hover:text-[#135bec]'>
                  <ExternalLink className='w-5 h-5' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
