import { useParams } from "react-router-dom";
import { ProjectList } from "../../data/data";
// import GitHubIcon from '@mui/icons-material/GitHub';
import "./project-display.styles.css";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img src={project.image} alt=""/>
            <h1>
                <b>Skills:</b> {project.skills}
            </h1>
            {/* <GitHubIcon /> */}
            <p>
                {project.description}
            </p>
        </div>
    );
}

export default ProjectDisplay;