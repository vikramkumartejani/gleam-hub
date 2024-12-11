import Image from 'next/image'
import React from 'react'

const SpeciallyCustomizedForYou = () => {
  return (
    <div className='py-[107px] w-full relative h-[400px]'>
        <Image src='/assets/Vector 40.svg' alt='Vector' width={110} height={90} className=' absolute top-12 left-0' />
        <div className='relative z-30 text-center'>
            <h4 className='text-[#A67C52] text-[15px] leading-[18px] font-inter font-semibold tracking-[0.05em] mb-2'>OUR SERVICES</h4>
            <h1 className='text-[#282828] text-[72px] leading-[73px] font-inter font-extrabold tracking-[-0.03em] max-w-[702px] mx-auto'>Specially <span className='text-[#A67C52]'>Customized</span> for You</h1>
            <p className='text-[#282828] text-[16px] leading-[26px] font-normal font-poppins max-w-[650px] mx-auto mt-4'>At Gleam Hub, we specialise in hair care that doesn't just enhance your look—it boosts your confidence and transforms your relationship with your hair. </p>
        </div>
    </div>
  )
}

export default SpeciallyCustomizedForYou