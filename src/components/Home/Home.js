import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Home--intro">
          <div>Hi, I'm Jacob</div>
          {/* image of me */}
        </div>
        <div className="Home--midSection">
          <div>Here's more about me</div>
        </div>
        <div className="Home--bottomSection">
          <div>Here are some projects I made</div>
        </div>
        <div className="Home--footer">
          <div>Take a look at my resume</div>
        </div>
      </div>
    );
  }
}

export default Home;
