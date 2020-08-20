import React from 'react';
import './home.css';
import headshot from '../../headshot.jpg'
import worker from '../../cartoon_worker.jpg'
import contact_pic from '../../contact.jpg'
import ScrollArrow from '../../components/ScrollArrow'

  

function Home() {
    return(
        <div className="Home-body">
        
           <div><ScrollArrow/> </div>   
        <div className = "About-Me">
          <img className="photo" src={headshot} />
            <p style={{ marginRight: "25px", fontFamily: "Impact"}}>Programmer By Trade. Traveller by Heart.</p>
            <div style={{ fontSize:"14px", marginRight: "12px", marginLeft: "12px"}}> 
              I am Rohan Koduri, a 2019 graduate from the School of Engineering and Applied Science within the University of Virginia with a B.S. in Computer Science and Minor in Business. Ever since, I have been working as a Software Developer. 
              However, I've managed to find time for other things. I've been to 29 countries in my short life, each of which has taught me so much about myself and other cultures.
            </div>
            <a style={{marginTop:"35px"}} href="/about" class="button">MORE ABOUT ROHAN > </a>        
        </div>
      
        <div className = "My-Experience">
        <img className="photo1" src={worker} />
        <p style={{ marginLeft: "25px", fontFamily: "Impact"}}>What Have I Been Up To?</p>
            <div style={{ fontSize:"14px", marginRight: "12px", marginLeft: "12px"}}> 
              Both inside and now outside the classroom, I've had the opportunity to work with so many interesting technologies. In the past year alone, I've learned so much
              through my involvement in the <strong>Patent Pending</strong> Secure Data Fabric®, volunteering as a developer for <a target='_blank' href='https://excesstoneeds.org/'>Excess to Needs</a>, and especially coaching youth soccer.
            </div>
            <a style={{marginTop:"35px"}} href="/experience" class="button">READ MORE ></a> 
        </div>

        <div className = "Contact-me">
        <img className="photo2" src={contact_pic} />
        <p style={{ marginLeft: "25px", fontFamily: "Impact"}}>Want to Know More?</p>
            <div style={{ fontSize:"14px", marginRight: "12px", marginLeft: "12px", marginTop:"55px"}}> 
              Listen to the guy on the left. Click below to find out how to contact me.  
            </div>
            <a style={{marginTop:"55px"}} href="/contact" class="button">CONTACT ME ></a> 
        </div>

      </div>
    );   
}

export default Home;



     