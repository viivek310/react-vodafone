import React from 'react'
import img from "../assets/images/statistics.png"

function Tools() {
    return (
        <section className='py-16 2xl:py-24 px-5 sm:px-16 2xl:px-28'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center'>
                <div className=' sm:py-16  sm:px-14 bg-[#F8FAFB] w-fit rounded-[40px] lg:mr-8 grid place-items-center h-fit'>
                    <img src={img} alt="" />
                </div>
                <div className='space-y-8'>
                    <h2 className='text-5xl xl:text-[52px] font-semibold my-4'>Powerful Business Management Tools</h2>
                    <div className='text-[22px] text-[#282930] mb-11'>Get your team the tools they need to get the job done</div>

                    <div>
                        <div className='text-[22px] font-semibold mb-2'>1. Drive Sales</div>
                        <div className='text-lg text-[#282930]'>Maximize revenue with smart tools that streamline sales processes, enhance customer engagement, and track performance effortlessly.</div>
                    </div>

                    <div>
                        <div className='text-[22px] font-semibold mb-2'>2. Complete Jobs</div>
                        <div className='text-lg text-[#282930]'>Manage and track job progress from start to finish with tools that optimize task scheduling, staff coordination, and job completion, ensuring every project is delivered on time.</div>
                    </div>

                    <div>
                        <div className='text-[22px] font-semibold mb-2'>3. Manage Money</div>
                        <div className='text-lg text-[#282930]'>Take control of your finances with tools that simplify invoicing, expense tracking, and financial reporting, providing real-time insights into your business's cash flow and profitability.</div>
                    </div>

                    <div>
                        <div className='text-[22px] font-semibold mb-2'>4. Business Solutions</div>
                        <div className='text-lg text-[#282930]'>Tailored solutions designed to meet your unique business needs, from automating workflows to optimizing customer service, helping your business thrive in a competitive market.</div>
                    </div>

                    <div>
                        <div className='text-[22px] font-semibold mb-2'>5. Know Your Business</div>
                        <div className='text-lg text-[#282930]'>Gain valuable insights into your operations with detailed analytics and reporting tools that help you understand performance trends, customer behaviors, and opportunities for growth.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools
