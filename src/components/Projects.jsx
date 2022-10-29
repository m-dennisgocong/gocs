import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {recentProject, moreProject} from './../data/ProjectList.js';

const Projects = () => {

    const [view, setView] = useState(false)

    // create project Elements
    const projectElements = (project) => {
        return(
            <div key={project.title} className="project-tile anchored large">
                <div className="project-detail">
                    <h3 title="">{project.title}</h3>
                    <p className="description">{project.description}</p>
                    <ul className="tech-stack">
                        {project.techstack.map((tech, index)=><li key={index}>{tech}</li>)}
                    </ul> 
                </div>
                <div className="links">
                    <a href={project.links.demo} className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                    <a href={project.links.source} className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                </div>
            </div>
        );
    }

    return(
        <section id="Projects">

            <div id="recent-projects">
                <h2>Recent Projects</h2>  
                <div className="project-container">
                    {recentProject.map((project)=> projectElements(project))}
                </div>
            </div>
            
            {/* View More */}
            <div style={view ? {display : 'none'} : null} id="view-more-container"><button className="more-projects" onClick={()=> setView(!view)}>View more</button></div>

            { view && 
                <div id="FreeCodeCamp-projects">
                    <h2>FreeCodeCamp(Projects)</h2> 
                    <p>This is my projects for <a href="https://www.freecodecamp.org/learn/responsive-web-design/#responsive-web-design-projects" target="_blank">Responsive Web Design</a> course on freeCodeCamp.
                    I was able to earn a <a href="https://www.freecodecamp.org/certification/gocs/responsive-web-design" target="_blank">Certification</a> for completing the following: </p> 
                    <div className="project-container">
                        {moreProject.map((project)=> projectElements(project))}                    
                    </div> 
                </div>
            }
            
        </section>
    );
}
export default Projects;