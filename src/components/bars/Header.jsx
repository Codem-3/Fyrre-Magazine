import React from 'react'
import { Link } from 'react-router-dom'
import { InstagramIcon, TwitterIcon, WifiIcon, YoutubeIcon } from '@/utils/icons.util'


export const Header = (props) => {
    return (
        <header className="mt-12 mx-5 xl:mx-20 dark:bg-darkPrimaryColor dark:text-darkSecondaryColor">
            <main className="flex justify-between items-center mb-4">
                {/* Logo */}
                <p className="uppercase text-2xl font-bold">Fyrre Magazine</p>
                {/* Navigation */}
                <ul className="flex gap-6 items-center text-xl">
                    <Link to={props.FirstNavLink} className="hover:underline transition-all hover:text-[#B17457] duration-300">
                        <li>{props.FirstNav}</li>
                    </Link>
                    <Link to={props.SecondNavLink} className="hover:underline transition-all hover:text-[#B17457] duration-300">
                        <li>{props.SecondNav}</li>
                    </Link>
                    <Link to={props.ThirdNavLink} className="hover:underline transition-all hover:text-[#B17457] duration-300">
                        <li>{props.ThirdNav}</li>
                    </Link>
                    <hr className="w-4 border-secondaryColor" />
                    {/* Social */}
                    <div className="flex gap-3 items-center">
                        {[InstagramIcon, TwitterIcon, YoutubeIcon, WifiIcon].map((Icon, idx) => (
                            <span
                                key={idx}
                                className="hover:scale-125 transition-all duration-300 hover:text-[#B17457] cursor-pointer"
                            >
                                <Icon />
                            </span>
                        ))}
                    </div>
                </ul>
            </main>

            <hr className="border-secondaryColor" />
        </header>
    )
}