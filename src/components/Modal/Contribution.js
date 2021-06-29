import React from 'react';
import { Input, Label } from 'semantic-ui-react';
import './UpdateModal.css';

const Contribution = ({ onChange }) => (
  <Input labelPosition='right' type='text' placeholder='e.g. 400,50 €'>
    <Label>€</Label>
    <input onChange={onChange} />
    <Label />
  </Input>
);

export default Contribution;
