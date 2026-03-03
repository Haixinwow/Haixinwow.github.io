import projects from '../data/projects.json'
import './project_detail.css'
import RenderContent from './render_content';
import ScrollTop from '../scroll_top';
const workList = projects
import { useParams, Link, useLocation } from 'react-router-dom';

const ProjectDatil = () => {
    const { projectId } = useParams();
    const project = workList.find((item) => item.id === projectId);
    

    return (
        <div className="content" id='top'>
            <nav className="backnav">
                <Link to="/all-works" className='backbtn'>← Back to Works</Link>
            </nav>
            <h1 className="project-title">{project.title}</h1>
            <h4 className="project-description">{project.description}</h4>
            <RenderContent items={project.content} />
            <ScrollTop />
        </div>

    );
}

export default ProjectDatil