import React from 'react'
import CoverMagazine from '@/assets/images/for_landing/magazin-cover.png'

export const PrintMagazine = () => {
    return (
        <aside>
            <p className="uppercase font-semibold mb-2">PrintMagazine</p>
            <p className="font-semibold text-5xl mb-8">03/2022</p>
            <img src={CoverMagazine} alt="Cover Magazine" className="min-w-64 mb-4" />
            <button className="bg-secondaryColor text-primaryColor uppercase font-medium text-sm px-6 py-4 hover:bg-[#ECC584] hover:text-secondaryColor transition-all duration-300">Buy</button>

            {/* Most Popular */}
            <section className="my-12">
                <p className="uppercase font-semibold mb-8">Most Popular</p>

                <div className="flex gap-4">
                    <p className="font-bold text-2xl">01</p>
                    <span>
                        <p className="font-bold text-2xl mb-2">Street art festival</p>
                        <p className="text-sm"><span className="font-bold">Text</span> Mohamed Sayed</p>
                    </span>
                </div>
                <hr className="border border-black/20 my-6" />

                <div className="flex gap-4">
                    <p className="font-bold text-2xl">02</p>
                    <span>
                        <p className="font-bold text-2xl mb-2">Hope dies last</p>
                        <p className="text-sm"><span className="font-bold">Text</span> Anne Henry</p>
                    </span>
                </div>
                <hr className="border border-black/20 my-6" />

                <div className="flex gap-4">
                    <p className="font-bold text-2xl">03</p>
                    <span>
                        <p className="font-bold text-2xl mb-2">Artists who want to rise above</p>
                        <p className="text-sm"><span className="font-bold">Text</span> Anna Nielsen</p>
                    </span>
                </div>
            </section>

            {/* News Letter */}
            <section className="bg-[#F8F8F8] p-5">
                <p className="uppercase font-semibold mb-2">NewsLetter</p>
                <p className="text-2xl font-bold mb-4">Design News to your inbox</p>
                <input placeholder="example@gmail.com" className="px-2 py-2 w-full mb-3" />
                <div className="flex justify-end">
                    <button className="bg-secondaryColor text-primaryColor uppercase font-medium text-sm px-5 py-3 hover:bg-[#ECC584] hover:text-secondaryColor transition-all duration-300">Sign up</button>
                </div>
            </section>

        </aside>
    )
}