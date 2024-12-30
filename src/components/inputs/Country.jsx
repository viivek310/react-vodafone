import React from 'react'

function Country({value,onChange,errors}) {
  return (
    <>
      <div className='text-[28px] font-bold mb-9'>Where are you located?</div>
      <div>
        <div>
          <label htmlFor=""><span>Country</span><span className='text-[#EE3023] ml-1'>*</span></label>
          <select value={value} onChange={(e)=>onChange("country",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" >
            <option value="" disabled>Country</option>
            <option>China</option>
            <option>Japan</option>
            <option>Germany</option>
            <option>India</option>
            <option>United Kingdom</option>
            <option>France  </option>
          </select>

          {errors.country&&<div className='text-red-500 text-sm pl-2'>{errors.country}</div>}
        </div>
      </div>
    </> 
  )
}

export default Country
