import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = () => (
  <Sidebar
    as={Menu}
    animation='overlay'
    icon='labeled'
    vertical
    visible
    width='thin'
    color='green'
  >
    <Menu.Item as='a'>
      INVENTORUM
      <Icon name='minus' />
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Product Management
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
);

export default Navbar;
