import { Link } from "react-router-dom";
import projects from "../data/projects.json"
import '../App.css'
const workList = projects

const Photography = () => {
    return(
        <div className="content">
            {workList.map((work) => {
                if (work.tag === "photography") {
                    return (
                        <Link to={`/work/${work.id}`} key={work.id} className="project-cover">
                            <div className="cover-image-wrap">
                                <img className="cover__img js-lazy image-loaded" src={work.src} />
                            </div>
                            <div className="details-wrap">
                                <div className="details">
                                    <div className="details-inner">
                                        <div className="title preserve-whitespace"><b className="project-title">{work.title}</b></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            })}
        </div>
    );
}

export default Photography