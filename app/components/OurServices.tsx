import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <div className='pt-[46px]'>
        <div className='pb-[84px]  px-4 md:px-6 lg:px-8 text-center'>
            <h3 className='mb-2 text-[#A67C52] text-[15px] font-inter font-semibold leading-[18.15px] tracking-[0.05em]'>OUR SERVICES</h3>
            <h1 className='text-[#282828] text-[72px] leading-[73px] font-extrabold font-inter tracking-[-0.04em]'>Your Questions, Answered</h1>
            <div className='mt-10 max-w-[824px] mx-auto w-full'>
                <h3 className='text-[#101010] text-[18px] leading-[21.6px] font-inter font-bold'>Are your services suitable for children?</h3>
                <p className='text-[#515151] text-[18px] leading-[21.6px] font-inter font-normal mt-4'>Absolutely. We offer specialised hair care for kids to ensure their hair is nourished and protected.</p>
                <div className='w-full sm:w-[416px] mx-auto bg-[#D5D5D5] h-[1px] my-7'></div>
                <h3 className='text-[#101010] text-[18px] leading-[21.6px] font-inter font-bold'>How soon can I see results?</h3>
                <p className='text-[#515151] text-[18px] leading-[21.6px] font-inter font-normal mt-4'>Most clients notice improvements in scalp and hair health within weeks of following their personalised plan.</p>
                <div className='w-full sm:w-[416px] mx-auto bg-[#D5D5D5] h-[1px] my-7'></div>
                <h3 className='text-[#101010] text-[18px] leading-[21.6px] font-inter font-bold'>What products do you recommend?</h3>
                <p className='text-[#515151] text-[18px] leading-[21.6px] font-inter font-normal mt-4'>We provide recommendations for the best natural hair care products tailoured to your hair type and needs.</p>
            </div> 
        </div>


        <div className='bg-[#FFF7EF] flex items-center justify-between pl-4 md:pl-6 lg:pl-8'>
            <div className='max-w-[615px]'>
                <h1 className='text-[#282828] text-[64px] leading-[73px] font-inter font-extrabold tracking-[-0.03em]'>Book Your Hair Assessment Today!</h1>
                <h4 className='pt-2.5 pb-7 text-[#A67C52] text-[20px] leading-[28px] font-inter font-extrabold tracking-[-0.06em]'>Your Journey to Healthy, Confident Natural Hair Starts Here.</h4>
                <p className='text-[#515151] text-[18px] leading-[21.6px] font-normal font-inter max-w-[577px]'>Don't wait to transform your hair care routine. Schedule your personalised consultation with Gleam Hub and take the first step toward achieving the hair you've always dreamed of!</p>
                <button className='mt-7 bg-[#B2875C] border-[0.7px] border-[#FEFEFE3B] w-[190px] h-[56px] uppercase rounded-[40px] font-inter text-white text-[12px] font-medium tracking-[-0.03em]'>BOOK CONSULTATION</button>
            </div>
            <Image src='/assets/book-your-hair.svg' alt='book-your-hair' width={626} height={601} />
        </div>
    </div>
  )
}

export default OurServices