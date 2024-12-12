import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <div className='pt-[46px]'>
        <div className='pb-10 md:pb-[84px] px-4 md:px-6 lg:px-8 text-center'>
            <h3 className='mb-2 text-[#A67C52] text-[15px] font-inter font-semibold leading-[18.15px] tracking-[0.05em]'>OUR SERVICES</h3>
            <h1 className='text-[#282828] text-[35px] md:text-[72px] md:leading-[73px] font-extrabold font-inter tracking-[-0.04em]'>Your Questions, Answered</h1>
            <div className='mt-8 md:mt-10 max-w-[824px] mx-auto w-full'>
                <h3 className='text-[#101010] text-[16px] md:text-[18px] leading-[21.6px] font-inter font-bold'>Are your services suitable for children?</h3>
                <p className='text-[#515151] text-[16px] md:text-[18px] leading-[21.6px] font-inter font-normal mt-3 md:mt-4'>Absolutely. We offer specialised hair care for kids to ensure their hair is nourished and protected.</p>
                <div className='w-full sm:w-[416px] mx-auto bg-[#D5D5D5] h-[1px] my-5 md:my-7'></div>
                <h3 className='text-[#101010] text-[16px] md:text-[18px] leading-[21.6px] font-inter font-bold'>How soon can I see results?</h3>
                <p className='text-[#515151] text-[16px] md:text-[18px] leading-[21.6px] font-inter font-normal mt-3 md:mt-4'>Most clients notice improvements in scalp and hair health within weeks of following their personalised plan.</p>
                <div className='w-full sm:w-[416px] mx-auto bg-[#D5D5D5] h-[1px] my-5 md:my-7'></div>
                <h3 className='text-[#101010] text-[16px] md:text-[18px] leading-[21.6px] font-inter font-bold'>What products do you recommend?</h3>
                <p className='text-[#515151] text-[16px] md:text-[18px] leading-[21.6px] font-inter font-normal mt-3 md:mt-4'>We provide recommendations for the best natural hair care products tailoured to your hair type and needs.</p>
            </div> 
        </div>


        <div className='bg-[#FFF7EF] flex lg:items-center lg:flex-row flex-col justify-between lg:pl-8 gap-4'>
            <div className='lg:max-w-[615px] max-w-full py-6 px-4'>
                <h1 className='text-[#282828] leading-[45px] text-[35px] lg:text-[64px] md:leading-[73px] font-inter font-extrabold tracking-[-0.03em]'>Book Your Hair Assessment Today!</h1>
                <h4 className='pt-4 md:pt-2.5 pb-4 md:pb-7 text-[#A67C52] text-[17px] md:text-[20px] md:leading-[28px] font-inter font-extrabold tracking-[-0.06em]'>Your Journey to Healthy, Confident Natural Hair Starts Here.</h4>
                <p className='text-[#515151] text-[16px] md:text-[18px] leading-[21.6px] font-normal font-inter md:max-w-[577px]'>Don't wait to transform your hair care routine. Schedule your personalised consultation with Gleam Hub and take the first step toward achieving the hair you've always dreamed of!</p>
                <button className='mt-7 bg-[#B2875C] border-[0.7px] border-[#FEFEFE3B] w-[190px] h-[45px] md:h-[56px] uppercase rounded-[40px] font-inter text-white text-[14px] md:text-[12px] font-medium tracking-[-0.03em]'>BOOK CONSULTATION</button>
            </div>
            <Image src='/assets/book-your-hair.svg' alt='book-your-hair' width={626} height={601} className='w-full lg:w-[550px] xl:w-[626px]' />
        </div>
    </div>
  )
}

export default OurServices