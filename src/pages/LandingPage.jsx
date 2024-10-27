import React, { Fragment } from 'react'
import { Header, Footer, HeroSection, MagazineCard, PrintMagazine } from '@/components'

export const LandingPage = () => {
    return (
        <Fragment>
            <Header FirstNav='Magazine' SecondNav='Authors' ThirdNav='Podcast' />
            <HeroSection />
            <span className='flex justify-between gap-20 mx-20 my-12'>
                <MagazineCard />
                <PrintMagazine />
            </span>
            <Footer />
        </Fragment>
    )
}