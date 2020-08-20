import React from 'react';
import ScrollArrow from '../../components/ScrollArrow'
import './contact.css'

function Contact() {
    return(
        <div>
            <div><ScrollArrow/> </div> 
            <div className='contact-info'>
                <h2>Contact Information</h2>
                <dl style={{fontFamily:"Times", textAlign: 'left'}}>
                    <dt>LinkedIn:</dt>
                    <dd><a rel="noopener noreferrer" href='https://www.linkedin.com/in/rohan-koduri-642408139/' target='_blank'>https://www.linkedin.com/in/rohan-koduri-642408139/</a></dd>
                    <br></br>
                    <dt>Email:</dt>
                    <dd>rkoduri545@gmail.com</dd>
                    <dd>rk2ea@virginia.edu</dd>
                    <br></br>
                    <dt>Phone:</dt>
                    <dd>757-374-1852</dd>
                    <br></br>
                    <dt>Address:</dt>
                    <dd>2610 N Pershing Dr #A, Arlington, VA 22201</dd>
                </dl>
            </div>
        </div>
    );   
    }
    
    export default Contact;