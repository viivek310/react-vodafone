import React, { useState } from 'react'
import NavbarLink from './NavbarLink'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'



function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <header>
            <nav className='flex px-5 sm:px-14 xl:px-28  justify-between items-center py-[18px] bg-[#F8FAFB] lg:flex-nowrap flex-wrap'>
                <div>
                    <Link to={"/"}>
                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_380_148)">
                            <path d="M37.5012 75.0024C58.2125 75.0024 75.0024 58.2125 75.0024 37.5012C75.0024 16.7899 58.2125 0 37.5012 0C16.7899 0 0 16.7899 0 37.5012C0 58.2125 16.7899 75.0024 37.5012 75.0024Z" fill="#E60000" />
                            <path d="M37.7943 58.2826C27.5549 58.3163 16.8993 49.5778 16.8536 35.5428C16.8248 26.2607 21.8302 17.3178 28.2308 12.0261C34.4846 6.85705 43.0258 3.54013 50.783 3.51367C51.7812 3.51367 52.8251 3.59305 53.4649 3.80953C46.6819 5.21663 41.2844 11.5282 41.3084 18.6888C41.3078 18.8917 41.3231 19.0944 41.3541 19.2949C52.7024 22.0586 57.8546 28.9162 57.8858 38.3811C57.9171 47.846 50.4366 58.2393 37.7943 58.2826Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_380_148">
                                <rect width="75" height="75" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </Link>
                </div>

                <ul className={`flex gap-12 xl:gap-20  order-1 lg:order-none w-full lg:w-auto  flex-col lg:flex-row items-center pt-0  lg:h-auto   ${!isOpen&&"pt-5 h-0 scale-y-0"} lg:scale-y-100  transition-all duration-300 ease-out origin-top`}>
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
