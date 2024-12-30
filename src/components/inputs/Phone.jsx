import React from 'react'

function Phone({value,onChange,errors,country}) {
  const code = {
    China: "+86",
    Japan: "+81",
    Germany: "+49",
    India: "+91",
    "United Kingdom": "+44",
    France: "+33"
  }
  return (
    <>
      <div className='text-[28px] font-bold mb-9'>What's a good phone number for you?</div>
      <div>
        <div>
          <label htmlFor=""><span>Phone number</span><span className='text-[#EE3023] ml-1'>*</span></label>
          <div className='flex items-center '>
            <div className='h-[50px] px-3 border border-[#D1D1D1] flex items-center rounded-[5px]'>{code[country]}</div>
            <input value={value} onChange={(e)=>onChange("phone",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="number" />
          </div>

          {errors.phone&&<div className='text-red-500 text-sm pl-2'>{errors.phone}</div>}
        </div>
      </div>
    </>
  )
}

export default Phone
