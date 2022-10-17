const Projects = () => {

    return(
        <section id="Projects">
            <h3>Recent Projects</h3>
            
            <div className="project-container">
                <div className="project-tile">
                    <div className="project-detail">
                        <h3 title="">virtual-drum</h3>
                        <p className="description">Online Virtual Drum </p>

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
                </div>

                <div className="project-tile">

                    <div className="project-detail">
                        <h3 title="">md-editor</h3>
                        <p className="description">markdown editor with a live preview</p>

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

                <div className="project-tile">
                    <div className="project-detail">
                        <h3 title="">make-border-radius</h3>
                        <p className="description">CSS generator tool for border-radius, fast and easy to use.</p>

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

                <div className="project-tile">

                    <div className="project-detail">
                        <h3 title="">random-quote-machine</h3>
                        <p className="description">Random Quote Generator, share to twitter</p>

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

        </section>
    );
}
export default Projects;