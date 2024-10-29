import React from 'react'
import { Link } from 'react-router-dom';
// Icons
import { RightArrowIcon } from '@/utils/icons.util';
// Database 
import data from '@/data/Authors.json'

export const AuthorsCard = () => {
    return (
        <main className='my-10 mx-20 border-t border-secondaryColor'>

            {/* Header*/}
            <header className='flex justify-between items-center mt-12 mb-16'>
                <p className='text-7xl font-bold uppercase'>Authors</p>
                <Link to='/authors' className='flex gap-2 transition-all hover:text-[#B17457] duration-300'>
                    <p className='uppercase font-bold'>All Authors</p>
                    <RightArrowIcon />
                </Link>
            </header>

            {/* Authors Data Card */}
            <div className='flex flex-wrap justify-between'>
                {data.profiles.slice(0, 4).map((authors, index) => (
                    <section key={index} className='p-7'>
                        <div className="relative w-64 h-64 mb-5">
                            <img
                                src={authors.image}
                                alt={authors.title}
                                className="w-full h-full object-center object-cover rounded-full shadow-xl"
                            />
                        </div>
                        <span className='flex flex-col justify-between items-center py-5'>
                            {/* Authors Title & Description */}
                            <p className="font-bold text-4xl max-w-96 mb-8">{authors.name}</p>
                            {/* Authors Details */}
                            <div className='flex justify-between items-center'>
                                <span className='flex text-sm gap-6'>
                                    <p><span className='font-bold text-lg'>Job</span> {authors.job}</p>
                                    <p><span className='font-bold text-lg'>City</span> {authors.city}</p>
                                </span>
                            </div>
                        </span>
                    </section>
                ))
                }
            </div>

        </main>
    )
}