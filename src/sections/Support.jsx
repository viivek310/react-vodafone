import React from 'react'
import svg from "../assets/svgs/support.svg"

function Support() {
  return (
    <section className='py-16 lg:py-24 px-5 sm:px-16 xl:px-24 2xl:px-64'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='flex items-center'>
            <div className='text-center md:text-start'>
                <h2 className='text-5xl xl:text-[52px] font-semibold'>We’ve Got Your Back</h2>
                 
                 <p className='text-lg my-7'>Our support team is available by phone and in-app chat. Equally important, you’ll get access to an online university and help center as well as a private Facebook group of 18,000+ pros like you to share tips and grow together.</p>

                 <button className='text-[22px] text-[#E3FFCC] bg-[#142F32] py-5 px-16 rounded-[45px]'>Get Started</button>
            </div>
        </div>
        <div className='flex items-center justify-center md:justify-start row-start-1 md:row-auto'>
            <div className='bg-[#E3FFCC] w-fit px-16 md:ms-auto rounded-[25px] overflow-clip   '>
                <img src={svg} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Support