// Component
import { NewsBar } from '@/components'
// Icons
import { InstagramIcon, TwitterIcon, WifiIcon, YoutubeIcon } from '@/utils/icons.util'

export const Footer = () => {

    const styles = {
        HoverTransition: `hover:scale-125 transition-all duration-300 hover:text-[#B17457] cursor-pointer text-center`,
        ulStyle: `flex flex-col gap-3`,
    }

    return (
        <footer className="bg-secondaryColor text-primaryColor overflow-hidden">
            <NewsBar />

            {/* Email Section*/}
            <section className="flex md:flex-row flex-col gap-5 text-center md:text-left justify-between items-center uppercase my-8 sm:my-28 mx-5 xl:mx-20">
                <p className="text-5xl sm:text-7xl font-semibold max-w-screen-sm leading-[110%]">Design News to your inbox</p>
                <span className="flex gap-3">
                    <input placeholder="example@mail.com" className="px-4 py-2 text-secondaryColor sm:w-80 outline" defaultValue="mohamed.m.abdalfattah@gmail.com" />
                    <button className="uppercase px-2 vsm:px-6 py-1 bg-primaryColor text-secondaryColor font-medium">Sign Up</button>
                </span>
            </section>

            {/* Navigation Section*/}
            <section className="flex sm:flex-row flex-col justify-center items-center gap-5 sm:justify-between sm:items-baseline my-8 sm:mb-20 mx-5 xl:mx-20">
                <p className="uppercase text-xl font-bold">Fyrre Magazine</p>
                <span className="flex gap-10 lg:gap-56">
                    <ul className={styles.ulStyle}>
                        <li className={styles.HoverTransition}>Art & Life</li>
                        <li className={styles.HoverTransition}>Design</li>
                        <li className={styles.HoverTransition}>Architecture</li>
                    </ul>
                    <ul className="hidden vsm:flex flex-col gap-3">
                        <li className={styles.HoverTransition}>Magazine</li>
                        <li className={styles.HoverTransition}>Podcast</li>
                        <li className={styles.HoverTransition}>Authors</li>
                    </ul>
                    <ul className={styles.ulStyle}>
                        <li className={styles.HoverTransition}>StyleGuide</li>
                        <li className={styles.HoverTransition}>Licensing</li>
                        <li className={styles.HoverTransition}>Changelog</li>
                    </ul>
                </span>
            </section>

            {/* bottom Section*/}
            <section className="flex justify-between items-center mb-6 mx-5 xl:mx-20">
                <p className="text-sm">© code by Mohamed Mohamed -  Designed by WebFlow</p>
                {/* Social */}
                <div className="flex gap-3 items-center">
                    {[InstagramIcon, TwitterIcon, YoutubeIcon, WifiIcon].map((Icon, idx) => (
                        <span
                            key={idx}
                            className={styles.HoverTransition}
                        >
                            <Icon />
                        </span>
                    ))}
                </div>
            </section>
        </footer>
    )
}