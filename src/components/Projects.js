import './Projects.css'
import Bike_Application from './images/bike-application.png';

function projects() {
    return (
        <div className='project-section' id='projects'>
            <div className='head-text'>
                <h1>Projects</h1>
            </div>
            <div className='project'>
                <div className="project-card">
                    <div className='project-img'>
                        <img src={Bike_Application} alt="img" />
                    </div>
                    <div className='project-info'>
                        <p className="title">project name</p>
                        <p className='description'>Developed a fully responsive bike store website using HTML5,
                            CSS3, and React.js, featuring interactive components like
                            purchase modals, FAQ accordions, and product showcases
                            optimized with Flexbox, Grid, and image filters for cross-device
                            compatibility and performance.</p>
                        <a href="/" target="_blank">GitHub</a>
                        <a href="/" target="_blank">Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className='project-img'>
                        <img src={Bike_Application} alt="img" />
                    </div>
                    <div className='project-info'>
                        <p className="title">project name</p>
                        <p className='description'>Developed a fully responsive bike store website using HTML5,
                            CSS3, and React.js, featuring interactive components like
                            purchase modals, FAQ accordions, and product showcases
                            optimized with Flexbox, Grid, and image filters for cross-device
                            compatibility and performance.</p>
                        <a href="/" target="_blank">GitHub</a>
                        <a href="/" target="_blank">Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className='project-img'>
                        <img src={Bike_Application} alt="img" />
                    </div>
                    <div className='project-info'>
                        <p className="title">project name</p>
                        <p className='description'>Developed a fully responsive bike store website using HTML5,
                            CSS3, and React.js, featuring interactive components like
                            purchase modals, FAQ accordions, and product showcases
                            optimized with Flexbox, Grid, and image filters for cross-device
                            compatibility and performance.</p>
                        <a href="/" target="_blank">GitHub</a>
                        <a href="/" target="_blank">Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className='project-img'>
                        <img src={Bike_Application} alt="img" />
                    </div>
                    <div className='project-info'>
                        <p className="title">project name</p>
                        <p className='description'>Developed a fully responsive bike store website using HTML5,
                            CSS3, and React.js, featuring interactive components like
                            purchase modals, FAQ accordions, and product showcases
                            optimized with Flexbox, Grid, and image filters for cross-device
                            compatibility and performance.</p>
                        <a href="/" target="_blank">GitHub</a>
                        <a href="/" target="_blank">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects;