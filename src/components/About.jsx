import React from 'react'

export default function About() {
    return (
        <section className="about-me">
            <div className="div-about">
                <h2>About</h2>
                <p>I am a Graduate Frontend Developer with a particular interest 
                in making things simple and automating daily tasks. 
                I try to keep up with security and best practices,
                and am always looking for new things to learn.</p>

                <p>Web development has offered me an engaging challenge 
                to continually learn (I am learning React and JavaScript)
                and improve my skills in creating high quality web pages and applications.</p>
                
                <p>I am also a current student at Canberra Institute
                of Technology exploring 
                Cyber Security field while completing my Certificate 4.</p>
                <p>I have a passion to help 
                community in tackling cyber attacks and making our cyber space secure,
                and want to make my contributition into this in the future.
                </p>
             </div>
             <div className="div-skills">
                <div className="tech-skills">
                    <h4>Tech Skills</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>GitHub</li>
                        <li>Git</li>  
                    </ul>
                </div>
                <div className="trans-skills">
                    <h4>Transferable Skills</h4>
                    <ul>
                        <li>Adaptability</li>
                        <li>Communication</li>
                        <li>Team Work</li>
                        <li>Personal Responsibility</li>
                    </ul> 
                </div>      
             </div>

        </section>
    )
}