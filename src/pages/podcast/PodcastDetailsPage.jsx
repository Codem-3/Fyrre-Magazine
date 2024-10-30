import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
// Components
import { Header, Footer } from '@/components';
// Icons
import { InstagramIcon, TwitterIcon, YoutubeIcon, ArrowIcon, AppleIcon, CloudIcon, SpotifyIcon } from '@/utils/icons.util';
// Data
import data from '@/data/Podcast.json';

export const PodcastDetailsPage = () => {
    const { id } = useParams();
    const podcast = data.podcasts.find(podcast => podcast.id === parseInt(id));

    if (!podcast) {
        return <p>Author not found</p>;
    }

    return (
        <Fragment>
            <Header
                FirstNav="Home" FirstNavLink="/"
                SecondNav="Magazine" SecondNavLink="/magazine"
                ThirdNav="Authors" ThirdNavLink="/authors"
            />

            {/* Podcast Details */}
            <main className="mx-20 my-20 flex gap-16">
                <aside className="min-w-96 flex flex-col items-center">
                    <div className="relative w-96 h-auto flex-shrink-0">
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
                    <div className="flex items-center justify-between w-full mt-5 border-b-2 border-secondaryColor/30 pb-4">
                        <h2 className="text-xl font-semibold">Listen On</h2>
                        <div className="flex gap-3">
                            {[SpotifyIcon, AppleIcon, CloudIcon].map((Icon, idx) => (
                                <span
                                    key={idx}
                                    className="hover:scale-125 transition-all duration-300 hover:text-[#B17457] cursor-pointer"
                                >
                                    <Icon />
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full mt-5">
                        <h2 className="text-xl font-semibold">Date</h2>
                        <p>{podcast.date}</p>
                    </div>
                    <div className="flex items-center justify-between w-full mt-5">
                        <h2 className="text-xl font-semibold">Duration</h2>
                        <p>{podcast.duration}</p>
                    </div>
                    <div className="flex items-center justify-between w-full mt-5">
                        <h2 className="text-xl font-semibold">Share</h2>
                        <div className="flex gap-3">
                            {[InstagramIcon, TwitterIcon, YoutubeIcon].map((Icon, idx) => (
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
                    <h1 className="text-7xl font-bold capitalize">{podcast.title}</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <p className="italic text-secondaryColor/60">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <p className="italic text-secondaryColor/60">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                </section>
            </main>

            <Footer />
        </Fragment>
    );
}