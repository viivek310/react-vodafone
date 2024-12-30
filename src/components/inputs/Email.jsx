import React from 'react'

function Email({value,onChange,errors}) {
  return (
    <>
      <div className='text-[28px] font-bold mb-9'>Where should we send your information?</div>
      <div>
        <div>
          <label htmlFor=""><span>Email Address</span><span className='text-[#EE3023] ml-1'>*</span></label>
          <input value={value} onChange={(e)=>onChange("email",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="email" />

          {errors.email&&<div className='text-red-500 text-sm pl-2'>{errors.email}</div>}
        </div>
      </div>
    </>
  )
}

export default Email
