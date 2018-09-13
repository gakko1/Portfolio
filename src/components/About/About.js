import React, { Component } from 'react';
import axios from 'axios';
import * as emailjs from 'emailjs-com';

import GitHub from '../../assets/github_logo.png';
import LinkedIn from '../../assets/linkedIn_logo.png';

import './About.css';

class About extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail = (senderEmail, senderName, message, templateId = 'portfolio') => {
    console.log(process.env);
    emailjs
      .send(
        'gmail',
        templateId,
        {
          senderEmail,
          senderName,
          message
        },
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(res => {
        alert('Message successfully sent!');
      })
      .catch(err => {
        console.error('Failed to send email:', err);
      });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.sendEmail(this.state.email, this.state.name, this.state.message);
  };

  inputChangeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div>
        <h1>Jacob Gakstatter</h1>
        <div>
          I graduated from Lambda School in June 2018. Making a career switch
          from sales (Sherwin Williams) to software engineering, and I've never
          felt better about a decision.
        </div>
        {/* Intro */}
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
        {/* Technologies */}
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
        {/* Hobbies */}
        <div>
          <h4>Visit my social sites:</h4>
          <a href="https://github.com/gakko1">
            <img className="logo github" src={GitHub} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/jacob-gakstatter/">
            <img className="logo linkedin" src={LinkedIn} alt="LinkedIn logo" />
          </a>
          <h4>Or contact me via this form and I'll email you back:</h4>
          <form onSubmit={e => this.onSubmitHandler(e)}>
            {/* <label for="name">Name</label> */}
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.inputChangeHandler}
            />
            {/* <label for="email">email</label> */}
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.inputChangeHandler}
            />
            {/* <label for="message">message</label> */}
            <input
              type="text"
              name="message"
              id="message"
              value={this.state.message}
              placeholder="Message to Jacob"
              onChange={this.inputChangeHandler}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default About;
