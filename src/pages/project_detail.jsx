import projects from '../data/projects.json'
const workList = projects
import { useParams, Link } from 'react-router-dom';

const ProjectDatil = () => {
    const { projectId } = useParams();
    const project = workList.find((item) => item.id === projectId);

    return (
        <div className="content" style={{ padding: '20px' }}>
            <nav>
                <Link to="/all-works">← Back to Works</Link>
                <br></br>
            </nav>
            <h1 className="project-title" style={{ margin: 'auto' }}>{project.title}</h1>
            <h4 className="project-description">{project.description}</h4>
            {
                project.content.map((item) => {
                    if (item.type === "text") {
                        return <p>{item.value}</p>
                    }
                    if (item.type === "image") {
                        return <img src={item.src} alt="Haixin Zhou" style={{ width: '80%', margin: 'auto' }} />
                    }
                    if (item.type === "embed") {
                        return (
                            <div
                                dangerouslySetInnerHTML={{ __html: item.code }}
                                style={{ width: '100%', textAlign: 'center' }}
                            />
                        )
                    }
                })
            }
        </div>

    );
}

export default ProjectDatil