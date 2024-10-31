import React from 'react'
// Component
import { BreakNews } from '@/components'
// Images
import CloseEyes from '@/assets/images/for_landing/closeEyes.jfif'
// Icons
import { TitleIcon } from '@/utils/icons.util'

export const HeroSection = () => {

    const styles = {
        ContainerStyle: `mx-5 xl:mx-20`,
        BoldStyle: `font-bold`,
    }

    return (
        <main className={styles.ContainerStyle}>
            <header className="w-full flex justify-center my-12">
                <TitleIcon />
            </header>
            <BreakNews />

            {/* Hero Magazine */}
            <section className="flex lg:flex-row flex-col justify-between my-10 gap-3">
                <p className="text-3xl tiny:text-5xl md:text-8xl font-semibold uppercase md:min-w-[640px]">Don't close your eyes</p>
                <span className="flex flex-col justify-between">
                    <p className="text-sm lg:text-lg text-justify line-clamp-4">Reflects on the fleeting moments of life and the importance of cherishing each experience, especially in relationships. The song conveys a sense of urgency, urging listeners to stay present and fully engage with their loved ones.</p>
                    <div className="flex justify-between items-center mt-4 xl:mt-0">
                        <span className="flex flex-col xl:flex-row text-sm gap-3">
                            <p><span className={styles.BoldStyle}>Text</span> Jakob Gronberg</p>
                            <p><span className={styles.BoldStyle}>Date</span> 16. March 2022</p>
                            <p><span className={styles.BoldStyle}>Duration</span> 1 Min</p>
                        </span>
                        <button className="uppercase px-3 py-2 border border-black rounded-full text-xs hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300">Life</button>
                    </div>
                </span>
            </section>

            <img src={CloseEyes} alt="Not Close Eyes" />
        </main>
    )
}