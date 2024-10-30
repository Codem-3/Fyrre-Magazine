import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
// Components
import { Header, Footer } from '@/components'
// Icons
import { AuthorIcon, RightArrowIcon } from '@/utils/icons.util';
// Data
import data from '@/data/Authors.json'

export const AuthorsPage = () => {
    return (
        <Fragment>
            <Header
                FirstNav="Home" FirstNavLink="/"
                SecondNav="Magazine" SecondNavLink="/magazine"
                ThirdNav="Podcast" ThirdNavLink="/podcast"
            />
            <main className="mx-20">

                <section className="w-full flex justify-center my-12">
                    <AuthorIcon />
                </section>

                {/* Authors Data Card */}
                <section className="flex flex-col gap-8 my-28">
                    {data.profiles.map((authors, index) => (
                        <Fragment key={index}>
                            <section className="flex items-center">
                                <div className="relative w-[150px] h-[130px]">
                                    <img
                                        src={authors.image}
                                        alt={authors.title}
                                        className="w-full h-full object-center object-cover rounded-full"
                                    />
                                </div>
                                <span className="flex justify-between pl-12 items-center w-full">
                                    {/* Authors Title & Description */}
                                    <p className="font-bold text-3xl">{authors.name}</p>
                                    {/* Authors Details */}
                                    <article className="flex justify-between items-center">
                                        <span className="flex text-sm gap-24 items-center">
                                            <p><span className="font-bold text-sm">Job</span> {authors.job}</p>
                                            <p><span className="font-bold text-sm">City</span> {authors.city}</p>
                                            <Link to={`/authors/${authors.id}`} className="flex gap-2 transition-all hover:text-[#B17457] duration-300 items-center">
                                                <p className="uppercase font-bold text-lg">About</p>
                                                <RightArrowIcon />
                                            </Link>
                                        </span>
                                    </article>
                                </span>
                            </section>
                            {/* Divider line between authors */}
                            {index < data.profiles.length - 1 && (
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