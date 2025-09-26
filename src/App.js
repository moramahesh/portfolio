import logo from './components/images/coding.png';
import './App.css';
import { HashRouter } from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';
import Dev_logo from './components/images/dev_logo.png';
import Contact from './components/contact';
import headreimg from './components/images/headerimg.webp';
import { useState } from 'react';
import Skills from './components/skill';
import linkedin from './components/images/LinkedIn.svg';
import github from './components/images/GitHub.svg';
import instagram from './components/images/instagram.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HashRouter>
      <div className='nav-bar'>
        <nav>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='/Maheswara_Developer_resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a></li>
          </ul>
        </nav>
      </div>
      <header>
        <div className='box'>
          <div className='inner-box'>
            <h3> Hi, I am</h3>
            <h1>Mora Maheswara Reddy</h1>
            <img src={Dev_logo} alt='img' />
            <div className="home-logos">
              <p>Follow on</p>
              <a href='https://www.linkedin.com/in/mora-maheswara-reddy-528587288' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='img'/></a>
              <a href='https://github.com/moramahesh' target='_blank' rel='noopener noreferrer'><img src={github} alt='img'/></a>
              <a href='https://www.instagram.com/maheswarareddy_mora' target='_blank' rel='noopener noreferrer'><img src={instagram} alt='img'/></a>
            </div>
          </div>
          <div className='pic-box'>
            <div className='header-img'>
              <img src={headreimg} alt='img' />
            </div>
          </div>
        </div>
      </header>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>&copy; 2025 Maheswara Reddy</footer>
      
    </HashRouter>
  );
}


export default App;
