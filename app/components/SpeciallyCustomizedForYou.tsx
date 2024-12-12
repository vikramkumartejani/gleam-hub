import Image from 'next/image'
import React from 'react'

const SpeciallyCustomizedForYou = () => {
  return (
    <div className='pt-[60px] md:pt-[107px] pb-14 md:pb-[85px] w-full relative'>
        <Image src='/assets/Vector 40.svg' alt='Vector' width={110} height={90} className=' absolute top-12 left-0' />
        <div className='relative z-30 text-center'>
            <h4 className='text-[#A67C52] px-4 text-[15px] leading-[18px] font-inter font-semibold tracking-[0.05em] mb-2'>OUR SERVICES</h4>
            <h1 className='text-[#282828] px-4 text-[35px] leading-[45px] md:text-[72px] md:leading-[73px] font-inter font-extrabold tracking-[-0.03em] max-w-[750px] mx-auto'>Specially <span className='text-[#A67C52]'>Customized</span> for You</h1>
            <p className='text-[#282828] px-4 text-[15px] md:text-[16px] md:leading-[26px] font-normal font-poppins max-w-[650px] mx-auto mt-4'>At Gleam Hub, we specialise in hair care that doesn't just enhance your look—it boosts your confidence and transforms your relationship with your hair. </p>
            
            <div className='px-4'>
                <div className='pt-10 md:pt-[108px] pb-[51px] max-w-[1168px] mx-auto w-full flex items-center lg:flex-row flex-col-reverse gap-5 justify-between'>
                    <Image src='/assets/scalp-revival.svg' alt='scalp-revival' width={511} height={374} className='rounded-[40px] md:rounded-[87px]' />
                    <div className='text-left lg:max-w-[606px]'>
                        <h2 className='text-[#282828] text-[35px] md:text-[48px] md:leading-[73px] font-inter font-extrabold tracking-[-0.02em]'>Scalp Revival</h2>
                        <p className='text-[#282828] text-[15px] md:text-[16px] font-normal font-poppins md:leading-[26px] py-2 md:py-0'>Your scalp is the foundation of your hair's health. Our scalp treatments service focuses on addressing dryness, itching, and product build-up and many more, to promote optimal conditions for natural hair growth.  </p>
                        <ul className='ml-6 text-[#282828] text-[15px] md:text-[16px] font-normal font-poppins md:leading-[26px]'>
                            <li className='list-disc'>Tailoured scalp care routines.</li>
                            <li className='list-disc'>Proven methods to restore and maintain scalp health.</li>
                            <li className='list-disc'>Practical advice for preventing recurring issues.</li>
                        </ul>
                        <h4 className='mt-4 md:mt-0 text-[#A67C52] text-[18px] md:text-[20px] md:leading-[45px] font-inter font-extrabold uppercase'>R700 first visit, R350 per follow-up visit</h4>
                    </div>
                </div>
            </div>

            <div className='bg-[#FFEFDE] md:bg-[#FFF7EF] w-full py-10'>
                <div className='flex lg:items-center justify-between lg:flex-row flex-col max-w-[1184px] mx-auto w-full px-4 gap-5'>
                    <div className='text-left lg:max-w-[606px]'>
                        <h2 className='text-[#282828]  text-[35px] md:text-[48px] md:leading-[73px] font-inter font-extrabold tracking-[-0.02em]'>Crown Confidence</h2>
                        <p className='text-[#282828] text-[15px] md:text-[16px] font-normal font-poppins md:leading-[26px] py-2.5'>Celebrate and care for your unique texture with the best hair care coaching for curls, coils, and kinks.</p>
                        <ul className='ml-6 text-[#282828]  text-[15px] md:text-[16px] font-normal font-poppins md:leading-[26px]'>
                            <li className='list-disc'>Personalised routines for managing your texture effortlessly.</li>
                            <li className='list-disc'>Moisture retention techniques for healthier, shinier hair.</li>
                            <li className='list-disc'>Protective styling tutorials and tips to reduce damage and encourage growth.</li>
                        </ul>
                        <h4 className='md:mt-0 mt-4 text-[#A67C52]  text-[18px] md:text-[20px] md:leading-[45px] font-inter font-extrabold uppercase'>R700 first visit, R350 per follow-up visit</h4>
                    </div>
                    <div className='relative overflow-hidden flex items-center justify-center'>
                        <Image src='/assets/crown-confidence.svg' alt='scalp-revival' width={511} height={374} className='rounded-[40px] md:rounded-[87px] relative z-20' />
                        <Image src='/assets/Vector 41.svg' alt='Vector' width={244} height={269} className=' absolute top-0 -right-20' />
                    </div>
                </div>
            </div>
               
            <div className='relative px-4'>
                <Image src='/assets/Vector 42.svg' alt='Vector' width={100} height={90} className='absolute top-28 left-0' />
                <div className='relative z-20 pt-[51px] pb-[51px] max-w-[1168px] mx-auto w-full flex lg:items-center lg:flex-row flex-col-reverse gap-5 justify-between'>
                    <div className='flex items-center justify-center'>
                        <Image src='/assets/restore-thrive.svg' alt='restore-thrive' width={511} height={374} className='rounded-[40px] md:rounded-[87px]' />
                    </div>
                    <div className='text-left max-w-[606px]'>
                        <h2 className='text-[#282828] text-[35px] md:text-[48px] md:leading-[73px] font-inter font-extrabold tracking-[-0.02em]'>Restore & Thrive</h2>
                        <p className='text-[#282828] text-[15px] md:text-[16px] font-normal font-poppins md:leading-[26px] py-2.5 md:py-2.5'>For women struggling with thinning hair or hair loss, this programme offers expert guidance for natural hair care and proven methods to regain fullness and strength.</p>
                        <ul className='ml-6 text-[#282828] text-[15px] md:text-[16px] font-normal font-poppins md:leading-[26px]'>
                            <li className='list-disc'>Thorough analysis to identify the root causes of hair loss.</li>
                            <li className='list-disc'>Tailoured solutions for restoration and regrowth.</li>
                            <li className='list-disc'>Continued support to ensure progress and success.</li>
                        </ul>
                        <h4 className='md:mt-0 mt-4 text-[#A67C52] text-[18px] md:text-[20px] md:leading-[45px] font-inter font-extrabold uppercase'>R700 first visit, R350 per follow-up visit</h4>
                    </div>  
                </div>
            </div>

            <button className='mt-0 md:mt-7 bg-[#B2875C] border-[0.7px] border-[#FEFEFE3B] w-[220px] md:w-[272px] h-[50px] md:h-[80px] uppercase rounded-[40px] font-inter text-[#FFEFDE] text-[15px] md:text-[17px] font-medium tracking-[-0.03em]'>BOOK CONSULTATION</button>

           <div className='px-4'>
                <div className='mt-14 md:mt-20 bg-[#A67C52] relative py-10 md:py-[66px] w-full px-4 max-w-[1240px] mx-auto rounded-2xl' style={{boxShadow: "0px 19px 36.2px 7px #0000000A"}}>
                    <img src='/assets/pinterest.svg' alt='pinterest' className='w-full absolute top-0 h-full inset-0' />
                    <div className="max-w-[988px] mx-auto w-full">
                        <div className='flex items-center justify-between gap-2 mb-8'>
                            <h1 className='text-[#FFFFFF] text-[35px] md:text-[56px] md:leading-[65px] font-inter font-bold tracking-[-2px] max-w-[496px] text-left'>What Sets Gleam Hub Apart?</h1>
                            <button className='md:block hidden bg-[#FDF5EE] border-[0.7px] border-[#FEFEFE3B] w-[213px] h-[60px] rounded-[59px] font-inter text-[#A67C52] text-[18px] font-bold tracking-[-0.03em]'>Book Appointment</button>
                        </div>
                        <div className='mt-10 md:mt-[62px] grid grid-cols-1 md:grid-cols-2 md:flex items-center text-left gap-6 md:gap-10'>
                            <div className='md:max-w-[273px]'>
                                <h2 className='mb-3 text-[#FFFFFF] text-[20px] leading-[28px] font-bold font-manrope'>Expertise You Can Trust</h2>
                                <p className='text-[#FFFFFFE3] text-[14px] font-normal font-manrope leading-[25px]'>You will be tended to by a certified professional who is trained in textured hair restoration, ensuring you receive care.</p>
                            </div>
                            <div className='bg-[#FFFFFF45] w-[100px] flex items-center justify-center mx-auto md:w-[1px] h-[1px] md:h-[59px]'></div>
                            <div className='md:max-w-[273px]'>
                                <h2 className='mb-3 text-[#FFFFFF] text-[20px] leading-[28px] font-bold font-manrope'>Expertise You Can Trust </h2>
                                <p className='text-[#FFFFFFE3] text-[14px] font-normal font-manrope leading-[25px]'>You will be tended to by a certified professional who is trained in textured hair restoration, ensuring you receive care.</p>
                            </div>
                            <div className='bg-[#FFFFFF45] w-[100px] flex items-center justify-center mx-auto md:w-[1px] h-[1px] md:h-[59px]'></div>
                            <div className='md:max-w-[273px]'>
                                <h2 className='mb-3 text-[#FFFFFF] text-[20px] leading-[28px] font-bold font-manrope'>Expertise You Can Trust </h2>
                                <p className='text-[#FFFFFFE3] text-[14px] font-normal font-manrope leading-[25px]'>You will be tended to by a certified professional who is trained in textured hair restoration, ensuring you receive care.</p>
                            </div>
                        </div>
                        <div className='mt-8 md:mt-0 flex items-center justify-center'>
                            <button className='block md:hidden bg-[#FDF5EE] border-[0.7px] border-[#FEFEFE3B] w-[213px] h-[50px] md:h-[60px] rounded-[59px] font-inter text-[#A67C52] text-[18px] font-bold tracking-[-0.03em]'>Book Appointment</button>
                        </div>
                    </div>
                </div>
           </div>

            {/* Your Path to Healthy, Beautiful Hair */}
            <div className='px-4 mt-[60px] md:mt-[100px] max-w-[1035px] mx-auto w-full text-center md:text-left'>
                <h1 className='text-[40px] leading-[50px] md:text-left text-center md:text-[64px] md:leading-[78px] font-inter font-bold text-[#101010] max-w-[670px]'>Your Path to Healthy, <span className='text-[#A67C52]'>Beautiful Hair</span></h1>
                <div className='mt-7 md:mt-[57px]'>
                    <div className='py-8 md:py-10 flex items-center md:items-start md:flex-row flex-col justify-between gap-4 md:gap-2 border-t md:border-t-0 border-b border-[#D6D6D6]'>
                        <h4 className='text-[#101010] text-[20px] md:text-[24px] leading-[28px] font-bold font-inter'>Step 1: Consultation</h4>
                        <p className='text-[#8D8D8D] text-[16px] md:text-[20px] md:leading-[32px] font-normal font-poppins tracking-[-0.03em] max-w-[493px]'>We assess your current hair condition, scalp health, and goals.</p>
                    </div>
                    <div className='py-8 md:py-10 flex items-center md:items-start md:flex-row flex-col justify-between gap-4 border-b border-[#D6D6D6]'>
                        <h4 className='text-[#101010] text-[20px] md:text-[24px] leading-[28px] font-bold font-inter'>Step 2: Customised Care Plan</h4>
                        <p className='text-[#8D8D8D] text-[16px] md:text-[20px] md:leading-[32px] font-normal font-poppins tracking-[-0.03em] max-w-[493px]'>Receive a tailoured regimen focusing on your specific hair and goals. This also contains actionable tips for immediate improvement.</p>
                    </div>
                    <div className='py-8 md:pt-10 flex items-center md:items-start md:flex-row flex-col justify-between gap-4'>
                        <h4 className='text-[#101010] text-[20px] md:text-[24px] leading-[28px] font-bold font-inter'>Step 3: Ongoing Support</h4>
                        <p className='text-[#8D8D8D] text-[16px] md:text-[20px] md:leading-[32px] font-normal font-poppins tracking-[-0.03em] max-w-[493px]'>With regular check-ins and progress tracking, we ensure your results are sustainable.</p>
                    </div>
                </div>
                <button className='mt-6 md:mt-[51px] bg-[#B2875C] border-[0.7px] border-[#FEFEFE3B] w-[200px] md:w-[272px] h-[50px] md:h-[80px] uppercase rounded-[40px] font-inter text-[#FFEFDE] text-[15px] md:text-[17px] font-medium tracking-[-0.03em]'>BOOK CONSULTATION</button>
            </div>
        </div>
    </div>
  )
}

export default SpeciallyCustomizedForYou