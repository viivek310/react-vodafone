import React, { useState } from 'react'


function Pricing() {
    const [toggle, setToggle] = useState(false)
    return (
        <section className='bg-[#0B0F13] text-white px-5 sm:px-16 xl:px-24 2xl:px-64 py-16 lg:py-24'>
            <h2 className='text-5xl xl:text-[52px] font-semibold text-center'>Invest In Easy To Use Solutions</h2>

            <div className='flex justify-center items-center gap-7 my-7'>
                <div className='text-[22px] font-light'>Billed Monthly</div>
                <div>
                    <button onClick={() => setToggle(t => !t)} className='bg-[#0B363C] h-10 w-16 rounded-full py-[6px] px-[9px] flex items-center'>
                        <div className={`h-7 aspect-square bg-[#E0FFC7] rounded-full transition-all duration-300 ${toggle && "translate-x-5"}`}></div>
                    </button>
                </div>
                <div className='text-[22px] font-light'>Billed Annually</div>
            </div>

            <div className='text-[22px] font-light text-center mb-[75px]'>Save up to $480 with annual pricing. All prices in USD.</div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                <div className={`p-12 bg-[#1E2226] rounded-[25px]`}>
                    <div className='text-[42px] font-bold mb-5'>Plus</div>
                    <div className='text-[22px] font-light mb-11'>Advanced tools to simplify and scale your operations.</div>
                    <div className='flex justify-between items-center'>
                        <div className='text-[18px] font-light'><span className='text-[42px]'>$149</span> per month</div>
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4076 12.3837L16.0104 12.3835L16.0104 2.98737L1.10679 17.891L0.103803 16.888L15.016 1.97576L5.61128 1.98438L5.61106 0.587181L17.4076 0.587402V12.3837Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={`p-12 bg-[#0B363C] rounded-[25px]`}>
                    <div className='text-[42px] font-bold mb-5'>Plus</div>
                    <div className='text-[22px] font-light mb-11'>Advanced tools to simplify and scale your operations.</div>
                    <div className='flex justify-between items-center'>
                        <div className='text-[18px] font-light'><span className='text-[42px]'>$149</span> per month</div>
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4076 12.3837L16.0104 12.3835L16.0104 2.98737L1.10679 17.891L0.103803 16.888L15.016 1.97576L5.61128 1.98438L5.61106 0.587181L17.4076 0.587402V12.3837Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
