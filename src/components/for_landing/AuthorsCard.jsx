import React from 'react'
// Icons
import { RightArrowIcon } from '@/utils/icons.util';
// Database 
import data from '@/data/Authors.json'

export const AuthorsCard = () => {
    return (
        <main className='my-28 mx-20 border-t border-secondaryColor'>

            {/* Header*/}
            <header className='flex justify-between items-center mt-12 mb-16'>
                <p className='text-7xl font-bold uppercase'>Authors</p>
                <span className='flex gap-2'>
                    <p className='uppercase font-bold'>All Authors</p>
                    <RightArrowIcon />
                </span>
            </header>

            {/* Authors Data Card */}
            <div className='flex flex-wrap justify-between'>
                {data.profiles.slice(0, 4).map((podcast, index) => (
                    <section key={index} className='p-7'>
                        <div div className="flex-col items-center text-center" >
                            <div className="relative w-64 h-64  mb-5">
                                <img
                                    src={podcast.image}
                                    alt={podcast.title}
                                    className="w-full h-full object-center object-cover rounded-full shadow-xl"
                                />
                            </div>
                            <span className='flex flex-col justify-between items-center py-5'>
                                {/* Authors Title & Description */}
                                <p className="font-bold text-4xl max-w-96 mb-8">{podcast.name}</p>
                                {/* Authors Details */}
                                <div className='flex justify-between items-center'>
                                    <span className='flex text-sm gap-6'>
                                        <p><span className='font-bold text-lg'>Job</span> {podcast.job}</p>
                                        <p><span className='font-bold text-lg'>City</span> {podcast.city}</p>
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