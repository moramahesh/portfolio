import './Projects.css'
import Bike_Application from './images/bike-application.png';
import to_do from './images/to-do.png';
import tictactoe from './images/tic-tac-toe.png';

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
                        <p className="title">Bike Application</p>
                        <p className='description'>Developed a fully responsive bike store website using HTML5,
                            CSS3, and React.js, featuring interactive components like
                            purchase modals, FAQ accordions, and product showcases
                            optimized with Flexbox, Grid, and image filters for cross-device
                            compatibility and performance.</p>
                        <a href="https://github.com/moramahesh/Bike-Application" target="_blank" rel='noopener noreferrer'>GitHub</a>
                        <a href="/" target="_blank">Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className='project-img tictactoe' >
                        <img src={tictactoe} alt="img" />
                    </div>
                    <div className='project-info'>
                        <p className="title">Tic Tac Toe</p>
                        <p className='description'>This is a web-based Tic-Tac-Toe game featuring a home page where players can enter their names and start the game. The game page provides a classic 3x3 grid with interactive gameplay, a reset button to restart the match, and an exit button to return to the home page. The application dynamically alerts the winner’s name at the end of the game or notifies the players if the match results in a draw, ensuring a simple yet engaging user experience.</p>
                        <a href="https://github.com/moramahesh/MiniProjects/tree/main/tictactoe" target="_blank" rel='noopener noreferrer'>GitHub</a>
                        <a href="/" target="_blank">Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className='project-img'>
                        <img src={to_do} alt="img" />
                    </div>
                    <div className='project-info'>
                        <p className="title">To Do Application</p>
                        <p className='description'>This is a simple and interactive To-Do application that allows users to efficiently manage their daily tasks. It features an input box and an Add button to create new tasks, which are then displayed in a task list. Each task has a Done button beside it, and clicking the button removes the completed task from the list, providing a clean and organized task management experience.</p>
                        <a href="https://github.com/moramahesh/MiniProjects/tree/main/todo" target="_blank" rel='noopener noreferrer'>GitHub</a>
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