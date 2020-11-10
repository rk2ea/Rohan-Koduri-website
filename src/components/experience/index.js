import React from 'react';
import ScrollArrow from '../../components/ScrollArrow'
import './experience.css'

function Experience() {
    return(
        <div style={{color:"black"}}>
            <div style={{marginLeft:"280px"}}><ScrollArrow/> </div> 
            <div style={{marginTop:"65px"}} className="experience-cards">
                <h1>Skills:</h1>
                <li><b>Programming Languages:</b> Java, Python (Django, Wagtail), GoLang, Javascript (React, Node), HTML/CSS</li>
                <br></br>
                <li><b>Other Skills:</b> AWS services (EC2, S3, Lambda, SQS, QLDB, DynamoDB, ElasticSearch, Fargate, API Gateway), UNIX environment, Agile Workflow, JIRA, Git, Microsoft Office, Denodo Data Virtualization Tool</li>
                <br></br>
                <li>Check out my github for the codebase to this website and more: <a target="_blank" href="https://www.github.com/rk2ea">github.com/rk2ea</a> </li>
            </div>
            <div  className="experience-cards">
                <h1>Education:</h1>
                <li>Graduated from the University of Virginia in May 2019 with <b>distinction</b> with a B.S. in Computer Science from the School of Engineering & Applied Sciences and Minor in Business from the McIntire School of Commerce</li>
                <br></br>
                <li><b>Relevant Courses taken:</b> Programming and Data Structures, Advanced Software Development, Algorithms, Computer Architecture, Artifical Intelligence, Operating Systems, Cloud Computing, Database Systems</li>
                <br></br>
                <li>Graduated from Nansemond-Suffolk Academy in 2015</li>
            </div>
            <div  className="work-experience-cards">
                <h1>Work Experience:</h1>
                <h2>CGI</h2>
                <h4>Secure Data Fabric®</h4>
                <h4>DIA MARS</h4>
                <h2>The Motley Fool</h2>
                <h2>Teaching Assitant</h2>
            </div>
            <div className="work-experience-cards">
                <h1>Volunteering Experience:</h1>
                <h2>Excess to Needs</h2>
                <h2>Youth Soccer Coach</h2>
                <h2>Habitat for Humanity</h2>
            </div>
        </div>
    );   
    }
    
    export default Experience;