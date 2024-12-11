import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between gap-4 my-2 relative z-10'>
        <Image src='/assets/logo.svg' alt='logo' width={105} height={92} />
        <div className='flex items-center gap-[87px]'>
            <ul className='flex items-center gap-6 text-white font-poppins text-[18px] font-medium leading-[27px]'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>About</Link></li>
                <li><Link href='/'>Contact</Link></li>
            </ul>
            <button className='bg-[#FDF5EE] border border-[#FEFEFE3B] w-[213px] h-[60px] rounded-[60px] font-inter text-[#A67C52] text-[18px] font-bold leading-[21.78px] tracking-[-0.03em]'>Book Appointment</button>
        </div>
    </div>
  )
}

export default Navbar