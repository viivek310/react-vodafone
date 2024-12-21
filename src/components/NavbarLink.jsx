import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLink({text}) {

    return (
        <li className='flex items-center text-[22px] gap-2'>
            <span className='text-black'>{text}</span>
            <span className='mt-2'><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.79297 0.828125L6.29297 5.32812L10.793 0.828125L12.5859 1.70703L6.29297 8L0 1.70703L1.79297 0.828125Z" fill="black" />
            </svg>
            </span>
        </li>
    )
}

export default NavbarLink
