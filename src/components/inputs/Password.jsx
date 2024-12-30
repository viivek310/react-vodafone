import React from 'react'

function Password({password,confpassword,onChange,errors}) {
  return (
    <>
       <div className='text-[28px] font-bold mb-9'>What would you like your password to be?</div>
            <div className='grid sm:grid-cols-2 gap-[30px]'>
                <div>
                    <label htmlFor=""><span>Password</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input value={password} onChange={(e)=>onChange("password",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="password" />

                    {errors.password&&<div className='text-red-500 text-sm pl-2'>{errors.password}</div>}
                </div>
                <div>
                    <label htmlFor=""><span>Confirm Password</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <input value={confpassword} onChange={(e)=>onChange("confirm password",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="password" />

                    {errors["confirm password"]&&<div className='text-red-500 text-sm pl-2'>{errors["confirm password"]}</div>}
                </div>
            </div>
    </>
  )
}

export default Password
