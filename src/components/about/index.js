import React from 'react';
import ScrollArrow from '../../components/ScrollArrow'
import Accordion from '../../components/accordion'
import countries from './countries.json'
import './about.css'

function About() {
    return(
        <div className="About-Home">  
        <div style={{marginLeft:"350px"}}><ScrollArrow/> </div> 
        <div style={{marginBottom:"70px", marginTop: "70px"}} className="About-Me">
            <h1>Some Quick Facts</h1>
            <li>I was raised in Suffolk, VA and went to Nansemond-Suffolk Academy</li>
            <li>I however, through my family, am a fan of Pittsburgh sports teams and Arsenal (COYG)</li>
            <li>I played soccer for almost all my life, and still enjoy playing any kind of sport I can</li>
            <li>Lebron James is the most talented basketball player of all time, but Michael Jordan had the best career </li>
            <span style={{color:"#d5e3e3"}}>asdfsdf</span>If you have a problem with this statement, <a href="/contact" >HIT ME UP</a>
            <li>I played the violin for 12 years and saxophone for 2 years </li>
            <li>I attended the University of Virginia, graduating in 2019 with B.S. in Computer Science and Business Minor</li>
            <li>My top 5, personally: Nas, Kendrick, Kanye, JAY-Z, Drake. Objectively: Biggie, 2pac, Eminem, Nas, JAY-Z</li>
            <li>I HATE pineapple on pizza</li>
        </div>
           <div>
            <iframe title="myFrame" src="https://www.google.com/maps/d/embed?mid=1VaFPnBPsY4J398dDAXG_BKtWJvjwKEb_" width="640" height="480"></iframe>
           </div>
           <p style={{color:"black"}}>Scroll below to see when I visited a country, and one fact I remember about each one</p>
           <div>
           
            {countries.map((item) => (
                <Accordion 
                    title = {item.title}
                    content = {item.content}
                />
            ))}
           </div>
        </div>
    );   
}

export default About;
