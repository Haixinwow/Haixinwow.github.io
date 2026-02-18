import projects from '../data/projects.json'
const workList = projects
import { useParams, Link } from 'react-router-dom';

const ProjectDatil = () => {
    const { projectId } = useParams();
    const project = workList.find((item) => item.id === projectId);

    return (
        <div className="project-detail-page" style={{ padding: '20px' }}>
            <nav>
                <Link to="/all-works">← Back to Works</Link>
            </nav>
        </div>

    );
}

export default ProjectDatil