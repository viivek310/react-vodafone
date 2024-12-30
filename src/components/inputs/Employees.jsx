import React from 'react'

function Employees({value,onChange,errors}) {
  return (
    <>
            <div className='text-[28px] font-bold mb-9'>How many employee working on your company?</div>
            <div>
                <div>
                    <label htmlFor=""><span>Number of Employee</span><span className='text-[#EE3023] ml-1'>*</span></label>
                    <select value={value} onChange={(e)=>onChange("employees",e.target.value)} className='w-full border border-[#D1D1D1] h-[50px] rounded-[5px] px-3' type="text" >
                    <option value="" disabled>Number of Employee</option>
                        <option>10-20</option>
                        <option>20-30</option>
                        <option>30-40</option>
                        <option>40-50 +</option>
                    </select>

                    {errors.employees&&<div className='text-red-500 text-sm pl-2'>{errors.employees}</div>}
                </div>
            </div>
        </>
  )
}

export default Employees
