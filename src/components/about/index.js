import React from 'react';
import ScrollArrow from '../../components/ScrollArrow'
import Accordion from '../../components/accordion'



function About() {
    return(
        <div>  
        <div><ScrollArrow/> </div> 
           <div>
            <iframe title="myFrame" src="https://www.google.com/maps/d/embed?mid=1VaFPnBPsY4J398dDAXG_BKtWJvjwKEb_" width="640" height="480"></iframe>
           </div>
           <div>
           <Accordion
             title="Argentina"
             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
           </div>
        </div>
    );   
}

export default About;
