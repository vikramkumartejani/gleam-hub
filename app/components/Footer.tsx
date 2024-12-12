import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#101010] text-white py-8 md:py-[60px] px-4 md:px-6 lg:px-8'>
        <div className='w-full max-w-[1240px] mx-auto '>
            <div className='flex items-center justify-center md:justify-between gap-5 md:pb-10 md:border-b border-[#757B8A]'>
                <Image src='/assets/logo.svg' alt='logo' width={105} height={92} />
                <button className='md:block hidden bg-[#B2875C] border border-[#FEFEFE3B] w-[245px] h-[69px] uppercase rounded-[60px] font-inter text-white text-[17px] font-bold'>BOOK CONSULTATION</button>
            </div>

            <div className='pt-10 flex items-start md:flex-row flex-col gap-10 lg:gap-[100px]'>
                <div className='flex flex-col gap-[30px] w-full md:w-[289px]'>
                    <h4 className='text-[24px] leading-[28.8px] font-inter font-bold'>Subscribe to our <br/> newsletter</h4>
                    <div className='flex items-end border-b border-[#757B8A] w-full justify-between'>
                        <input type="text" placeholder='Email address' className='w-full bg-transparent outline-none py-2 md:py-[13px] placeholder:text-[#757B8A] text-white text-[14px] md:text-[16px] font-medium font-inter' />
                        <button className='bg-[#A67C52] min-w-[40px] md:min-w-[50px] h-[40px] md:h-[50px] rounded-t-[8px] -mb-[1px] flex items-center justify-center'><Image src='/assets/icons/arrow.svg' alt='arrow' width={20} height={20} /></button>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:flex md:items-start gap-4 md:justify-between max-w-full md:max-w-[400px] lg:max-w-[620px] w-full md:flex-wrap'>
                    <div>
                        <h3 className='text-[16px] md:text-[18px] leading-[21.6px] font-bold font-inter mb-4 md:mb-5'>Services</h3>
                        <ul className='flex items-start gap-3 md:gap-4 flex-col text-[#D6D6D6] text-[14px] md:text-[16px] font-normal leading-[24px] font-inter'>
                            <li><Link href='/'>Scalp Revival</Link></li>
                            <li><Link href='/'>Crown Confidence</Link></li>
                            <li><Link href='/'>Restore & Thrive</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-[16px] md:text-[18px] leading-[21.6px] font-bold font-inter mb-4 md:mb-5'>About</h3>
                        <ul className='flex items-start gap-3 md:gap-4 flex-col text-[#D6D6D6] text-[14px] md:text-[16px] font-normal leading-[24px] font-inter'>
                            <li><Link href='/'>Our Story</Link></li>
                            <li><Link href='/'>Benefits</Link></li>
                            <li><Link href='/'>Team</Link></li>
                            <li><Link href='/'>Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-[16px] md:text-[18px] leading-[21.6px] font-bold font-inter mb-4 md:mb-5'>Help</h3>
                        <ul className='flex items-start gap-3 md:gap-4 flex-col text-[#D6D6D6] text-[14px] md:text-[16px] font-normal leading-[24px] font-inter'>
                            <li><Link href='/'>FAQs</Link></li>
                            <li><Link href='/'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='md:border-t-0 border-t border-[#FEFEFE3B] flex items-center justify-between md:flex-row flex-col-reverse gap-6 md:gap-4 mt-[30px] pt-[30px] md:pt-0 md:mt-[50px]'>
                <div className='flex items-center gap-[55px]'>
                    <Link href='/terms-conditions' className='text-[#D6D6D6] text-[16px] font-medium leading-[25px] font-inter'>Terms & Conditions</Link>
                    <Link href='/privacy-policy' className='text-[#D6D6D6] text-[16px] font-medium leading-[25px] font-inter'>Privacy Policy</Link>
                </div>
                <div className='flex items-center gap-10'>
                    <Link href=''><Image src='/assets/icons/facebook.svg' alt='facebook' width={10} height={19.84} /></Link>
                    <Link href=''><Image src='/assets/icons/x.svg' alt='x' width={22} height={17.88} /></Link>
                    <Link href=''><Image src='/assets/icons/instagram.svg' alt='instagram' width={22} height={22} /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer