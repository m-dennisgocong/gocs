import { useState } from "react";
const Projects = () => {

    const [view, setView] = useState(false)

    return(
        <section id="Projects">

            <div id="recent-projects">
                <h2>Recent Projects</h2>  
                <div className="project-container">
                    <div className="project-tile">
                        <div className="project-detail">
                            <h3 title="">virtual-drum</h3>
                            <p className="description">Online Virtual Drum </p>
                        </div>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>ReactJS</li>
                            </ul>

                            <div className="links">
                                <div className="demo-link">Demo</div>
                                <div className="source-link">Source</div>
                            </div>
                        
                    </div>

                    <div className="project-tile">

                        <div className="project-detail">
                            <h3 title="">md-editor</h3>
                            <p className="description">markdown editor with a live preview</p>
                        </div>
                        <ul className="tech-stack">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>ReactJS</li>
                            <li>API</li>
                        </ul>
                        <div className="links">
                            <div className="demo-link">Demo</div>
                            <div className="source-link">Source</div>
                        </div>
                    </div>

                    <div className="project-tile">
                        <div className="project-detail">
                            <h3 title="">make-border-radius</h3>
                            <p className="description">CSS generator tool for border-radius, fast and easy to use.</p>
                        </div>
                        <ul className="tech-stack">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="links">
                            <div className="demo-link">Demo</div>
                            <div className="source-link">Source</div>
                        </div>
                        
                    </div>

                    <div className="project-tile">

                        <div className="project-detail">
                            <h3 title="">random-quote-machine</h3>
                            <p className="description">Random Quote Generator, share to twitter</p>
                        </div>
                        <ul className="tech-stack">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>ReactJS</li>
                            <li>API</li>
                        </ul>
                        <div className="links">
                            <div className="demo-link">Demo</div>
                            <div className="source-link">Source</div>
                        </div>
                
                    </div>
                </div>

                
            </div>
            
            <div style={view ? {display : 'none'} : null} id="view-more-container"><button className="more-projects" onClick={()=> setView(!view)}>View more</button></div>

            { view && 

            <div id="FreeCodeCamp-projects">
                <h2>FreeCodeCamp(Projects)</h2> 
                <p>This is my projects for <a href="https://www.freecodecamp.org/learn/responsive-web-design/#responsive-web-design-projects">Responsive Web Design</a> course on freeCodeCamp.
                I was able to earn a <a href="https://www.freecodecamp.org/certification/gocs/responsive-web-design">Certification</a> for completing the following: </p> 
                <div className="project-container">
                    <div className="project-tile">
                        <div className="project-detail">
                            <h3 title="">Technical Documentation Page</h3>
                        </div>
                        <ul className="tech-stack">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="links">
                            <div className="demo-link">Demo</div>
                            <div className="source-link">Source</div>
                        </div>
                    </div>

                    <div className="project-tile">

                        <div className="project-detail">
                            <h3 title="">Personal Portfolio Webpage</h3>
                        </div>
                        <ul className="tech-stack">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="links">
                            <div className="demo-link">Demo</div>
                            <div className="source-link">Source</div>
                        </div>
                        
                    </div>

                    <div className="project-tile">
                        <div className="project-detail">
                            <h3 title="">Survey Form</h3>
                        </div>
                        <ul className="tech-stack">
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <div className="links">
                            <div className="demo-link">Demo</div>
                            <div className="source-link">Source</div>
                        </div>
                    
                    </div>

                    <div className="project-tile">

                        <div className="project-detail">
                            <h3 title="">Product Landing Page</h3>
                        </div>
                        <ul className="tech-stack">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="links">
                            <div className="demo-link">Demo</div>
                            <div className="source-link">Source</div>
                        </div>
                
                    </div>

                    <div className="project-tile">

                        <div className="project-detail">
                            <h3 title="">Tribute Page</h3>
                        </div>
                        <ul className="tech-stack">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="links">
                            <div className="demo-link">Demo</div>
                            <div className="source-link">Source</div>
                        </div>
                    
                    </div>
                    
                </div> 

            </div>}
            
        </section>
    );
}
export default Projects;