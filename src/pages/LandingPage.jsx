import React, { Fragment } from 'react'
import { Header, Footer, HeroSection } from '@/components'

export const LandingPage = () => {
    return (
        <Fragment>
            <Header FirstNav='Magazine' SecondNav='Authors' ThirdNav='Podcast' />
            <HeroSection />

            <Footer />
        </Fragment>
    )
}