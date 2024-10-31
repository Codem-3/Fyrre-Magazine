import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
// Components
import { Header, Footer } from '@/components'
// Icons
import { PodcastIcon, RightArrowIcon, ArrowIcon } from '@/utils/icons.util';
// Data 
import data from '@/data/Podcast.json'

export const PodcastPage = () => {
    return (
        <Fragment>
            <Header
                FirstNav="Home" FirstNavLink="/"
                SecondNav="Magazine" SecondNavLink="/magazine"
                ThirdNav="Authors" ThirdNavLink="/authors"
            />

            <main className="m-5 xl:m-20">
                <section className="w-full flex justify-center my-12">
                    <PodcastIcon />
                </section>

                {/* Podcast Data Card */}
                <section className="flex flex-col gap-8">
                    {data.podcasts.map((podcast, index) => (
                        <Fragment key={index}>
                            <section className="flex flex-col sm:flex-row gap-5 items-center">
                                <p className="hidden sm:block font-bold mr-5 text-center">{podcast.episode}</p>

                                {/* Podcast Photo */}
                                <aside className="relative w-full sm:w-56 h-72 flex-shrink-0">
                                    <img
                                        src={podcast.image}
                                        alt={podcast.title}
                                        className="w-full h-full object-cover rounded hover:scale-105 transition-all duration-300"
                                    />
                                    <span className="absolute text-primaryColor right-5 bottom-5">
                                        <ArrowIcon />
                                    </span>
                                    <p className="absolute uppercase text-primaryColor text-2xl font-bold left-5 top-5"><span className="text-5xl block">Fyrre</span>Podcast</p>
                                    <p className="absolute text-primaryColor text-2xl font-bold left-5 bottom-5">{podcast.episode}</p>
                                </aside>

                                <span className="flex flex-col xl:flex-row justify-between w-full gap-5">
                                    {/* podcast Title & Description */}
                                    <p className="font-bold text-2xl sm:text-3xl max-w-96 capitalize">{podcast.title}</p>
                                    {/* podcast Details */}
                                    <article className="flex justify-between items-center gap-10">
                                        <span className="flex flex-col md:flex-row text-sm gap-5 md:gap-10 xl:gap-24 items-center">
                                            <p><strong>Date</strong> {podcast.date}</p>
                                            <p><strong>Duration</strong> {podcast.duration}</p>
                                        </span>
                                        <Link to={`/podcast/${podcast.id}`} className="flex gap-2 transition-all hover:text-[#B17457] duration-300 items-center">
                                            <p className="uppercase font-bold vsm:text-lg">{podcast.action}</p>
                                            <RightArrowIcon />
                                        </Link>
                                    </article>
                                </span>
                            </section>
                            {/* Divider line between podcast */}
                            {index < data.podcasts.length - 1 && (
                                <hr className="border-t border-gray-300 my-2" />
                            )}
                        </Fragment>
                    ))}
                </section>

            </main>
            <Footer />
        </Fragment>
    )
}