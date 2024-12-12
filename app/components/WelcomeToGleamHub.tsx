import Image from 'next/image'
import React from 'react'

const WelcomeToGleamHub = () => {
  return (
    <>
        {/* Welcome to Gleam Hub */}
        <div className='w-full relative px-4 md:px-6 lg:px-8 pt-[57px] pb-[30px]'>
            <Image src='/assets/hub-shadow-two.svg' alt='shadow' width={100} height={200} className='absolute top-0 right-0 transform translate-y-1/2 h-2/4' />
            <Image src='/assets/hub-shadow-one.svg' alt='hub' width={307} height={355} className='absolute top-14 left-0' />
            <div className='max-w-[1240px] relative z-20 w-full mx-auto flex lg:items-end lg:flex-row flex-col gap-10 md:gap-16'>
                <div className='relative flex items-center justify-center'>
                    <Image src='/assets/welcome-to-hub.svg' alt='welcome-to-hub' width={548} height={718} className='rounded-t-[270px] rounded-b-[17px]' />
                </div>
                <div className='max-w-full lg:max-w-[654px]'>
                    <h4 className='text-[#A67C52] text-[15px] leading-[18.15px] font-semibold font-inter tracking-[0.05em] uppercase mb-2'>Welcome to Gleam Hub</h4>
                    <h1 className='text-[#282828] text-[35px] md:text-[72px] leading-[45px] md:leading-[76px] font-inter font-extrabold tracking-[-0.04em] mb-4 md:mb-7'>The Home of <br /> Hair Excellence</h1>
                    <p className='lg:max-w-[559px] text-[#282828] text-[15px] md:text-[16px] md:leading-[26.05px] font-poppins font-normal'>At Gleam Hub, we specialise in hair care that doesn't just enhance your look—it boosts your confidence and transforms your relationship with your hair. Our expert-led approach combines personalised guidance and proven techniques to help you achieve and maintain healthy hair.</p>
                    <p className='mt-3.5 lg:max-w-[559px] text-[#282828] text-[15px] md:text-[16px] md:leading-[26.05px] font-poppins font-normal'>Tired of ineffective DIY routines, recurring scalp issues, or thinning hair? We're here to take the stress out of your journey. With services tailored to your unique hair, our hair care experts will guide you step by step toward the hair you've always wanted.</p>
                    <button className='mt-7 bg-[#B2875C] border border-[#FEFEFE3B] w-[220px] md:w-[240px] h-[50px] md:h-[68px] rounded-[60px] text-[#FFEFDE] text-[15px] md:text-[17px] font-inter font-medium tracking-[-0.03em] uppercase'>learn more about us</button>
                </div>
            </div>
        </div>

        {/* Are you facing */}
        <div className='bg-[#FFF5EB] w-full px-4 md:px-6 lg:px-8'>
            <div className='max-w-[1240px] mx-auto pt-10 pb-[60px] md:pt-[63px] md:pb-[112px] flex items-center justify-between lg:flex-row flex-col gap-10 lg:gap-5'>
                <div className='lg:max-w-[617px]'>
                    <h4 className='text-[#282828] text-[24px] md:text-[32px] tracking-[-0.06em] font-inter font-extrabold'>Are you facing</h4>
                    <h1 className='md:block hidden text-[#282828] text-[35px] md:text-[72px] leading-[45px] md:leading-[76px] font-inter font-extrabold tracking-[-0.06em]'>Hair Care <br /> Challenges?</h1>
                    <h1 className='md:hidden block text-[#282828] text-[35px] md:text-[72px] leading-[45px] md:leading-[76px] font-inter font-extrabold tracking-[-0.06em]'>Hair Care Challenges?</h1>
                    <div className='text-[#282828] mt-4'>
                        <h3 className='text-[15px] md:text-[16px] font-poppins font-normal leading-[26px]'>Many women struggle with:</h3>
                        <ul className='text-[15px] md:text-[16px] font-poppins font-normal leading-[26px] ml-4'>
                            <li className='list-disc ml-2'>Hair breakage despite trying countless products.</li>
                            <li className='list-disc ml-2'>Persistent scalp issues, including dryness and build-up.</li>
                            <li className='list-disc ml-2'>Thinning or hair loss, especially around edges.</li>
                            <li className='list-disc ml-2'>Overwhelming routines that don't fit into a busy lifestyle.</li>
                        </ul>
                        <p className='mt-2 text-[#282828] text-[15px] md:text-[16px] font-normal font-poppins'>These struggles don't have to define your journey. At Gleam Hub, we offer hair care and scalp treatments designed to resolve these challenges once and for all.</p>
                        <button className='mt-7 bg-[#B2875C] border border-[#FEFEFE3B] w-[220px] md:w-[240px] h-[50px] md:h-[68px] rounded-[60px] text-[#FFEFDE] text-[15px] md:text-[17px] font-inter font-medium tracking-[-0.03em] uppercase'>learn more about us</button>
                    </div>
                </div>
                <div className='relative '>  
                    <Image src='/assets/are-you-facing.svg' alt='are-you-facing' width={627} height={522} />
                    <div className='flex items-center right-0 lg:right-0  md:-right-10 xl:-right-10 absolute -bottom-10'>
                        <Image src='/assets/Rectangle 39940.svg' alt='Rectangle 39940' width={149} height={133} className='w-[100px] md:w-[149px]' />
                        <Image src='/assets/Rectangle 39941.svg' alt='Rectangle 3994' width={149} height={133} className='w-[100px] md:w-[149px]' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WelcomeToGleamHub