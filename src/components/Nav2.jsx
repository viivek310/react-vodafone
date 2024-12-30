import React, { useState } from 'react'
import vodafone from "../assets/svgs/vodafone.svg"
import Hamburger from 'hamburger-react'

function Nav2() {
  const [isOpen, setOpen] = useState(false)
  return (
    <header>
      <nav className={`py-4 mb-[51px] flex items-center px-12 xl:px-28 2xl:px-[350px] border-b border[#BEBEBE] flex-wrap md:flex-nowrap`}>
        <div className='mr-3 lg:mr-5'>
          <img src={vodafone} alt="" />
        </div>
        <ul className={`flex text-xl order-1 md:order-none w-full md:w-auto flex-col md:flex-row items-center gap-y-3 md:gap-y-0 ${!isOpen&&"h-0 scale-y-0"} md:h-auto md:scale-y-100`}>
          <li className='px-2 lg:px-3 xl:px-5 cursor-pointer'>Products</li>
          <li className='px-2 lg:px-3 xl:px-5 cursor-pointer'>Solutions</li>
          <li className='px-2 lg:px-3 xl:px-5 cursor-pointer'>News & Insights</li>
          <li className='px-2 lg:px-3 xl:px-5 cursor-pointer'>About</li>
          <li className='px-2 lg:px-3 xl:px-5 cursor-pointer'>Contact us</li>
        </ul>
        <div className='ml-auto cursor-pointer'>
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.23633 28.3155C6.23633 21.8321 10.608 16.5771 15.9997 16.5771C21.3913 16.5771 25.763 21.8321 25.763 28.3155M21.5113 10.5271C21.5106 11.895 21.0013 13.2137 20.0825 14.2269C19.1636 15.2401 17.9009 15.8756 16.5396 16.0096C15.1784 16.1437 13.8159 15.7669 12.7171 14.9524C11.6182 14.1379 10.8614 12.9439 10.5938 11.6025C10.4348 10.8031 10.455 9.97844 10.653 9.18783C10.851 8.39723 11.2218 7.66037 11.7389 7.03034C12.2559 6.4003 12.9062 5.89278 13.643 5.54431C14.3798 5.19584 15.1846 5.01511 15.9997 5.01514H21.5113V10.5271Z" stroke="#0D0D0D" />
          </svg>

        </div>

        <div className='md:hidden'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </header>
  )
}

export default Nav2
