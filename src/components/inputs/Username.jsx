import React from 'react'

function Username({value,onChange,errors}) {
    return (
        <>
            <div className='text-[28px] font-bold mb-9'>What's a good user name for you?</div>
            <div>
                <div>
                    <label htmlFor=""><span>User Name</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input value={value} onChange={(e)=>onChange("username",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />

                    {errors.username&&<div className='text-red-500 text-sm pl-2'>{errors.username}</div>}
                </div>
            </div>
        </>
    )
}

export default Username 
