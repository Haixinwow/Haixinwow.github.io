import ScrollTop from "../scroll_top";

const Resume = () => {
    return(
        <div className="content" id='top'>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto'}}>
                <h1 style={{ margin: 'auto' }}>RESUME</h1>
            </div>
            <iframe src="./assets/Resume_CS.pdf" width="100%" height="100%"></iframe>
            <ScrollTop />
        </div>
    );
}

export default Resume