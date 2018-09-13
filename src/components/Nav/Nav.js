import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="Resume"
          active={activeItem === 'Resume'}
          onClick={this.handleItemClick}
          as={Link}
          to="/resume"
        />
        <Menu.Item
          name="Projects"
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
          as={Link}
          to="/projects"
        />
      </Menu>
    );
  }
}

export default withRouter(Nav);
