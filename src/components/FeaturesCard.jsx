import React from 'react'


function FeaturesCard({ svg, heading, text }) {
    return (
        <div className='py-5 text-[#0D0D0D] space-y-3 text-center h-[250px] w-[290px] shadow-[0px_2px_8px_#00000029] my-2 cursor-pointer mx-1 rounded-md'>
            <div className='flex justify-center'>
                <img src={svg} alt="" />
            </div>
            <div className=' font-bold text-[23px]'>{heading}</div>
            <p className='text-sm'>{text}</p>

            <div className='flex items-center justify-center gap-2 text-lg text-[#BD0000]'>
                <div>{heading}</div>
                <div>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.11589 15.0573L16.1992 7.97396M16.1992 7.97396L9.11589 0.890625M16.1992 7.97396H0.574219" stroke="#E60000" />
                    </svg>

                </div>
            </div>

        </div>
    )
}

export default FeaturesCard
