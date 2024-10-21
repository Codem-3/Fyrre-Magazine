import React from 'react'
import { InstagramIcon, TwitterIcon, WifiIcon, YoutubeIcon } from '@/utils/icons.util'

export const Header = () => {
    return (
        <header className='mt-16 mx-20'>
            <main className='flex justify-between items-center mb-4'>
                {/* Logo */}
                <p className='uppercase text-xl font-bold'>Fyrre Magazine</p>
                {/* Navigation */}
                <ul className='flex gap-6 items-center text-xl'>
                    <li>Magazine</li>
                    <li>Authors</li>
                    <li>Podcast</li>
                    <hr className='w-4 border-black' />
                    {/* Social */}
                    <span className='flex gap-3 items-center'>
                        <InstagramIcon />
                        <TwitterIcon />
                        <YoutubeIcon />
                        <WifiIcon />
                    </span>
                </ul>
            </main>

            <hr className='border-black' />
        </header>
    )
}