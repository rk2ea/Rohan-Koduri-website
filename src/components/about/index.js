import React from 'react';
import ScrollArrow from '../../components/ScrollArrow'
import Accordion from '../../components/accordion'
import countries from './countries.json'


function About() {
    return(
        <div>  
        <div style={{marginLeft:"350px"}}><ScrollArrow/> </div> 
           <div>
            <iframe title="myFrame" src="https://www.google.com/maps/d/embed?mid=1VaFPnBPsY4J398dDAXG_BKtWJvjwKEb_" width="640" height="480"></iframe>
           </div>
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
