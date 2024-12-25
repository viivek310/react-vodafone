import React, { useState } from 'react'
import NavbarLink from './NavbarLink'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'
import vodafone from "../assets/svgs/vodafone.svg"



function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <header>
            <nav className='flex px-5 sm:px-14 xl:px-28  justify-between items-center py-[18px] bg-[#F8FAFB] lg:flex-nowrap flex-wrap'>
                <div>
                    <Link to={"/"}>
                        <img className='h-[75px] aspect-square object-cover' src={vodafone} alt="vodafone logo" />
                    </Link>
                </div>

                <ul className={`flex gap-12 xl:gap-20  order-1 lg:order-none w-full lg:w-auto  flex-col lg:flex-row items-center  lg:h-auto   ${!isOpen&&"pt-0 h-0 scale-y-0"} lg:scale-y-100  transition-all duration-300 ease-out origin-top`}>
                        <NavbarLink link={"/"} text={"Solutions"} />
                    
                  
                        <NavbarLink link={"/"} text={"Industries"} />
                    
                  
                        <NavbarLink link={"/"} text={"Pricing"} />
                    
                  
                        <NavbarLink link={"/"} text={"Learn"} />
                </ul>

                <div className='flex gap-5'>
                    <button className='text-lg font-semibold bg-[#142F32] text-white py-3 px-8 rounded-full hover:bg-[#225358] transition-colors duration-300 ease-linear'>Login</button>
                    <div className='block lg:hidden'>
                        <Hamburger toggled={isOpen} toggle={setOpen} rounded  />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
