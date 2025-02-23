import { Link } from 'react-router-dom';
import data from '@/data/Magazine.json' // Data
import { RightArrowIcon } from '@/utils/icons.util' // Icons

const styles = {
    BoldStyle: `font-bold`,
}
export const MagazineCard = () => {
    return (
        <main>
            {/* Magazine */}
            {data.cards.map((categoryItem, index) => (
                <section key={index}>
                    <div className="mb-12">
                        {/* Get only to card form each Category */}
                        {categoryItem.card.slice(0, 2).map((cardItem, idx) => (
                            <span key={cardItem.title}>
                                <Link to={`/magazine/${cardItem.id}`} className="block">
                                    <div key={idx} className="flex flex-col md:flex-row md:gap-10">
                                        <div className="md:w-96 h-72 flex-shrink-0">
                                            <img src={cardItem.image.src} alt={cardItem.title} className="w-full h-full object-cover rounded hover:scale-105 transition-all duration-300" />
                                        </div>
                                        <span className="flex flex-col justify-between py-5">
                                            {/* Magazine Title & Description */}
                                            <div>
                                                <p className={`${styles.BoldStyle} text-3xl`}>{cardItem.title}</p>
                                                <p className="mt-3 line-clamp-5 my-5 text-sm vsm:text-base">{cardItem.description}</p>
                                            </div>
                                            {/* Magazine Details */}
                                            <div className="flex justify-between items-center">
                                                <span className="flex flex-col xl:flex-row text-sm gap-2">
                                                    <p><span className={styles.BoldStyle}>Text</span> {cardItem.meta.author}</p>
                                                    <p><span className={styles.BoldStyle}>Date</span> {cardItem.meta.date}</p>
                                                    <p><span className={styles.BoldStyle}>Read</span> {cardItem.meta.readTime}</p>
                                                </span>
                                                <button className="uppercase px-3 py-2 border border-secondaryColor dark:border-primaryColor rounded-full text-xs hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300">{categoryItem.category}</button>
                                            </div>
                                        </span>
                                    </div>

                                    {/* Hide Line After Last Card */}
                                    {!(idx === categoryItem.card.slice(0, 2).length - 1 && index === data.cards.length - 1) && (
                                        <hr className="border border-black/30 dark:border-primaryColor my-12" />
                                    )}
                                </Link>
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