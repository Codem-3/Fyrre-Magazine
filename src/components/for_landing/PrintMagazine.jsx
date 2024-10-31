import React from 'react'
// Image
import CoverMagazine from '@/assets/images/for_landing/magazin-cover.png'

export const PrintMagazine = () => {

    const styles = {
        ContainerStyle: `flex gap-4`,
        titleStyle: `font-bold text-2xl mb-2 capitalize`,
        numberStyle: `font-bold text-2xl`,
        hrStyle: `border border-black/20 dark:border-primaryColor my-6`,
        buttonStyle: `bg-secondaryColor dark:bg-primaryColor text-primaryColor dark:text-secondaryColor uppercase font-medium text-sm px-5 py-3 hover:bg-[#ECC584] hover:text-secondaryColor transition-all duration-300`,
    }

    return (
        <aside>
            <p className="uppercase font-semibold mb-2">available Soon</p>
            <p className="font-semibold text-5xl mb-8">03/2025</p>
            <img src={CoverMagazine} alt="Cover Magazine" className="min-w-64 mb-4 hover:scale-105 transition-all duration-300" />
            <button className={styles.buttonStyle}>Book</button>

            {/* Most Popular */}
            <section className="my-12">
                <p className="uppercase font-semibold mb-8">Most Popular</p>

                <h3 className={styles.ContainerStyle}>
                    <p className={styles.numberStyle}>01</p>
                    <span>
                        <p className={styles.titleStyle}>Street art festival</p>
                        <p className="text-sm"><span className="font-bold">Text</span> Mohamed Sayed</p>
                    </span>
                </h3>
                <hr className={styles.hrStyle} />

                <h3 className={styles.ContainerStyle}>
                    <p className={styles.numberStyle}>02</p>
                    <span>
                        <p className={styles.titleStyle}>Hope dies last</p>
                        <p className="text-sm"><span className="font-bold">Text</span> Anne Henry</p>
                    </span>
                </h3>
                <hr className={styles.hrStyle} />

                <h3 className={styles.ContainerStyle}>
                    <p className={styles.numberStyle}>03</p>
                    <span>
                        <p className={styles.titleStyle}>Artists who want to rise above</p>
                        <p className="text-sm"><span className="font-bold">Text</span> Anna Nielsen</p>
                    </span>
                </h3>
            </section>

            {/* News Letter */}
            <section className="bg-[#F8F8F8] dark:bg-secondaryColor p-5">
                <p className="uppercase font-semibold mb-2">News Letter</p>
                <p className="text-2xl font-bold mb-4">Design News to your inbox</p>
                <input placeholder="example@gmail.com" className="px-2 py-2 w-full mb-3" />
                <div className="flex justify-end">
                    <button className={styles.buttonStyle}>Sign up</button>
                </div>
            </section>

        </aside>
    )
}