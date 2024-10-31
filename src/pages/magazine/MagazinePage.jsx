import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import { Header, Footer } from '@/components';
// Icon
import { MagazineIcon } from '@/utils/icons.util';
// Data 
import data from '@/data/Magazine.json';

export const MagazinePage = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    // Unique categories from data
    const categories = ['All', ...new Set(data.cards.map(item => item.category))];

    // Function to shuffle an array
    const shuffleArray = (array) => {
        return array
            .map(item => ({ ...item, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(item => item);
    };

    // Filtered data based on the selected category
    const filteredCards = selectedCategory === 'All'
        ? shuffleArray(data.cards) // Shuffle cards when "All" is selected
        : data.cards.filter(card => card.category === selectedCategory);

    return (
        <Fragment>
            <Header
                FirstNav="Home" FirstNavLink="/"
                SecondNav="Authors" SecondNavLink="/authors"
                ThirdNav="Podcast" ThirdNavLink="/podcast"
            />
            <main className="mx-5 xl:mx-20">

                {/* Magazine Title Section */}
                <section className="w-full flex justify-center my-12">
                    <MagazineIcon />
                </section>

                {/* Category Filter Buttons */}
                <section className="flex justify-between items-center">
                    <p className="font-semibold hidden vsm:block">Categories</p>
                    <span className="flex gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`uppercase px-3 py-2 border border-secondaryColor rounded-full text-xs hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300 ${selectedCategory === category ? 'bg-secondaryColor text-primaryColor' : 'bg-primaryColor dark:text-secondaryColor'}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </span>
                </section>

                {/* Magazine Data Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                    {filteredCards.map((categoryData) => (
                        categoryData.card.map(magazine => (
                            <Link to={`/magazine/${magazine.id}`} >
                                <div key={magazine.id} className="border border-secondaryColor/30 dark:border-primaryColor/30 p-4 rounded-lg shadow-sm flex flex-col">
                                    <span className='flex justify-between items-center mb-4'>
                                        <p>{magazine.meta.date}</p>
                                        <p className="uppercase px-3 py-1 border border-secondaryColor dark:border-primaryColor rounded-full text-xs">
                                            {categoryData.category}
                                        </p>
                                    </span>
                                    <img
                                        src={magazine.image.src}
                                        alt={magazine.title}
                                        className="w-full h-96 object-cover rounded-lg mb-4 hover:scale-105 transition-all duration-300"
                                    />
                                    <h3 className="font-bold text-2xl mb-2 uppercase line-clamp-1">{magazine.title}</h3>
                                    <p className="text-sm mb-4 text-justify line-clamp-3 text-secondaryColor/80 dark:text-primaryColor/80">{magazine.description}</p>
                                    <div className="flex flex-col xl:flex-row gap-2 justify-between text-sm">
                                        <p><strong>Author</strong> {magazine.meta.author}</p>
                                        <p><strong>Date</strong> {magazine.meta.date}</p>
                                        <p><strong>Duration</strong> {magazine.meta.readTime}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ))}
                </section>

            </main>
            <Footer />
        </Fragment>
    );
};