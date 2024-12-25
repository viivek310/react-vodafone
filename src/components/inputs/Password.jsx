import React from 'react'

function Password() {
  return (
    <>
       <div className='text-[28px] font-bold mb-9'>What would you like your password to be?</div>
            <div className='grid grid-cols-2 gap-[30px]'>
                <div>
                    <label htmlFor=""><span>Password</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />
                </div>
                <div>
                    <label htmlFor=""><span>Confirm Password</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />
                </div>
            </div>
    </>
  )
}

export default Password
