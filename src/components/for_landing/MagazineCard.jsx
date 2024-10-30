import React from 'react'
// Database
import data from '@/data/Magazine.json'
// Icons
import { RightArrowIcon } from '@/utils/icons.util'
import { Link } from 'react-router-dom'

export const MagazineCard = () => {
    return (
        <main>

            {data.cards.map((categoryItem, index) => (
                <section key={index}>
                    <div className="mb-12">
                        {/* Get only to card form each Category */}
                        {categoryItem.card.slice(0, 2).map((cardItem, idx) => (
                            <span>
                                <div key={idx} className="flex gap-10">
                                    <div className="w-96 h-64 flex-shrink-0">
                                        <img src={cardItem.image.src} alt={cardItem.title} className="w-full h-full object-cover rounded" />
                                    </div>
                                    <span className="flex flex-col justify-between py-5">
                                        {/* Magazine Title & Description */}
                                        <div>
                                            <p className="font-bold text-3xl">{cardItem.title}</p>
                                            <p className="mt-3">{cardItem.description}</p>
                                        </div>
                                        {/* Magazine Details */}
                                        <div className="flex justify-between items-center">
                                            <span className="flex text-sm gap-6">
                                                <p><span className="font-bold">Text</span> {cardItem.meta.author}</p>
                                                <p><span className="font-bold">Date</span> {cardItem.meta.date}</p>
                                                <p><span className="font-bold">Read</span> {cardItem.meta.readTime}</p>
                                            </span>
                                            <button className="uppercase px-3 py-2 border border-black rounded-full text-xs hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300">{categoryItem.category}</button>
                                        </div>
                                    </span>
                                </div>

                                {/* Hide Line After Last Card */}
                                {!(idx === categoryItem.card.slice(0, 2).length - 1 && index === data.cards.length - 1) && (
                                    <hr className="border border-black/30 my-12" />
                                )}
                            </span>
                        ))}
                    </div>
                </section>
            ))}

            {/* ALl Articles Button */}
            <Link to="/magazine" className="flex gap-2 transition-all hover:text-[#B17457] duration-300">
                <p className="uppercase font-bold">All articles</p>
                <RightArrowIcon />
            </Link>

        </main>
    )
}