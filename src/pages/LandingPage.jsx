// components
import { Header, Footer, HeroSection, MagazineCard, PrintMagazine, AuthorsCard, PodcastCard } from '@/components'

export const LandingPage = () => {
    return (
        <>
            <Header
                FirstNav="Magazine" FirstNavLink="/magazine"
                SecondNav="Authors" SecondNavLink="/authors"
                ThirdNav="Podcast" ThirdNavLink="/podcast"
            />
            <HeroSection />

            <section className="flex justify-between gap-5 xl:gap-20 mx-5 xl:mx-20 my-12">
                <MagazineCard />
                <aside className="hidden lg:block">
                    <PrintMagazine />
                </aside>
            </section>

            <PodcastCard />
            <AuthorsCard />
            <Footer />
        </>
    )
}