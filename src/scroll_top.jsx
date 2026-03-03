const ScrollTop = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return <button onClick={handleClick} className="back-to-top">Top <i class="fa-solid fa-arrow-turn-up"></i></button>;
};

export default ScrollTop;