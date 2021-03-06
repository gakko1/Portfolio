import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import About from '../About/About';
import Resume from '../Resume/Resume';
import Projects from '../Resume/Resume';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header" />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
