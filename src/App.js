import logo from './components/images/coding.png';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';
import Dev_logo from './components/images/dev_logo.png';
import Contact from './components/contact';
import headreimg from './components/images/headerimg.webp';
import { useState } from 'react';
import Skills from './components/skill';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
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
            <li><a href='/Maheswara_Developer_resume.pdf' target='_blank' rel='noopener no referrer'>Resume</a></li>
          </ul>
        </nav>
      </div>
      <header>
        <div className='box'>
          <div className='inner-box'>
            <h3> Hi, I am</h3>
            <h1>Mora Maheswara Reddy</h1>
            <img src={Dev_logo} alt='img' />
            <div className="dropdown">
              <p>Follow on<button className="dropbtn"></button></p>
              <ul className="dropdown-content">
                <li><a href='/'>linkedIn</a></li>
                <li><a href='/'>GitHub</a></li>
                <li><a href='/'>Instagram</a></li>
                <li><a href='/'>Twitter</a></li>
              </ul>
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
    </BrowserRouter>
  );
}


export default App;
