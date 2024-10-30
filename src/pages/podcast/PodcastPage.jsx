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
            <main className="mx-20">

                <section className="w-full flex justify-center my-12">
                    <PodcastIcon />
                </section>

                {/* Podcast Data Card */}
                <section className="flex flex-col gap-5 my-28">
                    {data.podcasts.map((podcast, index) => (
                        <Fragment key={index}>
                            <section className="flex items-center">
                                <p className="font-bold mr-5">{podcast.episode}</p>
                                <div className="relative w-56 h-72 flex-shrink-0">
                                    <img
                                        src={podcast.image}
                                        alt={podcast.title}
                                        className="w-full h-full object-cover rounded"
                                    />
                                    <span className="absolute text-primaryColor right-5 bottom-5">
                                        <ArrowIcon />
                                    </span>
                                    <p className="absolute uppercase text-primaryColor text-2xl font-bold left-5 top-5"><span className="text-5xl block">Fyrre</span>Podcast</p>
                                    <p className="absolute text-primaryColor text-2xl font-bold left-5 bottom-5">{podcast.episode}</p>
                                </div>
                                <span className="flex justify-between pl-6 items-center w-full">
                                    {/* podcast Title & Description */}
                                    <p className="font-bold text-3xl max-w-96 capitalize">{podcast.title}</p>
                                    {/* podcast Details */}
                                    <article className="flex justify-between items-center">
                                        <span className="flex text-sm gap-24 items-center">
                                            <p><span className="font-bold text-sm">Date</span> {podcast.date}</p>
                                            <p><span className="font-bold text-sm">Duration</span> {podcast.duration}</p>
                                            <Link to={`/podcast/${podcast.id}`} className="flex gap-2 transition-all hover:text-[#B17457] duration-300 items-center">
                                                <p className="uppercase font-bold text-lg">{podcast.action}</p>
                                                <RightArrowIcon />
                                            </Link>
                                        </span>
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