import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const Date = styled.p`
  font-size: 12px;
`
class Writing extends Component {
  render() {
    return (
      <div>
        <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Programming/Scripting Language:</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Python</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>Java</li>
                <li>C#</li>
                <li>SQL</li>
                <li>R</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>AWS</li>
                <li>JSON</li>
                
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      
        <div>
          <CenteredHeader>I write about tech, life, and personal development.</CenteredHeader>
        </div>
        <h5>Tech-related:</h5>
        
        <ul>
          <li>
            {/*<a href="https://medium.com/personal-growth/f-ck-impostor-syndrome-im-finally-learning-to-code-a9b9328d73d9" target="_blank">F*ck Impostor Syndrome, Im finally learning to code.</a>*/}
          

            <Date>2019-06 - 2019-11 <strong>Full Stack Web Developer</strong></Date>
            <ul>
              <li>Implement new features for an e-commerce website.</li>
              <li>Design and code for servers, services, applications and database that are reusable,
scalable and meet critical architecture goals.</li>
              <li>Design, develop, deploy and support RESTful services.</li>
              <li>Build a livestream android app using third party SDK. Using third party RESTful APIs to
connect current Android applications to back-end services.</li>
            </ul>

            <br/>
            <li>
              
              <a href="https://github.com/yaqueen887976/controlPanel" target="_blank">Control Panel</a>
              <Date>2019-12 - 2019-01 <strong>Personal Project</strong></Date>
              <ul>
                <li>One of the most recent projects I have been working on is a backend product management panel
  website for any eCommerce website. But this website was not finished yet. It contains both
  backend (PC applications) and front end applications. The website contains 4 main modules: user
  management, product category management, product management, and authority management.
  This website is React and Node-based. The front end was built with: React, Antd, Axios, ES6,
  Webpack, etc. The backend was built with: Node, Express, MongoDB, etc.</li>
              </ul>
              </li>
            </li>


          <br/>

          <li>
            <Date>2018-03 - 2018-6 <strong>Learning Spanish in VR</strong></Date>
            <ul>
              <li>The game is called “Learning Spanish in VR”. We have used Oculus Go, C# and Unity building and connecting 
                our game. The idea behind our game is to help users learn Spanish through virtual reality. 
                By utilizing virtual reality users are engaged to learn the language virtually. 
                My role in this project is Developer to help building scenes and programming in C# code for 
                character behavior and actions.</li>
            </ul>
          </li>

          <br/>
          <li>
            <Date>2019-01 - 2019-5 <strong>Capstone</strong></Date>
            <ul>
              <li>A 2D RPG Adventure game. Building some 2D scenes by Unity to connect all scenes and characters by some C# code. 
                Players need to defeat enemies, avoid obstacles, and try to hit the goal and escape from the space.</li>
            </ul>
          </li>
        </ul>

        {/*<h5>Other:</h5>*/}
        <ul>
          
        </ul>
        
      </div>
    );
  }
}

export default Writing;
