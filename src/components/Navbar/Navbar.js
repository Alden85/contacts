import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = () => (
  <Sidebar
    as={Menu}
    icon='labeled'
    animation='overlay'
    vertical
    visible
    width='thin'
  >
    <Menu.Item className='logo' as='a'>
      <span style={{ color: '#515151' }}>INVENTORUM</span>
      <Icon color='grey' name='braille' />
    </Menu.Item>
    <Menu.Item className='menuitem' as='a'>
      <Icon color='grey' name='home' />
      <span>Home</span>
    </Menu.Item>
    <Menu.Item className='menuitem' as='a'>
      <Icon color='grey' name='clipboard' />
      <span>Product Management</span>
    </Menu.Item>
    <Menu.Item className='menuitem' as='a'>
      <Icon color='grey' name='users' />
      <span>Contacts</span>
    </Menu.Item>
    <Menu.Item className='menuitem' as='a'>
      <Icon color='grey' name='folder open' />
      <span>Orders</span>
    </Menu.Item>
    <Menu.Item className='menuitem' as='a'>
      <Icon color='grey' name='line graph' />
      <span>Reports</span>
    </Menu.Item>
    <Menu.Item className='menuitem' as='a'>
      <Icon color='grey' name='share alternate' />
      <span>API & Apps</span>
    </Menu.Item>
    <Menu.Item className='menuitem' as='a'>
      <Icon color='grey' name='lightning' />
      <span>Integration</span>
    </Menu.Item>

    <Menu.Item className='settings menuitem' as='a'>
      <Icon color='grey' name='cog' />
      <span>Settings</span>
    </Menu.Item>
  </Sidebar>
);

export default Navbar;
