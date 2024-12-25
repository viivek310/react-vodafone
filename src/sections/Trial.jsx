import React from 'react'

function Trial() {
  return (
    <section className='bg-[#0B363C] text-white px-5 sm:px-16 lg:px-28 xl:px-40 min-[1600px]:px-[425px] py-12 lg:py-24'>
        <h2 className='text-5xl xl:text-[52px] font-semibold mb-8 text-center'>Allow Us to Show You Reliability</h2>
        <div className='flex gap-3 lg:gap-7 flex-col md:flex-row'>
            <input className='py-4 px-9 bg-[#153E44] border border-[#E3FFCC] flex-1 rounded-full ' type="text" />
            <button className='font-[22px] text-[#E3FFCC] bg-[#142F32] border border-[#E3FFCC] py-4 px-9 rounded-full'>Get Start Free Trial</button>
        </div>
    </section>
  )
}

export default Trial
