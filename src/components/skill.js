import './skill.css';
import python from './images/Python.svg';
import django from './images/Django.svg';
import mysql from './images/MySQL.svg';
import react from './images/React.svg';
import javascript from './images/JavaScript.svg';
import html from './images/HTML5.svg';
import css from './images/CSS3.svg';


function Skills(){
    return(
        <div className='skills' id='skills'>
            <h1>Skills</h1>
            <div className='container'>
                <div className='tech'>
                    <img src={python} alt='img'/>
                </div>
                <div className='tech'>
                    <img src={html} alt='img'/>
                </div>
                <div className='tech'>
                    <img src={css} alt='img'/>
                    
                </div>
                <div className='tech'>
                    <img src={javascript} alt='img'/> 
                </div>
                <div className='tech'>
                    <img src={django} alt='img'/>
                    
                </div>
                <div className='tech'>
                    <img src={react} alt='img'/>
                    
                </div>
                <div className='tech'>
                    <img src={mysql} alt='img'/>
                </div>
            </div>           
        </div>
    )
}

export default Skills