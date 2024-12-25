import React from 'react'

function Name() {
    return (
        <>
            <div className='text-[28px] font-bold mb-9'>What's your name?</div>
            <div className='grid grid-cols-2 gap-[30px]'>
                <div>
                    <label htmlFor=""><span>First name</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />
                </div>
                <div>
                    <label htmlFor=""><span>Last name</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />
                </div>
            </div>
        </>
    )
}

export default Name
