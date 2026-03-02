const ScrollTop = () => {
    const topFunction = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button onclick={topFunction} id="myBtn" title="Go to top">Top</button>
    )
}

export default ScrollTop