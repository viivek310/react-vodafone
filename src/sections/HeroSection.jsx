import React from 'react'
import heroImg from "../assets/images/hero.png"

function HeroSection() {
    return (
        <section className='h-[2650px] min-[480px]:h-[2400px] sm:h-[1600px] xl:h-[1100px] bg-[#F5F8F9] pt-9 pb-24 px-5 sm:px-10'>
            <div className='flex flex-col h-full'>
                <div className='flex justify-center'>
                    <button className='text-xl xl:text-[28px] py-3 px-12 bg-white rounded-full shadow-[0px_4px_25px_#0000001A]'>Free 14-Day Trial</button>
                </div>

                <h1 className='text-7xl xl:text-[102px] font-bold text-center my-7 leading-[80px] xl:leading-[100px]'>Work simpler. Grow smarter.</h1>

                <p className='text-center text-2xl xl:text-[32px] max-w-[1200px] mx-auto leading-10'>Start a risk free trial to see how easily your home services business can improve
                    scheduling, dispatching, invoicing and payment collection.</p>

                <div className='text-center flex flex-col sm:flex-row justify-center gap-5 mt-14 mb-14 xl:mb-0 relative z-10'>
                    <button className='text-[22px] bg-[#142F32] py-5 px-16 text-white rounded-full hover:bg-[#225358] transition-colors duration-300 ease-linear'>Get Started</button>
                    <button className='text-[22px] bg-white py-5 px-16 rounded-full hover:bg-[#142F32] hover:text-white transition-colors duration-300 ease-linear'>Try Demo</button>
                </div>

                <div className='flex-1 relative'>
                    <div className='absolute top-0 grid grid-cols-12 auto-rows-[300px] xl:auto-rows-auto  w-full gap-5 items-end'>
                        <div className='col-span-12 xl:col-span-3 w-full flex justify-center bg-white h-full xl:h-auto rounded-[25px]'><img className='object-contain' src={heroImg} alt="" /></div>


                        <div className='bg-[#163F45] h-full xl:h-[380px] w-full text-white rounded-[25px] px-5 2xl:px-14 text-center flex flex-col justify-center col-span-12 sm:col-span-6 xl:col-span-2'>
                            <div className='text-[52px] font-semibold '>30+</div>
                            <div className='text-[22px] font-light'>Field Service Management Features</div>
                        </div>

                        <div className='h-full xl:h-[260px] w-full bg-white rounded-[25px] px-5 py-6 flex xl:items-end xl:justify-start col-span-12 sm:col-span-6 xl:col-span-2 justify-center items-center'>
                            <div>
                                <div className='bg-[#E0FFC7] w-fit rounded-md p-1 mb-2'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.30775 20.5C4.80258 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.30775C3.5 4.80258 3.675 4.375 4.025 4.025C4.375 3.675 4.80258 3.5 5.30775 3.5H18.6923C19.1974 3.5 19.625 3.675 19.975 4.025C20.325 4.375 20.5 4.80258 20.5 5.30775V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H5.30775ZM5.30775 19H11.25V5H5.30775C5.23075 5 5.16025 5.03208 5.09625 5.09625C5.03208 5.16025 5 5.23075 5 5.30775V18.6923C5 18.7692 5.03208 18.8398 5.09625 18.9038C5.16025 18.9679 5.23075 19 5.30775 19ZM12.75 19H18.6923C18.7692 19 18.8398 18.9679 18.9038 18.9038C18.9679 18.8398 19 18.7692 19 18.6923V12H12.75V19ZM12.75 10.5H19V5.30775C19 5.23075 18.9679 5.16025 18.9038 5.09625C18.8398 5.03208 18.7692 5 18.6923 5H12.75V10.5Z" fill="#282930" />
                                    </svg>

                                </div>
                                <div className='text-lg'>Total Projects</div>
                                <div className='text-[52px] font-semibold'>20+</div>
                                <div className='text-lg'>Increases of <span className='text-[#00D338] font-bold'>10</span> This week</div>
                            </div>
                        </div>

                        <div className='h-full xl:h-[380px] w-full bg-[#E0FFC7] rounded-[25px] flex items-center justify-center text-center px-[75px] col-span-12 sm:col-span-6 xl:col-span-2'>
                            <div>
                                <div className='text-[52px] font-semibold mb-2'>20+</div>
                                <div className='text-[22px] font-light text-[#282930]'>Powerful Business Management Tools</div>
                            </div>
                        </div>

                        <div className='h-full xl:h-[495px] w-full bg-[#142F32] rounded-[25px] px-8 py-20 pr-14 flex items-end col-span-12 sm:col-span-6 xl:col-span-3'>
                            <div>
                                <div className='mb-6'>
                                    <svg width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_373_6744)">
                                            <path d="M23.6613 21.4312L35.2987 14.061C35.38 14.0003 35.494 14.0124 35.5632 14.0852L36.6862 15.2745C36.7554 15.3473 36.7594 15.4646 36.6943 15.5415L27.8768 25.7272C26.6235 27.0661 25.2848 27.3291 24.2065 26.9812C23.6694 26.8072 23.2015 26.4877 22.8434 26.071C22.4854 25.6584 22.2371 25.1528 22.1354 24.6107C21.936 23.5307 22.3348 22.3212 23.6532 21.4353L23.6613 21.4312ZM7.8654 42.9474C6.62435 41.7864 5.50537 40.5001 4.52474 39.1126C3.55225 37.7373 2.7181 36.2567 2.03857 34.6993C1.37533 33.1703 0.86263 31.5603 0.512695 29.8856C0.179036 28.2595 0 26.5767 0 24.8534C0 21.4879 0.675456 18.2801 1.89209 15.3514C3.16162 12.3094 5.01709 9.57084 7.32422 7.28128C9.62728 4.99172 12.382 3.14309 15.4419 1.88504C18.3879 0.671496 21.6146 0 25 0C28.3773 0 31.5959 0.671496 34.5337 1.88504C37.5936 3.14713 40.3442 4.99981 42.6514 7.29341C44.9626 9.59106 46.8262 12.3337 48.0957 15.3716C49.3205 18.3003 50 21.504 50 24.8534C50 26.4917 49.8372 28.0936 49.528 29.6469C49.2106 31.2407 48.7345 32.7819 48.1201 34.2584C47.4935 35.7592 46.7244 37.1912 45.8252 38.5261C44.9178 39.8771 43.8802 41.1352 42.7327 42.2881C42.6554 42.3649 42.5252 42.3649 42.4479 42.2881L41.1987 41.0502C41.1743 41.0421 41.1499 41.026 41.1296 41.0057L37.6465 37.5431C37.5692 37.4662 37.5692 37.3368 37.6465 37.2599L39.4735 35.4436C39.5508 35.3668 39.681 35.3668 39.7583 35.4436L42.4479 38.1175C43.0176 37.3813 43.5425 36.6127 44.0145 35.8118C44.5231 34.9542 44.9707 34.0562 45.3573 33.1298C45.8781 31.8758 46.2891 30.5611 46.5658 29.202C46.8262 27.9399 46.9727 26.6333 47.0011 25.3024H43.2943C43.1844 25.3024 43.0908 25.2135 43.0908 25.1002V22.5315C43.0908 22.4223 43.1803 22.3293 43.2943 22.3293H46.8587C46.582 19.9628 45.9188 17.7056 44.9382 15.6224C43.925 13.4744 42.57 11.5166 40.9424 9.8095L38.5579 12.18C38.4806 12.2568 38.3504 12.2568 38.2731 12.18L36.4461 10.3637C36.3688 10.2868 36.3688 10.1574 36.4461 10.0805L38.7451 7.79501C36.9385 6.35089 34.8999 5.18184 32.6945 4.35663C30.5583 3.55974 28.2674 3.08241 25.8789 2.98937V6.23763C25.8789 6.34685 25.7894 6.43989 25.6755 6.43989H23.0876C22.9777 6.43989 22.8841 6.35089 22.8841 6.23763V3.07027C20.5119 3.29276 18.2454 3.89548 16.154 4.80564C13.9933 5.74817 12.0158 7.02643 10.2865 8.56764L12.675 10.9421C12.7523 11.019 12.7523 11.1484 12.675 11.2253L10.848 13.0416C10.7707 13.1184 10.6405 13.1184 10.5632 13.0416L8.20312 10.6954C6.68538 12.4753 5.44434 14.5019 4.55729 16.7065C3.7028 18.8504 3.16976 21.1521 3.02734 23.5549H6.70166C6.81152 23.5549 6.90511 23.6439 6.90511 23.7572V26.3299C6.90511 26.4391 6.81559 26.5322 6.70166 26.5322H3.05176C3.14128 27.7214 3.32845 28.8784 3.60107 30.0029C3.89404 31.2205 4.29281 32.3976 4.78516 33.5303C5.2124 34.5133 5.70882 35.4558 6.26628 36.3538C6.79118 37.1992 7.37305 38.0083 8.00781 38.7688L10.9538 35.8401C11.0311 35.7632 11.1613 35.7632 11.2386 35.8401L13.0656 37.6563C13.1429 37.7332 13.1429 37.8627 13.0656 37.9395C11.381 39.6142 9.77376 41.2201 8.14616 42.9393C8.07292 43.0202 7.94678 43.0243 7.8654 42.9474Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_373_6744">
                                                <rect width="50" height="43" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>


                                <div className='text-[22px] text-white'>
                                    Achieve Optimal Efficiency and Boost Productivity
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
