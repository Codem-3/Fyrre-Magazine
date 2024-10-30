import React, { Fragment } from 'react'
import { Header, Footer, HeroSection, MagazineCard, PrintMagazine, AuthorsCard, PodcastCard } from '@/components'

export const LandingPage = () => {
    return (
        <Fragment>
            <Header
                FirstNav="Magazine" FirstNavLink="/magazine"
                SecondNav="Authors" SecondNavLink="/authors"
                ThirdNav="Podcast" ThirdNavLink="/podcast"
            />
            <HeroSection />
            <span className="flex justify-between gap-5 xl:gap-20 mx-5 xl:mx-20 my-12">
                <MagazineCard />
                <span className="hidden lg:block">
                    <PrintMagazine />
                </span>
            </span>
            <PodcastCard />
            <AuthorsCard />
            <Footer />
        </Fragment>
    )
}