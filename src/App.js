import React from 'react';
import Image from 'react-bootstrap/Image'
import './App.css';
import headshot from './headshot.jpg'
import Button from 'react-bootstrap/Button'
function App() {
  return (
    
    <div className="App">
      
      <div className="App-header">
        <div  style={{justifyContent:"left", marginLeft:"10px"}}>
          <h1 className="h1-header">Rohan Koduri</h1>
        </div>
        <div style={{justifyContent: "flex-end"}}>
        <a className="a-header" href="#">Contact Me</a>
        
          <a className="a-header" href="#">About Me</a>
          <a className="a-header" href="#">My Experience</a>
          <a className="a-header" href="#">Home</a>
        </div>
      </div>
      <div className="App-body">

        <div className = "About-Me">
          <img className="photo" src={headshot} />
            <p style={{ marginRight: "25px", fontFamily: "Impact"}}>Programmer By Trade. Traveller by Heart.</p>
            <div style={{ fontSize:"14px", marginRight: "12px", marginLeft: "12px"}}> 
              I am Rohan Koduri, a 2019 graduate from the School of Engineering and Applied Science within the University of Virginia with a B.S. in Computer Science and Minor in Business. Ever since, I have been working as a Software Developer. 
              However, I've managed to find time for other things. I've been to 29 countries in my short life, each of which has taught me so much.....
            </div>
            <a style={{marginTop:"35px"}} href="https://www.w3docs.com/" class="button">MORE ABOUT ROHAN > </a>        
        </div>


      </div>
    </div>
  );
}

export default App;