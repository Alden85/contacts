import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'marketing', text: 'Marketing', value: 'marketing' },
  { key: 'sales', text: 'Sales', value: 'sales' },
  { key: 'it', text: 'IT', value: 'it' },
  { key: 'support', text: 'Support', value: 'support' },
];

const DepDropdown = ({ onChange }) => (
  <Dropdown
    placeholder='Department'
    clearable
    options={options}
    selection
    onChange={onChange}
  />
);

export default DepDropdown;
