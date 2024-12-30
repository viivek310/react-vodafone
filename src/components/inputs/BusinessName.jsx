import React from 'react'

function BusinessName({value,onChange,errors}) {
    return (
        <>
            <div className='text-[28px] font-bold mb-9'>What is the name of your business?</div>
            <div>
                <div>
                    <label htmlFor=""><span>Business Name</span><span className='text-[#EE3023] ml-1 '>*</span></label>
                    <input value={value} onChange={(e)=>onChange("businessname",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />

                    {errors.businessname&&<div className='text-red-500 text-sm pl-2'>{errors.businessname}</div>}
                </div>
            </div>
        </>
    )
}

export default BusinessName
