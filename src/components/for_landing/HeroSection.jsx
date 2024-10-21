import React from 'react'
// Component
import { BreakNews } from '@/components'
// Images
import CloseEyes from '@/assets/images/for_landing/closeEyes.jfif'

export const HeroSection = () => {
    return (
        <main className='mx-20'>
            <p className='uppercase text-center text-[15vw] font-black'>art & life</p>
            <BreakNews />

            <section className='flex justify-between my-10'>
                <p className='text-8xl font-semibold uppercase min-w-[700px]'>Don’t close your eyes</p>
                <span className='flex flex-col justify-between'>
                    <p className='text-lg text-justify'>Reflects on the fleeting moments of life and the importance of cherishing each experience, especially in relationships. The song conveys a sense of urgency, urging listeners to stay present and fully engage with their loved ones.</p>
                    <div className='flex justify-between items-center'>
                        <span className='flex text-sm gap-6'>
                            <p><span className='font-bold'>Text</span> Jakob Gronberg</p>
                            <p><span className='font-bold'>Date</span> 16. March 2022</p>
                            <p><span className='font-bold'>Duration</span> 1 Min</p>
                        </span>
                        <button className='uppercase px-3 py-2 border border-black rounded-full text-xs'>Label</button>
                    </div>
                </span>
            </section>

            <img src={CloseEyes} alt='Not Close Eyes' />
        </main>
    )
}