import React from 'react';
import { useParams } from 'react-router-dom';
// Database 
import data from '@/data/Authors.json';

export const AuthorDetailsPage = () => {
    const { id } = useParams();
    const author = data.profiles.find(author => author.id === parseInt(id));

    if (!author) {
        return <p>Author not found</p>;
    }

    return (
        <main className='mx-20'>
            <section className='w-full flex justify-center my-12'>
                <img
                    src={author.image}
                    alt={author.name}
                    className="w-48 h-48 object-center object-cover rounded-full"
                />
            </section>
            <section className='flex flex-col items-center'>
                <p className="font-bold text-3xl">{author.name}</p>
                <p className='text-sm mt-2'>Job: {author.job}</p>
                <p className='text-sm mt-2'>City: {author.city}</p>
                <p className='text-base mt-4'>{author.description}</p>
            </section>
        </main>
    );
}