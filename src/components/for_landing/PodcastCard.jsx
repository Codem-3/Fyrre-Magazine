import React from 'react'
// Icons
import { RightArrowIcon, ArrowIcon } from '@/utils/icons.util';
// Database 
import data from '@/data/Podcast.json'

export const PodcastCard = () => {
    return (
        <main className='mx-20 border-t border-secondaryColor'>

            {/* Header*/}
            <header className='flex justify-between items-center mt-12 mb-16'>
                <p className='text-7xl font-bold uppercase'>Podcast</p>
                <span className='flex gap-2'>
                    <p className='uppercase font-bold'>All Episodes</p>
                    <RightArrowIcon />
                </span>
            </header>

            {/* Podcast Data Card */}
            <div className='flex justify-between border border-secondaryColor border-r-0'>
                {data.podcasts.slice(0, 3).map((podcast, index) => (
                    <section key={index} className='p-7 border-r border-secondaryColor'>
                        <div div className="flex-col" >
                            <div className="relative w-96 h-96 flex-shrink-0 mb-5">
                                <img
                                    src={podcast.image}
                                    alt={podcast.title}
                                    className="w-full h-full object-cover rounded"
                                />
                                <span className='absolute text-primaryColor right-5 bottom-5'>
                                    <ArrowIcon />
                                </span>
                                <p className='absolute uppercase text-primaryColor text-2xl font-bold left-5 top-5'><span className='text-5xl block'>Fyrre</span>Podcast</p>
                                <p className='absolute text-primaryColor text-2xl font-bold left-5 bottom-5'>{podcast.episode}</p>
                            </div>
                            <span className='flex flex-col justify-between py-5'>
                                {/* Podcast Title & Description */}
                                <p className="font-bold text-3xl max-w-96 mb-8">{podcast.title}</p>
                                {/* Podcast Details */}
                                <div className='flex justify-between items-center'>
                                    <span className='flex text-sm gap-6'>
                                        <p><span className='font-bold'>Date</span> {podcast.date}</p>
                                        <p><span className='font-bold'>Duration</span> {podcast.duration}</p>
                                    </span>
                                </div>
                            </span>
                        </div>
                    </section>
                ))
                }
            </div>

        </main>
    )
}