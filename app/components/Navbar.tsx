'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='flex items-center justify-between gap-4 my-2 relative z-50'>
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
          className='flex items-center justify-center p-2 rounded-md text-white'
        >
          {isMenuOpen ? (
            <X className='block h-6 w-6 text-white' aria-hidden='true' />
          ) : (
            <Menu className='block h-6 w-6 text-white ' aria-hidden='true' />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div ref={menuRef} className='fixed top-0 right-0 w-[60%] h-screen z-[99999999] bg-gray-950 flex flex-col items-center justify-center'>
          <button
            onClick={toggleMenu}
            className='absolute top-9 right-4 p-2 rounded-md text-white'
          >
            <X className='block h-6 w-6 text-white' aria-hidden='true' />
          </button>
          <Link href='/' className='text-white block px-3 py-2 rounded-md text-base font-medium'>
            Home
          </Link>
          <Link href='/' className='text-white block px-3 py-2 rounded-md text-base font-medium'>
            About
          </Link>
          <Link href='/' className='text-white block px-3 py-2 rounded-md text-base font-medium'>
            Contact
          </Link>
          <button className='mt-10 bg-[#FDF5EE] border border-[#FEFEFE3B] w-[170px] h-[40px] rounded-[60px] font-inter text-[#A67C52] text-[14px] font-bold leading-[21.78px] tracking-[-0.03em]'>Book Appointment</button>
        </div>
      )}
    </div>
  )
}

export default Navbar

