import React from 'react'

function Name({firstname,lastname,onChange,errors}) {
    return (
        <>
            <div className='text-[28px] font-bold mb-9'>What's your name?</div>
            <div className='grid  sm:grid-cols-2 gap-[30px]'>
                <div>
                    <label htmlFor=""><span>First name</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input value={firstname} onChange={(e)=>onChange("firstname",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />

                    {errors.firstname&&<div className='text-red-500 text-sm pl-2'>{errors.firstname}</div>}
                </div>
                <div>
                    <label htmlFor=""><span>Last name</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input value={lastname} onChange={(e)=>onChange("lastname",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />
                    {errors.lastname&&<div className='text-red-500 text-sm pl-2'>{errors.lastname}</div>}
                </div>  
            </div>
        </>
    )
}

export default Name
