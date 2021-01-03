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
                <strong>Secure Data Fabric®</strong>: <p>Owner of Audit Trail Component. Planned, gathered requirements, and completed Architecture & Design for entire component. Planned, developed, & tested multiple microservices and APIs for component in GOlang that were deployed via ansible playbook and terraform to AWS. Addiontally worked on UI, building website from scratch using React & Typescript based on UX design</p>
                <strong>DIA MARS</strong>: <p>Worked on UI using React Framework, creating multiple pages and writing multiple services demoed directly to client to show full scope of the solution. Utilized the Data Virtualization platform Denodo within Windows and Linux EC2 environments to create a virtual data mart, data lake, data services, developed data catalog, & complex tables using a variety of data types from open source collections</p>
                <h2>The Motley Fool</h2><p>Worked within a Python environment using the Wagtail Framework, Django Admin, Django template tags, and Redis database in order to debug, update, and add new features for both packages and an internal Content Management System. Interacted with internal and external APIs to update/add new features in order to better track stock portfolios. Contributed to Wagtail Open Source Framework by conceptualizing, planning and executing my own package to allow users to tag pages as a “favorite”, which allows pages to be found easily and/or cloned for A/B testing.</p>
                <h2>Teaching Assitant</h2><p>Closely worked with undergraduates to help them gain a better knowledge of Java through office hours and reviews. Gained skills in communication and a stronger understanding of Java</p>
            </div>
            <div className="work-experience-cards-2">
                <h1>Volunteering Experience:</h1>
                <h2>Excess to Needs</h2> <p>Working on a volunteer basis as part of a Non-Profit, whose goal is to provide a match as well as a means of transportation between organizations who have excess resources to charities in need. Improving RESTful API’s using ElasticSearch hosted on AWS EC2 instance to use cleaner logic to find matches between donors and recipients based on location. Using Kibana and Logstash to monitor data and perform analytics in order to improve API’s
</p>
                <h2>Youth Soccer Coach</h2> <p>Coach youth soccer players weekly to teach skills and foster teamwork</p>
                <h2>Habitat for Humanity</h2> <p>Built dozens of houses for economically disadvantaged in Suffolk and Charlottesville</p>
            </div>
        </div>
    );   
    }
    
    export default Experience;