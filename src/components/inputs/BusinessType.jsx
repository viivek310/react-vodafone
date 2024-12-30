import React from 'react'

function BusinessType({value,onChange,errors}) {
    return (
        <>
            <div className='text-[28px] font-bold mb-9'>What is your business type?</div>
            <div>
                <div>
                    <label htmlFor=""><span>Business Type</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <select value={value} onChange={(e)=>onChange("businesstype",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" >
                    <option value="" disabled>Business Type</option>
                        <option>Auto Body and Collision Repair</option>
                        <option>Automotive Repair and Maintenance Bakery</option>
                        <option>Carpentry and Woodworking</option>
                        <option>Catering Services</option>
                        <option>Cleaning Services (Residential and Commercial) Construction</option>
                        <option>Day Spa and Wellness Center  </option>
                    </select>

                    {errors.businesstype&&<div className='text-red-500 text-sm pl-2'>{errors.businesstype}</div>}
                </div>
            </div>
        </>
    )
}

export default BusinessType
