import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <> 
        <div className='bg-[#FFF5EB] py-10 md:py-16 px-4 md:px-6 lg:px-8'>
            <div className='max-w-[1007px] w-full mx-auto'>
                <h4 className='py-2 text-center text-[#A67C52] text-[15px] leading-[18.15px] font-semibold font-inter tracking-[0.05em]'>WHY CHOOSE US</h4>
                <h1 className='text-center text-[#282828] text-[32px] leading-[45px] md:text-[72px] md:leading-[73px] font-inter font-extrabold'>Why Choose Gleam <br /> Hub?</h1>
                <p className='mt-4 text-[#575757DE] text-[14px] md:text-[16px] font-poppins font-normal leading-[26.05px] max-w-[702px] text-center mx-auto'>We're not just another hair care service. At Gleam Hub Stellenbosch, we offer a personalised, supportive experience that prioritises results and education.</p>
                <div className='mt-8 md:mt-[62px] grid grid-cols-1 sm:grid-cols-2 md:flex items-center gap-9'>
                    <div className='md:max-w-[295px] text-center'>
                        <h2 className='mb-3 text-[#3C3C3C] text-[18px] md:text-[20px] leading-[28px] font-bold font-manrope'>Education and Empowerment</h2>
                        <p className='text-[#575757E3] text-[14px] font-normal font-manrope leading-[25px]'>Through our hair care coaching, we teach you everything from how to maintain healthy natural hair</p>
                    </div>
                    <div className='bg-[#94949445] w-[1px] h-[59px] md:block hidden'></div>
                    <div className='md:max-w-[295px] text-center'>
                        <h2 className='mb-3 text-[#3C3C3C] text-[18px] md:text-[20px] leading-[28px] font-bold font-manrope'>Certified Expertise</h2>
                        <p className='text-[#575757E3] text-[14px] font-normal font-manrope leading-[25px]'>From scalp treatments to hair growth coaching, our certified specialist brings years of knowledge and experience in hair care.</p>
                    </div>
                    <div className='bg-[#94949445] w-[1px] h-[59px] md:block hidden'></div>
                    <div className='md:max-w-[273px] text-center'>
                        <h2 className='mb-3 text-[#3C3C3C] text-[18px] md:text-[20px] leading-[28px] font-bold font-manrope'>Holistic Approach</h2>
                        <p className='text-[#575757E3] text-[14px] font-normal font-manrope leading-[25px]'>We tackle hair and scalp issues at the root (literally), ensuring sustainable results for natural hair growth and long-term health.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-[55px] overflow-hidden px-4'>
            <div className='bg-[#B2875C] max-w-[1240px] w-full mx-auto pl-4 sm:pl-10 pr-4 md:pr-0 lg:pl-[80px] pt-10 md:py-[80px] rounded-[17px] relative'>
                <Image src='/assets/curly-hair.svg' alt='curly-hair' width={401} height={487} className='md:block hidden absolute -right-10 bottom-0 z-20' />
                <Image src='/assets/Vector 47.svg' alt='Vector' width={214} height={240} className='md:block hidden absolute bottom-3 left-3' />
                <div className='relative h-full'>
                    <div className='relative z-40 flex items-end md:items-start flex-col gap-5'>
                       <div>
                            <h1 className='mb-7 text-white text-[32px] md:text-[48px] md:leading-[57px] tracking-[-0.03em] font-inter font-bold'>Success Stories from <br /> Real Women</h1>
                            <div className='flex items-center flex-wrap gap-8 sm:gap-0'>
                                <div className='md:w-[378px]'>
                                    <h2 className='text-white text-[20px] md:leading-[32px] tracking-[-0.03em] italic font-poppins font-medium'>"My scalp has never felt this healthy. Thanks to Gleam Hub Stellenbosch, I've seen real growth in just months!"</h2>
                                    <h3 className='text-white text-[20px] leading-[32px] font-bold font-poppins tracking-[-0.03em]'>Sarah K.</h3>
                                </div>
                                <div className='md:block hidden h-[85px] w-[1px] bg-[#FFFFFF5C] mx-[33px]'></div>
                                <div className='md:w-[378px]'>
                                    <h2 className='text-white text-[20px] leading-[32px] tracking-[-0.03em] italic font-poppins font-medium'>"I struggled with thinning edges for years, but their Restore & Thrive package gave me my confidence back."</h2>
                                    <h3 className='text-white text-[20px] leading-[32px] font-bold font-poppins tracking-[-0.03em]'>Thandi M.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='md:hidden block'>
                            <Image src='/assets/curly-hair.svg' alt='curly-hair' width={401} height={487} className='' />
                        </div>
                    </div>
                    <Image src='/assets/Vector 46.svg' alt='Vector' width={317} height={432} className=' absolute bottom-4 sm:bottom-0 sm:right-16' />
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs