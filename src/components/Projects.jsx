import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

    const [view, setView] = useState(false)

    return(
        <section id="Projects">

            <div id="recent-projects">
                <h2>Recent Projects</h2>  
                <div className="project-container">
                    <div className="project-tile anchored large">
                        <div className="project-detail">
                            <h3 title="">virtual-drum</h3>
                            <p className="description">Online Virtual Drum </p>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>ReactJS</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://online-virtual-drum.netlify.app/" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://github.com/m-dennisgocong/virtual-drum" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                        
                    </div>

                    <div className="project-tile anchored large">

                        <div className="project-detail">
                            <h3 title="">md-editor</h3>
                            <p className="description">markdown editor with a live preview</p>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>ReactJS</li>
                                <li>API</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://m-dennisgocong.github.io/md-editor/" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://github.com/m-dennisgocong/md-editor" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                    </div>

                    <div className="project-tile anchored large">
                        <div className="project-detail">
                            <h3 title="">make-border-radius</h3>
                            <p className="description">CSS generator tool for border-radius, fast and easy to use.</p>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://make-border-radius.netlify.app/" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://github.com/m-dennisgocong/make-border-radius" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                        
                    </div>

                    <div className="project-tile anchored large">

                        <div className="project-detail">
                            <h3 title="">random-quote-machine</h3>
                            <p className="description">Random Quote Generator, share to twitter</p>
                        
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>ReactJS</li>
                                <li>API</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://m-dennisgocong.github.io/random-quote-machine/" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://github.com/m-dennisgocong/random-quote-machine" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                
                    </div>
                </div>

                
            </div>
            
            <div style={view ? {display : 'none'} : null} id="view-more-container"><button className="more-projects" onClick={()=> setView(!view)}>View more</button></div>

            { view && 

            <div id="FreeCodeCamp-projects">
                <h2>FreeCodeCamp(Projects)</h2> 
                <p>This is my projects for <a href="https://www.freecodecamp.org/learn/responsive-web-design/#responsive-web-design-projects" target="_blank">Responsive Web Design</a> course on freeCodeCamp.
                I was able to earn a <a href="https://www.freecodecamp.org/certification/gocs/responsive-web-design" target="_blank">Certification</a> for completing the following: </p> 
                <div className="project-container">
                    <div className="project-tile anchored large">
                        <div className="project-detail">
                            <h3 title="">Technical Documentation Page</h3>
                            <p className="description">JavaScript technical documentation page</p>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://codepen.io/dennisgocong/full/VwyogOx" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://codepen.io/dennisgocong/pen/VwyogOx" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                    </div>

                    <div className="project-tile anchored large">

                        <div className="project-detail">
                            <h3 title="">Personal Portfolio Webpage</h3>
                            <p className="description">My first personal portfolio webpage</p>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://codepen.io/dennisgocong/full/xxYENXR" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://codepen.io/dennisgocong/pen/xxYENXR" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                        
                    </div>

                    <div className="project-tile anchored large">

                        <div className="project-detail">
                            <h3 title="">Product Landing Page Landing</h3>
                            <p className="description">Created my own product landing page for Victoria's Secret</p>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://codepen.io/dennisgocong/full/BaJEKja" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://codepen.io/dennisgocong/pen/BaJEKja" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                
                    </div>

                    <div className="project-tile anchored large">
                        <div className="project-detail">
                            <h3 title="">Survey Form</h3>
                            <p className="description">A fitness suite survey form</p>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://codepen.io/dennisgocong/full/xxXNKvK" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://codepen.io/dennisgocong/pen/xxXNKvK" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                    
                    </div>

                    <div className="project-tile anchored large">

                        <div className="project-detail">
                            <h3 title="">Tribute Page</h3>
                            <p>A tribute page for Dr. Norman Borlaug</p>
                            <ul className="tech-stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://codepen.io/dennisgocong/full/NWaLmbB" className="demo-link" target="_blank">Demo <FaExternalLinkAlt className="link-icons"/></a>
                            <a href="https://codepen.io/dennisgocong/pen/NWaLmbB" className="source-link" target="_blank">Source <FaExternalLinkAlt className="link-icons"/></a>
                        </div>
                    
                    </div>
                    
                </div> 

            </div>}
            
        </section>
    );
}
export default Projects;