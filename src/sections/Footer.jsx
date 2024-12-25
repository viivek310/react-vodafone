import React from 'react'
import twitter from "../assets/svgs/twitter.svg"
import fb from "../assets/svgs/fb.svg"
import ig from "../assets/svgs/ig.svg"
import linkedin from "../assets/svgs/linkedin.svg"
import yt from "../assets/svgs/yt.svg"
import vodafone from "../assets/svgs/vodafone.svg"


function Footer() {
    return (
        <footer className='bg-black text-white px-8 sm:px-14 md:px-24 2xl:px-28 pt-14 pb-10'>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] gap-5 gap-y-14'>
                <div className='space-y-5'>
                    <div className='text-[22px] font-medium'>Features</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Scheduling</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Dispatching</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Estimates</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Price Book</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Reporting</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Quick Books</div>
                </div>

                <div className='space-y-5'>
                    <div className='text-[22px] font-medium'>Industries</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>HVAC Software</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Plumbing Software</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Garage Door Software</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Electrical Contractor Software</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Electrical Contractor Software</div>
                </div>

                <div className='space-y-5'>
                    <div className='text-[22px] font-medium'>Resources</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Pricing</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Field Service Management</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Working in the Trades</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Mastermind</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Integrations</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>News & Press</div>
                </div>

                <div className='space-y-5'>
                    <div className='text-[22px] font-medium'>Company</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>About</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Careers</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Leadership</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Partners</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Testimonials and Reviews</div>
                    <div className='text-lg text-[#828282] cursor-pointer hover:underline hover:text-[#E3FFCC] w-fit transition-all duration-300'>Contact Us</div>
                </div>

                <div className='col'>
                    <div className='mb-5'>
                        <img src={vodafone} alt="" />
                    </div>

                    <div className='text-[28px] font-bold mb-5'>Get in Touch</div>
                    <div className='text-[22px] font-bold text-[#E3FFCC] mb-5'>1-570-892-4850</div>
                    <div className='text-lg font-medium text-[#E3FFCC] mb-14'>support@vodafone.com</div>

                    <div className='text-[28px] font-bold mb-5'>Follow our Socials</div>
                    <div className='flex gap-4 flex-wrap sm:flex-nowrap'>
                        <div className='h-[60px] aspect-square bg-[#1E2226] grid place-items-center rounded-md hover:bg-[#0B363C] cursor-pointer'>
                            <img src={twitter} alt="twitter logo" />
                        </div>
                        <div className='h-[60px] aspect-square bg-[#1E2226] grid place-items-center rounded-md hover:bg-[#0B363C] cursor-pointer'>
                            <img src={fb} alt="facebook logo" />
                        </div>
                        <div className='h-[60px] aspect-square bg-[#1E2226] grid place-items-center rounded-md hover:bg-[#0B363C] cursor-pointer'>
                            <img src={ig} alt="instagram logo" />
                        </div>

                        <div className='h-[60px] aspect-square bg-[#1E2226] grid place-items-center rounded-md hover:bg-[#0B363C] cursor-pointer'>
                            <img src={linkedin} alt="linkedin logo" />
                        </div>

                        <div className='h-[60px] aspect-square bg-[#1E2226] grid place-items-center rounded-md hover:bg-[#0B363C] cursor-pointer'>
                            <img src={yt} alt="youtube logo" />
                        </div>

                    </div>

                </div>
            </div>


        </footer>
    )
}

export default Footer
