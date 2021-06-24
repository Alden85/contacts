import React from 'react';
import { Header, Segment, Icon, Label } from 'semantic-ui-react';

const colors = ['grey'];

const HeaderTitle = () => (
  <Segment clearing>
    <Header as='h6' floated='right'>
      <span>
        <span>Thomas W.</span>
        <Label circular color={colors[0]} key={colors[0]}>
          T
        </Label>
      </span>
    </Header>
    <Header as='h3' floated='left'>
      <span>
        <Icon name='sidebar' />
        Contacts
      </span>
    </Header>
  </Segment>
);

export default HeaderTitle;
