 import './About.css';
 import profile from './images/profile.jpg';
 
 
 function about(){
   return(
      <div className="about" id="about">
         <h1>About</h1>
         <div className='about-container'>
            <div className="profile-pic"><img src={profile} alt='img'/></div>
            <p className="about-info">I am a passionate and dedicated developer with a strong command of front-end technologies like HTML, CSS, JavaScript and React.Js, combined with
            solid back-end expertise in Python and MySQL.I thrive on building seamless, responsive, and impactful web experiences from the ground up.</p>
         </div> 
      </div>
   )
 }

export default about;
   
   
   
   
   
   
   
   
   
 