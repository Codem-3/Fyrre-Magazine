import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
// Components
import { Header, Footer } from '@/components';
// Icons
import { InstagramIcon, TwitterIcon, WifiIcon, YoutubeIcon } from '@/utils/icons.util';
// Data
import data from '@/data/Authors.json';
import articles from '@/data/Magazine.json';

export const AuthorDetailsPage = () => {
    const { id } = useParams();
    const author = data.profiles.find(author => author.id === parseInt(id));

    if (!author) {
        return <p>Author not found</p>;
    }

    return (
        <Fragment>
            <Header
                FirstNav="Home" FirstNavLink="/"
                SecondNav="Magazine" SecondNavLink="/magazine"
                ThirdNav="Podcast" ThirdNavLink="/podcast"
            />

            {/* Author Details */}
            <main className="mx-20 mt-20 flex gap-16">
                <aside className="min-w-96 flex flex-col items-center">
                    <img
                        src={author.image}
                        alt={author.name}
                        className="w-96 h-96 object-cover rounded-full"
                    />
                    <div className="flex items-center justify-between w-full mt-5 border-t-2 border-secondaryColor/30 pt-4">
                        <h2 className="text-xl font-semibold uppercase">Follow</h2>
                        <div className="flex gap-3">
                            {[InstagramIcon, TwitterIcon, YoutubeIcon, WifiIcon].map((Icon, idx) => (
                                <span
                                    key={idx}
                                    className="hover:scale-125 transition-all duration-300 hover:text-[#B17457] cursor-pointer"
                                >
                                    <Icon />
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>

                <section className="flex flex-col gap-5">
                    <h1 className="text-7xl font-bold">{author.name}</h1>
                    <p>{author.about}</p>
                    <p className="italic text-secondaryColor/60">{author.description.repeat(5)}</p>
                </section>
            </main>

            <hr className="border-secondaryColor m-20" />

            {/* Articles by Author */}
            <section className="mx-20">
                <h2 className="text-5xl font-bold mb-10">Articles by {author.name}</h2>
                <div className="flex flex-wrap justify-between">
                    {articles.cards.map((category, idx) => (
                        <article key={idx} className="w-96 mb-10">
                            {category.card.slice(0, 1).map((card, index) => (
                                <div key={index} className="flex flex-col gap-5">
                                    <div className="w-full h-64">
                                        <img
                                            src={card.image.src}
                                            alt={card.title}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold">{card.title}</h3>
                                        <div className="flex justify-center text-sm gap-10 mt-2">
                                            <span><strong>Date:</strong> {card.meta.date}</span>
                                            <span><strong>Read:</strong> {card.meta.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </article>
                    ))}
                </div>
            </section>

            <Footer />
        </Fragment>
    );
}