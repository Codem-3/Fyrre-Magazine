import { useParams } from 'react-router-dom';
// Components
import { Header, Footer } from '@/components';
// Icons
import { InstagramIcon, TwitterIcon, WifiIcon, YoutubeIcon } from '@/utils/icons.util';
// Data
import data from '@/data/Magazine.json';

export const MagazineDetailsPage = () => {
    const { id } = useParams();
    const magazine = data.cards.flatMap(category => category.card).find(magazine => magazine.id === parseInt(id));

    if (!magazine) {
        return <p>Magazine not found</p>;
    }

    return (
        <>
            <Header
                FirstNav="Home" FirstNavLink="/"
                SecondNav="Authors" SecondNavLink="/authors"
                ThirdNav="Podcast" ThirdNavLink="/podcast"
            />

            {/* Magazine Details */}
            <main className="mx-5 xl:mx-20 mt-10 vsm:mt-20 flex flex-col lg:flex-row gap-10 vsm:gap-16">
                <aside className="vsm:min-w-96 flex flex-col items-center">
                    <img
                        src={magazine.image.src}
                        alt={magazine.title}
                        className="w-full lg:w-96 h-96 object-cover rounded-lg hover:scale-105 transition-all duration-300"
                    />
                    <div className="flex items-center justify-between w-full mt-5 border-t-2 border-secondaryColor/30 dark:border-primaryColor pt-4">
                        <h2 className="tiny:text-xl font-semibold uppercase">Follow</h2>
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
                    <h1 className="text-4xl vsm:text-7xl font-bold capitalize">{magazine.title}</h1>
                    <p className="italic text-secondaryColor/60 dark:text-primaryColor/60 text-sm vsm:text-base">{magazine.meta.date}</p>
                    <p>{magazine.sub_description}</p>
                    <p className="text-secondaryColor/60 dark:text-primaryColor/70 text-sm vsm:text-base">{magazine.description}</p>
                    <div className="flex flex-col xl:flex-row gap-2 justify-between text-sm">
                        <p><strong>Author</strong> {magazine.meta.author}</p>
                        <p><strong>Date</strong> {magazine.meta.date}</p>
                        <p><strong>Duration</strong> {magazine.meta.readTime}</p>
                    </div>
                </section>
            </main>

            <hr className="border-secondaryColor dark:border-primaryColor m-5 xl:m-20" />

            {/* Latest Posts */}
            <section className="mx-5 xl:mx-20">
                <h2 className="text-4xl vsm:text-5xl font-bold mb-10">Latest Posts</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {data.cards.flatMap(category => category.card).slice(0, 3).map((relatedArticle, idx) => (
                        relatedArticle.id !== magazine.id && (
                            <article key={idx} className="w-full md:w-[410px] mb-10 mx-auto">
                                <div className="flex flex-col gap-5">
                                    <div className="w-full h-64">
                                        <img
                                            src={relatedArticle.image.src}
                                            alt={relatedArticle.title}
                                            className="w-full h-full object-cover rounded hover:scale-105 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold">{relatedArticle.title}</h3>
                                        <div className="flex justify-center text-sm gap-10 mt-2">
                                            <span><strong>Date</strong> {relatedArticle.meta.date}</span>
                                            <span><strong>Read</strong> {relatedArticle.meta.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};