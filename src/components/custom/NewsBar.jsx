const styles = {
    ContainerStyle: `flex gap-6 text-xl font-medium whitespace-nowrap animate-marquee my-5`,
}
export const NewsBar = () => {
    return (
        <article className={styles.ContainerStyle}>
            <span>New AI-Powered Tool Transforms Web Development!</span>
            <span>Major Breakthrough in Quantum Computing Announced Today!</span>
            <span>Space Exploration: NASA Confirms New Mission to Mars!</span>
            <span>Cryptocurrency Sees Major Surge in Value Following New Regulations!</span>
            <span>New AI-Powered Tool Transforms Web Development!</span>
            <span>Major Breakthrough in Quantum Computing Announced Today!</span>
            <span>Space Exploration: NASA Confirms New Mission to Mars!</span>
            <span>Cryptocurrency Sees Major Surge in Value Following New Regulations!</span>
        </article>
    )
}