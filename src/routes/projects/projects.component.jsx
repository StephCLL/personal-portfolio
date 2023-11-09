import ProjectCard from "../../components/project-card/project-card.component";
import { ProjectList } from "../../data/data.js"

import "./projects.styles.css"

const Projects = () => {
    return (
        <div className="projects">
            <h1> My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    return (
                    <ProjectCard id={idx} name={project.name} image={project.image} />
                    );
                })}
            </div>
      </div>
    )
}

export default Projects;