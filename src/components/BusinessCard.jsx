import React from 'react'

function BusinessCard({svg,heading,text}) {
    return (
        <div className='bg-[#153E44] h-full w-full rounded-[25px] px-7 py-12 cursor-pointer hover:bg-[#31909e] transition-colors duration-300 ease-out'>
            <div className='flex justify-between items-center'>
                <div>
                    {svg}
                </div>

                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4076 12.3837L16.0104 12.3835L16.0104 2.98737L1.10679 17.891L0.103803 16.888L15.016 1.97576L5.61128 1.98438L5.61106 0.587181L17.4076 0.587402V12.3837Z" fill="white" />
                    </svg>

                </div>
            </div>

            <div className='text-[28px] font-bold mt-10 mb-5'>{heading}</div>

            <div className='text-lg font-light'>{text}</div>
        </div>
    )
}

export default BusinessCard
