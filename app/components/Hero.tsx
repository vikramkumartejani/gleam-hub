import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#FDF5EE] mb-7 rounded-lg px-[51px] py-8 flex items-center justify-between gap-5'>
        <div>
            <h4 className='mb-3 text-[#282828] text-[20px] leading-[24px] font-inter font-normal tracking-[0.07em]'>Your AMAZING</h4>
            <h1 className='text-[#282828] text-[96px] font-inter leading-[85px] font-extrabold tracking-[-0.03em]'>Hair Deserves <br/> Expert Care</h1>
            <p className='mt-6 max-w-[577px] text-[#282828] text-[15.79px] leading-[26px] font-normal font-poppins'>Professional hair coaching for restoration, growth, and lasting confidence Your Journey to Healthy Hair Starts Here.</p>
            <button className='mt-[17px] bg-[#B2875C] border border-[#FEFEFE3B] w-[221px] h-[60px] uppercase rounded-[60px] font-inter text-[#FFEFDE] text-[17px] font-medium leading-[21.78px] tracking-[-0.03em]'>Book Appointment</button>
        </div>
        <Image src='/assets/hero.svg' alt='hero' width={481} height={609} />
    </div>
  )
}

export default Hero