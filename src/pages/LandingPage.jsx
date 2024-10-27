import React, { Fragment } from 'react'
import { Header, Footer, HeroSection, MagazineCard } from '@/components'

export const LandingPage = () => {
    return (
        <Fragment>
            <Header FirstNav='Magazine' SecondNav='Authors' ThirdNav='Podcast' />
            <HeroSection />
            <MagazineCard />
            <Footer />
        </Fragment>
    )
}