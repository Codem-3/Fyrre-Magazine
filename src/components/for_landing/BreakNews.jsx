import React from 'react'

export const BreakNews = () => {
    const styles = {
        ContainerStyle: `flex items-center bg-secondaryColor text-primaryColor overflow-hidden`,
        BreakingStyle: `text-nowrap font-semibold px-2 py-2 sm:p-5 bg-primaryColor text-secondaryColor border-2 border-secondaryColor z-10`,
        ParagraphStyle: `flex gap-3 whitespace-nowrap animate-marquee`,
    }
    return (
        <main className={styles.ContainerStyle}>
            <div className={styles.BreakingStyle}><p className="animate-pulse">Breaking News</p></div>
            <p className={styles.ParagraphStyle}>
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