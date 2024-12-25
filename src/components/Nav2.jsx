import React from 'react'
import vodafone from "../assets/svgs/vodafone.svg"

function Nav2() {
  return (
    <header>
      <nav className='py-4 mb-[51px] flex items-center px-[350px] border-b border[#BEBEBE]'>
        <div className='mr-5'>
          <img src={vodafone} alt="" />
        </div>
        <ul className='flex text-xl'>
          <li className='px-5 cursor-pointer'>Products</li>
          <li className='px-5 cursor-pointer'>Solutions</li>
          <li className='px-5 cursor-pointer'>News & Insights</li>
          <li className='px-5 cursor-pointer'>About</li>
          <li className='px-5 cursor-pointer'>Contact us</li>
        </ul>
        <div className='ml-auto cursor-pointer'>
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.23633 28.3155C6.23633 21.8321 10.608 16.5771 15.9997 16.5771C21.3913 16.5771 25.763 21.8321 25.763 28.3155M21.5113 10.5271C21.5106 11.895 21.0013 13.2137 20.0825 14.2269C19.1636 15.2401 17.9009 15.8756 16.5396 16.0096C15.1784 16.1437 13.8159 15.7669 12.7171 14.9524C11.6182 14.1379 10.8614 12.9439 10.5938 11.6025C10.4348 10.8031 10.455 9.97844 10.653 9.18783C10.851 8.39723 11.2218 7.66037 11.7389 7.03034C12.2559 6.4003 12.9062 5.89278 13.643 5.54431C14.3798 5.19584 15.1846 5.01511 15.9997 5.01514H21.5113V10.5271Z" stroke="#0D0D0D" />
          </svg>

        </div>
      </nav>
    </header>
  )
}

export default Nav2
