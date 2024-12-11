import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#101010] text-white py-[60px] px-4 md:px-6 lg:px-8'>
        <div className='w-full max-w-[1240px] mx-auto '>
            <div className='flex items-center justify-between gap-5 pb-10 border-b border-[#757B8A]'>
                <Image src='/assets/logo.svg' alt='logo' width={105} height={92} />
                <button className='bg-[#B2875C] border border-[#FEFEFE3B] w-[245px] h-[69px] uppercase rounded-[60px] font-inter text-white text-[17px] font-bold'>BOOK CONSULTATION</button>
            </div>

            <div className='pt-10 flex items-start gap-[100px]'>
                <div className='flex flex-col gap-[30px] w-[289px]'>
                    <h4 className='text-[24px] leading-[28.8px] font-inter font-bold'>Subscribe to our <br/> newsletter</h4>
                    <div className='flex items-end border-b border-[#757B8A] w-full justify-between'>
                        <input type="text" placeholder='Email address' className='w-full bg-transparent outline-none py-[13px] placeholder:text-[#757B8A] text-white text-[16px] font-medium font-inter' />
                        <button className='bg-[#A67C52] min-w-[50px] h-[50px] rounded-t-[8px] -mb-[1px] flex items-center justify-center'><Image src='/assets/icons/arrow.svg' alt='arrow' width={20} height={20} /></button>
                    </div>
                </div>

                <div className='flex items-start justify-between max-w-[620px] w-full flex-wrap'>
                    <div>
                        <h3 className='text-[18px] leading-[21.6px] font-bold font-inter mb-5'>Services</h3>
                        <ul className='flex items-start gap-4 flex-col text-[#D6D6D6] text-[16px] font-normal leading-[24px] font-inter'>
                            <li><Link href='/'>Scalp Revival</Link></li>
                            <li><Link href='/'>Crown Confidence</Link></li>
                            <li><Link href='/'>Restore & Thrive</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-[18px] leading-[21.6px] font-bold font-inter mb-5'>About</h3>
                        <ul className='flex items-start gap-4 flex-col text-[#D6D6D6] text-[16px] font-normal leading-[24px] font-inter'>
                            <li><Link href='/'>Our Story</Link></li>
                            <li><Link href='/'>Benefits</Link></li>
                            <li><Link href='/'>Team</Link></li>
                            <li><Link href='/'>Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-[18px] leading-[21.6px] font-bold font-inter mb-5'>Help</h3>
                        <ul className='flex items-start gap-4 flex-col text-[#D6D6D6] text-[16px] font-normal leading-[24px] font-inter'>
                            <li><Link href='/'>FAQs</Link></li>
                            <li><Link href='/'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-[55px]'>
                    <Link href='/terms-conditions' className='text-[#D6D6D6] text-[16px] font-medium leading-[25px] font-inter'>Terms & Conditions</Link>
                    <Link href='/privacy-policy' className='text-[#D6D6D6] text-[16px] font-medium leading-[25px] font-inter'>Privacy Policy</Link>
                </div>
                {/* Social Icons */}
                <div className='flex items-center gap-10 mt-[70px]'>
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