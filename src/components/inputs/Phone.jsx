import React from 'react'

function Phone({value,onChange,errors}) {
  return (
    <>
      <div className='text-[28px] font-bold mb-9'>What's a good phone number for you?</div>
      <div>
        <div>
          <label htmlFor=""><span>Phone number</span><span className='text-[#EE3023] ml-1'>*</span></label>
          <input value={value} onChange={(e)=>onChange("phone",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="tel" />

          {errors.phone&&<div className='text-red-500 text-sm pl-2'>{errors.phone}</div>}
        </div>
      </div>
    </>
  )
}

export default Phone
