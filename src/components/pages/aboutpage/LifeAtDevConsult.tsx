import Container from '@/components/layouts/Container';

export default function LifeAtDevConsult() {
  return (
    <div className='w-full bg-white dark:bg-[#151c2b] py-16'>
      <Container>
        <div className='flex flex-col gap-3 text-center mb-10'>
          <h2 className='text-[32px] md:text-4xl font-bold leading-tight text-[#0d121b] dark:text-white'>
            Life at DevConsult
          </h2>
          <p className='text-base font-normal leading-normal text-[#4c669a] dark:text-gray-400'>
            Behind great software is a great team having fun.
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px]'>
          {/* Large item */}
          <div
            className='col-span-2 row-span-2 rounded-lg bg-gray-100 bg-cover bg-center'
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPE5vtzk4dtWbaz6MSSbXo3uD5dI4UZ2WA9tLkPrfflyP9rZ-yQEuaelQyp3OxVbAS-8Fv9G4pOIZIPQrFIjpBtNAnSdwU0VQBzFvZToy1-4OH5QH-7QSIwn_pjZhX0MjHCbTlmJl61iktNMNUsfJ15-Nxp9YfBr5X6HdWo0mLTJrqxi93A_TzGyA855r2tsMeTp_OsY5H8s3w1n-GG-UXEWRhXR1oO5YzHQD60LKIP0Cm7G0MfGszVk-VgWv1-KY5VkRLvGyg6eE")',
            }}></div>
          {/* Small item */}
          <div
            className='col-span-1 row-span-1 rounded-lg bg-gray-100 bg-cover bg-center'
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANVuMN_U5hTkn25yoIhswgc57xsgpMV9rdtECUWYLUBDVrXvrls-EPxVRZYzs5MbAYOmBqugBMHagVErfm5TPus--EXjfFCcDDMf5FuVh0FRLRqrS5YILSW4uWbwA5B_oonVNHv0dAKc8efrsSm8hOMQI9xqhnLWtaJPF7S1RvX7XIHMoZke22aP9z_BumIiWVFgFvQd7QXaCdwLZk_e_CS0Pji4wNXmTeqQbvmhD1iadXFIQqKOa2w_cVKisnMTwBqS0__M5AvsM")',
            }}></div>
          {/* Small item */}
          <div
            className='col-span-1 row-span-1 rounded-lg bg-gray-100 bg-cover bg-center'
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTjD93jbu4MvEqmFWZn68MR3hCTUHt_VkCIXanTKk8Pu7SMZ2S69sOGp8Q5cCqS2OKsbfQWCZ_qRJ0QSZLRWfswSOLVB8gWPpNlXrk09VIjI3sHEEDIigvfMnuEfnUT-oGlwm6MFD9U0sMbJw4pyYqgNSwmEXtlU5XoE04TqF1sS3qqPB3J_YBv8ULQpQifs6jjG0mDQF6TNXhPFNSI1zzq--kuIM3RYI0ixdoUVJ_8bktE76p_rewylNqUZgh_CDJLs4I3AntNEI")',
            }}></div>
          {/* Wide item */}
          <div
            className='col-span-2 row-span-1 rounded-lg bg-gray-100 bg-cover bg-center'
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDouMPjkzMxo8ZN_tkik59oUYI4DvHiJqqsGwefXFWxkXGohdb7MbiX8PlDNcw_9s6aTH6eHLC1EciNaYewl07LtTIXvMRk2PqpYwCa5WT9608TTHwdyD9spg_pCEzuTyAXDfP2StqR6OGe-aCrxitw9wi7hwptff7p-kCtct5FR5EyqcfMP-dm8IU8UyWE8uJMPUsePrmUB6wM1REQujTKMciKCn2ANF7mHmKOcdGHH_W5K2jnBfOmM_21snU65_2RWO6kk58lqYk")',
            }}></div>
        </div>
      </Container>
    </div>
  );
}
