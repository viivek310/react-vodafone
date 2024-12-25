import React from 'react'

function Username() {
    return (
        <>
            <div className='text-[28px] font-bold mb-9'>What's a good user name for you?</div>
            <div>
                <div>
                    <label htmlFor=""><span>User Name</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" />
                </div>
            </div>
        </>
    )
}

export default Username
