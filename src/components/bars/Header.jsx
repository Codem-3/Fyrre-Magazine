import React from 'react'
// Icons
import { InstagramIcon, TwitterIcon, WifiIcon, YoutubeIcon } from '@/utils/icons.util'

export const Header = (props) => {
    return (
        <header className='mt-12 mx-20 dark:bg-darkPrimaryColor dark:text-darkSecondaryColor'>
            <main className='flex justify-between items-center mb-4'>
                {/* Logo */}
                <p className='uppercase text-xl font-bold'>Fyrre Magazine</p>
                {/* Navigation */}
                <ul className='flex gap-6 items-center text-xl'>
                    <li>{props.FirstNav}</li>
                    <li>{props.SecondNav}</li>
                    <li>{props.ThirdNav}</li>
                    <hr className='w-4 border-secondaryColor' />
                    {/* Social */}
                    <span className='flex gap-3 items-center'>
                        <InstagramIcon />
                        <TwitterIcon />
                        <YoutubeIcon />
                        <WifiIcon />
                    </span>
                </ul>
            </main>

            <hr className='border-secondaryColor' />
        </header>
    )
}