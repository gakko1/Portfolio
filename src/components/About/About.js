import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <div>This is the about page.</div>
        <h1>Jacob Gakstatter</h1>
        <div>I graduated from Lambda School in June 2018.</div>
        <div>
          <ul>
            <h3>Experience with these technologies:</h3>
            <li>JavaScript</li>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Node</li>
              <li>Express</li>
              <li>Mocha/Chai</li>
            </ul>
            <li>Python</li>
            <ul>
              <li>Django</li>
            </ul>
            <li>MongoDB</li>
            <ul>
              <li>Mongoose</li>
            </ul>
            <li>C</li>
            <li>HTML/CSS</li>
            <ul>
              <li>LESS</li>
            </ul>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Interests include:</h3>
            <li>Listening to LOTR lore while coding</li>
            <li>Gaming in free time - LoL, WoW, whatever strikes my fancy</li>
            <li>
              Studying languages, both programming and linguistic varieties
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
