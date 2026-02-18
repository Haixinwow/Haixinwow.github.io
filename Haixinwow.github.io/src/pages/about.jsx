const About = () => {
    return (
        <div className="content">
            <h1>ABOUT</h1>
            <div>
                <div style={{ display: 'flex', flexDirection: 'row'}} >
                    <img src="./assets/profile.jpg" style={{ width: '30%', margin: 'auto'}} />
                    <p>
                        Hi, Haixin here! I am a recent graduate from Washington University in St. Louis with a Master of Science in Computer Science. This website contains my collection of works during my almost 7 years at Washington University in St. Louis. Thank you for visiting my website!
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <p>
                        A little more about me:
                        I was born and raised in Beijing, China, and I moved to California when I was in middle school. I speak both Mandarin and English fluently, and I am currently learning Spanish as well.
                        In my free time, I enjoy drawing and playing badminton. I have been drawing since I can remember, and I draw whenever I have free time. I also have a golden retriever named Jojo, and I love spending time with him.
                    </p>
                    <img src="./assets/jojobabi.jpg" style={{ width: '50%' }} />
                </div>
            </div>
        </div>
    );
}

export default About