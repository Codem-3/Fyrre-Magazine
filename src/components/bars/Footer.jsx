import React from 'react'
// Component
import { NewsBar } from '@/components'
// Icons
import { InstagramIcon, TwitterIcon, WifiIcon, YoutubeIcon } from '@/utils/icons.util'

export const Footer = () => {
    return (
        <footer className='bg-secondaryColor text-primaryColor overflow-hidden'>
            <NewsBar />

            {/* Email Section*/}
            <section className='flex justify-between items-center uppercase my-28 mx-20'>
                <p className='text-7xl font-semibold max-w-screen-sm leading-[110%]'>Design News to your inbox</p>
                <span className='flex gap-3'>
                    <input placeholder='example@mail.com' className='px-4 py-2 text-secondaryColor w-80' />
                    <button className='uppercase px-6 py-1 bg-primaryColor text-secondaryColor font-medium'>Sign Up</button>
                </span>
            </section>

            {/* Navigation Section*/}
            <section className='flex justify-between items-baseline mb-20 mx-20'>
                <p className='uppercase text-xl font-bold'>Fyrre Magazine</p>
                <span className='flex gap-56'>
                    <ul className='flex flex-col gap-3'>
                        <li>Art</li>
                        <li>Design</li>
                        <li>Architecture</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>Magazine</li>
                        <li>Podcast</li>
                        <li>Authors</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>StyleGuide</li>
                        <li>Licensing</li>
                        <li>Changelog</li>
                    </ul>
                </span>
            </section>

            {/* bottom Section*/}
            <section className='flex justify-between items-center mb-6 mx-20'>
                <p className='text-sm'>© code by Mohamed Mohamed -  Designed by WebFlow</p>
                <span className='flex gap-3 items-center'>
                    <span className='hover:scale-125 transition-all hover:text-[#B17457] duration-300 cursor-pointer'>
                        <InstagramIcon />
                    </span>
                    <span className='hover:scale-125 transition-all hover:text-[#B17457] duration-300 cursor-pointer'>
                        <TwitterIcon />
                    </span>
                    <span className='hover:scale-125 transition-all hover:text-[#B17457] duration-300 cursor-pointer'>
                        <YoutubeIcon />
                    </span>
                    <span className='hover:scale-125 transition-all hover:text-[#B17457] duration-300 cursor-pointer'>
                        <WifiIcon />
                    </span>
                </span>
            </section>
        </footer>
    )
}