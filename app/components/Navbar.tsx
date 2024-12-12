'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='flex items-center justify-between gap-4 my-2 relative z-10'>
      <Image src='/assets/logo.svg' alt='logo' width={105} height={92} />
      <div className='hidden md:flex items-center gap-[87px]'>
        <ul className='flex items-center gap-6 text-white font-poppins text-[18px] font-medium leading-[27px]'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/'>About</Link></li>
          <li><Link href='/'>Contact</Link></li>
        </ul>
        <button className='bg-[#FDF5EE] border border-[#FEFEFE3B] w-[213px] h-[60px] rounded-[60px] font-inter text-[#A67C52] text-[18px] font-bold leading-[21.78px] tracking-[-0.03em]'>Book Appointment</button>
      </div>
      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className='flex items-center justify-center p-2 rounded-md text-white relative z-50'
        >
          {isMenuOpen ? (
            <X className='block h-6 w-6 text-white' aria-hidden='true' />
          ) : (
            <Menu className='block h-6 w-6 text-white ' aria-hidden='true' />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className='md:hidden '>
          <div className="fixed top-0 left-0 w-full h-screen z-50 bg-gray-950 flex flex-col items-center justify-center ">
            <Link href='/' className='text-white block px-3 py-2 rounded-md text-base font-medium'>
              Home
            </Link>
            <Link href='/' className='text-white block px-3 py-2 rounded-md text-base font-medium'>
              About
            </Link>
            <Link href='/' className='text-white block px-3 py-2 rounded-md text-base font-medium'>
              Contact
            </Link>
            <button className='bg-[#FDF5EE] border border-[#FEFEFE3B] w-[150px] h-[40px] rounded-[60px] font-inter text-[#A67C52] text-[14px] font-bold leading-[21.78px] tracking-[-0.03em]'>Book Appointment</button>

          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar