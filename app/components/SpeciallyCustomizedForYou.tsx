import Image from 'next/image'
import React from 'react'

const SpeciallyCustomizedForYou = () => {
  return (
    <div className='py-[107px] w-full relative'>
        <Image src='/assets/Vector 40.svg' alt='Vector' width={110} height={90} className=' absolute top-12 left-0' />
        <div className='relative z-30 text-center'>
            <h4 className='text-[#A67C52] text-[15px] leading-[18px] font-inter font-semibold tracking-[0.05em] mb-2'>OUR SERVICES</h4>
            <h1 className='text-[#282828] text-[72px] leading-[73px] font-inter font-extrabold tracking-[-0.03em] max-w-[702px] mx-auto'>Specially <span className='text-[#A67C52]'>Customized</span> for You</h1>
            <p className='text-[#282828] text-[16px] leading-[26px] font-normal font-poppins max-w-[650px] mx-auto mt-4'>At Gleam Hub, we specialise in hair care that doesn't just enhance your look—it boosts your confidence and transforms your relationship with your hair. </p>
            
            <div className='pt-[108px] pb-[51px] max-w-[1168px] mx-auto w-full flex items-center gap-3 justify-between'>
                <Image src='/assets/scalp-revival.svg' alt='scalp-revival' width={511} height={374} className='rounded-[87px]' />
                <div className='text-left max-w-[606px]'>
                    <h2 className='text-[#282828] text-[48px] leading-[73px] font-inter font-extrabold tracking-[-0.02em]'>Scalp Revival</h2>
                    <p className='text-[#282828] text-[16px] font-normal font-poppins leading-[26px]'>Your scalp is the foundation of your hair's health. Our scalp treatments service focuses on addressing dryness, itching, and product build-up and many more, to promote optimal conditions for natural hair growth.  </p>
                    <ul className='ml-6 text-[#282828] text-[16px] font-normal font-poppins leading-[26px]'>
                        <li className='list-disc'>Tailoured scalp care routines.</li>
                        <li className='list-disc'>Proven methods to restore and maintain scalp health.</li>
                        <li className='list-disc'>Practical advice for preventing recurring issues.</li>
                    </ul>
                    <h4 className='text-[#A67C52] text-[20px] leading-[45px] font-inter font-extrabold uppercase'>R700 first visit, R350 per follow-up visit</h4>
                </div>
            </div>

            <div className='bg-[#FFF7EF] w-full py-10'>
                <div className='flex items-center gap-3 justify-between max-w-[1168px] mx-auto w-full'>
                    <div className='text-left max-w-[606px]'>
                        <h2 className='text-[#282828] text-[48px] leading-[73px] font-inter font-extrabold tracking-[-0.02em]'>Crown Confidence</h2>
                        <p className='text-[#282828] text-[16px] font-normal font-poppins leading-[26px]'>Celebrate and care for your unique texture with the best hair care coaching for curls, coils, and kinks.</p>
                        <ul className='ml-6 text-[#282828] text-[16px] font-normal font-poppins leading-[26px]'>
                            <li className='list-disc'>Personalised routines for managing your texture effortlessly.</li>
                            <li className='list-disc'>Moisture retention techniques for healthier, shinier hair.</li>
                            <li className='list-disc'>Protective styling tutorials and tips to reduce damage and encourage growth.</li>
                        </ul>
                        <h4 className='text-[#A67C52] text-[20px] leading-[45px] font-inter font-extrabold uppercase'>R700 first visit, R350 per follow-up visit</h4>
                    </div>
                    <div className='relative'>
                        <Image src='/assets/crown-confidence.svg' alt='scalp-revival' width={511} height={374} className='rounded-[87px] relative z-20' />
                        <Image src='/assets/Vector 41.svg' alt='Vector' width={244} height={269} className=' absolute top-0 -right-20' />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SpeciallyCustomizedForYou