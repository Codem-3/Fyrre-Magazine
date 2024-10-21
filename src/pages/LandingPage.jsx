import React, { Fragment } from 'react'
import { Header, Footer } from '@/components'
import { NewsBar } from '../components/custom/NewsBar'

export const LandingPage = () => {
    return (
        <Fragment>
            <Header FirstNav='Magazine' SecondNav='Authors' ThirdNav='Podcast' />

            <main className='mx-20'>
                <p className='uppercase text-center text-[15vw] font-black'>art & life</p>
                <div class="flex items-center bg-secondaryColor text-primaryColor overflow-hidden">
                    <div className='text-nowrap font-semibold p-5 bg-black z-10'>Last News</div>
                    <p class="flex gap-3 whitespace-nowrap animate-marquee p-5">
                        <p>Electric Vehicles Expected to Dominate the Market by 2030!</p>
                        <p>E-commerce Platforms See Significant Growth During Holiday Season!</p>
                        <p>AI Diagnoses Diseases Faster Than Ever!</p>
                        <p>Electric Vehicles Expected to Dominate the Market by 2030!</p>
                        <p>E-commerce Platforms See Significant Growth During Holiday Season!</p>
                        <p>AI Diagnoses Diseases Faster Than Ever!</p>
                    </p>
                </div>
            </main>

            <Footer />
        </Fragment>
    )
}