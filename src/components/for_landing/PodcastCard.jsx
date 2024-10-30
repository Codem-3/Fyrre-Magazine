import React from 'react'
import { Link } from 'react-router-dom';
// Icons
import { RightArrowIcon, ArrowIcon } from '@/utils/icons.util';
// Database 
import data from '@/data/Podcast.json'

export const PodcastCard = () => {
    return (
        <main className="mx-5 xl:mx-20 border-t border-secondaryColor">

            {/* Header*/}
            <header className="flex flex-col tiny:flex-row gap-3 justify-between items-center mt-12 mb-16">
                <p className="text-4xl sm:text-7xl font-bold uppercase">Podcast</p>
                <Link to="/podcast" className="flex gap-2 transition-all hover:text-[#B17457] duration-300">
                    <p className="uppercase font-bold">All Episodes</p>
                    <RightArrowIcon />
                </Link>
            </header>

            {/* Podcast Data Card */}
            <div className="flex flex-wrap xl:justify-between justify-center gap-5">
                {data.podcasts.slice(0, 3).map((podcast, index) => (
                    <section key={index} className="p-4 vsm:p-7 border border-secondaryColor">
                        <Link to={`/podcast/${podcast.id}`} className="block">
                            <div div className="flex-col" >
                                <div className="relative vsm:w-96 h-96 flex-shrink-0 mb-5">
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
                                <span className="flex flex-col justify-between py-5">
                                    {/* Podcast Title & Description */}
                                    <p className="font-bold text-2xl vsm:text-3xl max-w-96 mb-8 capitalize">{podcast.title}</p>
                                    {/* Podcast Details */}
                                    <div className="flex justify-between items-center">
                                        <span className="flex text-sm gap-6">
                                            <p><span className="font-bold">Date</span> {podcast.date}</p>
                                            <p><span className="font-bold">Duration</span> {podcast.duration}</p>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </Link>
                    </section>
                ))
                }
            </div>

        </main>
    )
}