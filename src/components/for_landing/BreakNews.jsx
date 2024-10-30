import React from 'react'

export const BreakNews = () => {
    return (
        <main className="flex items-center bg-secondaryColor text-primaryColor overflow-hidden">
            <div className="text-nowrap font-semibold px-2 py-2 sm:p-5 bg-primaryColor text-secondaryColor border-2 border-secondaryColor z-10">Breaking News</div>
            <p className="flex gap-3 whitespace-nowrap animate-marquee">
                <p>Electric Vehicles Expected to Dominate the Market by 2030!</p>
                <p>E-commerce Platforms See Significant Growth During Holiday Season!</p>
                <p>AI Diagnoses Diseases Faster Than Ever!</p>
                <p>Electric Vehicles Expected to Dominate the Market by 2030!</p>
                <p>E-commerce Platforms See Significant Growth During Holiday Season!</p>
                <p>AI Diagnoses Diseases Faster Than Ever!</p>
            </p>
        </main>
    )
}