import React from 'react';
import { Header, Icon, Label } from 'semantic-ui-react';
import './HeaderTitle.css';

const colors = ['grey'];

const HeaderTitle = () => (
  <div className='title'>
    <Header as='h6' floated='right'>
      <div style={{ color: colors[0] }}>
        <span>Juan T.</span>
        <Label circular color={colors[0]} key={colors[0]}>
          J
        </Label>
      </div>
    </Header>
    <Header as='h3' floated='left'>
      <span style={{ color: colors[0] }}>
        <Icon color={colors[0]} name='sidebar' />
        Contacts
      </span>
    </Header>
  </div>
);

export default HeaderTitle;
