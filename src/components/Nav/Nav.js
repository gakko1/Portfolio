import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu inverted>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Resume'
            active={activeItem === 'Resume'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
  }