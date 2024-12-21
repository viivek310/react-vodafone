import React from 'react'

function DownloadCard({color1,color2,logo,heading,text,download,textcolor}) {
    return (
        <div className={`p-5 sm:p-10 bg-[${color1}] ${textcolor} rounded-[30px]`}>
            <div className='flex gap-6 mb-7 sm:mb-14 items-center flex-col sm:flex-row text-center sm:text-start'>
                <div className={`h-[85px] aspect-square bg-[${color2}] grid place-items-center rounded-lg`}>
                    {logo}
                </div>
                <div className='text-[28px] font-bold'>{heading}</div>
            </div>

            <div className='mb-8 text-lg'>{text}</div>

            <div>
                {download}
            </div>
        </div>
    )
}

export default DownloadCard
