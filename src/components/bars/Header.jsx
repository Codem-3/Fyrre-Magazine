/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { InstagramIcon, TwitterIcon, WifiIcon, YoutubeIcon } from '@/utils/icons.util';
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

export const Header = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    // Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Dark Mode Theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };

    const styles = {
        linkStyle: `transition-all hover:text-[#B17457] duration-300`,
        hoverStyle: `hover:scale-125 transition-all duration-300 hover:text-[#B17457] cursor-pointer`
    }

    return (
        <header className="pt-6 sm:pt-12 mx-5 xl:mx-20 dark:bg-darkPrimaryColor dark:text-darkSecondaryColor">
            <main className="flex justify-between items-center mb-4">

                {/* Logo */}
                <p className="uppercase text-2xl font-bold transition-all hover:text-[#B17457] duration-300">
                    Fyrre Magazine
                </p>

                {/* Burger Menu Icon */}
                <div className="block md:hidden" onClick={toggleMenu}>
                    <div className={`h-1 w-8 bg-current mb-1 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <div className={`h-1 w-8 bg-current mb-1 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
                    <div className={`h-1 w-8 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>

                {/* Navigation */}
                <ul className={`flex md:flex gap-6 items-center text-xl ${isMenuOpen ? "flex-col md:flex-row absolute md:static bg-primaryColor dark:bg-secondaryColor dark:text-primaryColor md:bg-transparent shadow-2xl md:shadow-none top-20 right-5 p-5 border border-secondaryColor dark:border-borderColor z-50" : "hidden md:flex"}`}>

                    <Link to={props.FirstNavLink} className={styles.linkStyle}>
                        <li>{props.FirstNav}</li>
                    </Link>
                    <Link to={props.SecondNavLink} className={styles.linkStyle}>
                        <li>{props.SecondNav}</li>
                    </Link>
                    <Link to={props.ThirdNavLink} className={styles.linkStyle}>
                        <li>{props.ThirdNav}</li>
                    </Link>
                    <hr className="w-4 border-secondaryColor dark:border-primaryColor" />

                    {/* Social Icons */}
                    <div className="flex gap-3 items-center">
                        {[InstagramIcon, TwitterIcon, YoutubeIcon, WifiIcon].map((Icon, idx) => (
                            <span
                                key={idx}
                                className={styles.hoverStyle}
                            >
                                <Icon />
                            </span>
                        ))}
                    </div>

                    <div onClick={toggleDarkMode} className={styles.hoverStyle}>
                        {darkMode ? <BiMoon /> : <BsSun />}
                    </div>

                </ul>
            </main>
            <hr className="border-secondaryColor dark:border-primaryColor" />
        </header>
    );
}