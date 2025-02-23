import { Link } from 'react-router-dom';
// Components
import { Header, Footer } from '@/components'
// Icons
import { AuthorIcon, RightArrowIcon } from '@/utils/icons.util';
// Data
import data from '@/data/Authors.json'

const styles = {
    linkStyle: `flex gap-2 transition-all hover:text-[#B17457] duration-300 items-center`,
    imgStyle: `w-full h-full object-center object-cover rounded-lg hover:scale-105 transition-all duration-300`
}

export const AuthorsPage = () => {
    return (
        <>
            <Header
                FirstNav="Home" FirstNavLink="/"
                SecondNav="Magazine" SecondNavLink="/magazine"
                ThirdNav="Podcast" ThirdNavLink="/podcast"
            />
            <main className="mx-5 xl:mx-20 my-12">

                <section className="w-full flex justify-center my-12">
                    <AuthorIcon />
                </section>

                {/* Authors Data Card */}
                <section className="flex flex-col gap-8">
                    {data.profiles.map((authors, index) => (
                        <Fragment key={index}>
                            <section className="flex flex-col md:flex-row gap-5 items-center">
                                <div className="relative w-64 h-64 md:w-[150px] md:h-[150px] flex-shrink-0">
                                    <img
                                        src={authors.image}
                                        alt={authors.title}
                                        className={styles.imgStyle}
                                    />
                                </div>
                                <span className="flex flex-col md:flex-row gap-5 justify-between md:pl-6 items-center w-full">
                                    {/* Authors Title & Description */}
                                    <p className="font-bold text-3xl">{authors.name}</p>
                                    {/* Authors Details */}
                                    <article className="flex justify-between items-center">
                                        <span className="flex text-sm gap-5 lg:gap-24 items-center">
                                            <p><strong>Job</strong> {authors.job}</p>
                                            <p><strong>City</strong> {authors.city}</p>
                                            <Link to={`/authors/${authors.id}`} className={styles.linkStyle}>
                                                <p className="uppercase font-bold vsm:text-lg">About</p>
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
        </>
    )
}