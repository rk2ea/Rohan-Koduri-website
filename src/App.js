import React from 'react';
import Image from 'react-bootstrap/Image'
import './App.css';
import './headshot.jpg'
import { Container, Row, Col } from 'reactstrap';
function App() {
  return (
    
    <div className="App">
      
      <div className="App-header">
        <div style={{justifyContent:"left", marginLeft:"10px"}}>
          <h1 >Rohan Koduri</h1>
        </div>
        <div style={{justifyContent: "flex-end"}}>
        <a href="#">Contact Me</a>
        
          <a href="#">About Me</a>
          <a href="#">My Experience</a>
          <a  href="#">Home</a>
        </div>
      </div>
      <div className="App-body">
      <Image src="./headshot.jpg" roundedCircle />

      </div>
    </div>
  );
}

export default App;