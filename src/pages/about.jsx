import '../App.css'
import './about.css'

const About = () => {
    return (
        <div className="content">
            <div style={{ margin: 'auto', fontSize: '20px' }}><h1>ABOUT</h1></div>
            <div className="about-container">

                <section className="about-hero">
                    <img src="./assets/profile.jpg" alt="Haixin Zhou" className="profile-image" />

                    <div className="about-text">
                        <h1>Hello, I'm Haixin Zhou</h1>
                        <h2>Software Engineer | M.S. Computer Science</h2>

                        <p>
                            I am a Software Engineer with a Master of Science in Computer Science from Washington University in St. Louis. My work centers on building intelligent developer tools with a strong emphasis on human centered design and frontend engineering. I am particularly interested in designing intuitive, accessible interfaces and leveraging large language models to improve how programmers understand, navigate, and interact with code.
                        </p>

                        <p>
                            As a current Graduate Researcher, I designed and co-developed the CodeHistory extension, a VS Code extension integrating LLM APIs for code summarization, question answering, and development history exploration.
                        </p>
                    </div>
                </section>
                <hr />
                <section className="skills-section">
                    <h3>Technical Skills</h3>

                    <div className="skills-grid">
                        <div className="skill-group">
                            <h4>Programming Languages</h4>
                            <ul>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>HTML & CSS</li>
                                <li>PHP</li>
                                <li>SML</li>
                            </ul>
                        </div>

                        <div className="skill-group">
                            <h4>Web & Backend</h4>
                            <ul>
                                <li>Node.js</li>
                                <li>REST APIs</li>
                                <li>Flask</li>
                                <li>DOM Manipulation</li>
                            </ul>
                        </div>

                        <div className="skill-group">
                            <h4>Tools & Design</h4>
                            <ul>
                                <li>Figma</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                                <li>Adobe InDesign</li>
                            </ul>
                        </div>

                        <div className="skill-group">
                            <h4>Core Concepts</h4>
                            <ul>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                                <li>Object Oriented Programming</li>
                                <li>Parallel Programming</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="about-personal">
                    <h3>Beyond Research</h3>
                    <div className="personal-text-container">
                        <div className="personal-text">
                            <p>
                                Beyond research, I have a lot of teaching experience in algorithms and web development, where I led teaching teams, mentored students, and supported large undergraduate courses. I enjoy translating complex technical concepts into clear, structured solutions.
                            </p>

                            <p>
                                I come from a background in both Computer Science and Architecture, which has shaped the way I think about building software. I care about designing systems that are well structured, easy to use, and visually thoughtful. I believe there is no "not tech savvy" people but only interfaces with bad designs.
                            </p>

                            <h4>More About me</h4>
                            <p>
                                Originally from Beijing and raised in California, I am fluent in Mandarin and English. Outside of work, I enjoy drawing, playing badminton, and spending time with my golden retriever, Jojo. I am also a longtime foster with Stray Rescue, helping cats and kittens find their forever homes. I “foster failed” with my own cat, Cleo, but I continue to foster and care for other cats as they wait to be adopted.
                            </p>
                        </div>

                        <img src="./assets/jojobabi.jpg" alt="Jojo the golden retriever" className="jojo-image" />
                    </div>
                    <div className="kitties" style={{margin: 'auto'}}>
                        <div style={{ margin: 'auto'}}>
                            <img src="./assets/cleo-and-lurch.jpg" alt="Cleo and Lurch" className="kitty-image"/>
                            <p className='kitty-description'>Cleo and foster kitty Lurch</p>
                        </div>
                        <div style={{ margin: 'auto'}}>
                            <img src="./assets/lulu.jpg" alt=" Cleo and Lulu" className="kitty-image"/>
                             <p className='kitty-description'>Foster kitty Lulu</p>
                        </div>
                        
                    </div>
                </section>

            </div>
        </div>
    );
}

export default About