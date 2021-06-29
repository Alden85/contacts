import React, { useState } from 'react';
import { Form, Radio } from 'semantic-ui-react';

function Gender({ setGender }) {
  let [value, setValue] = useState('');
  const handleChange = (e, { value }) => {
    setValue(value);
    setGender(value);
  };
  console.log(value);
  return (
    <Form>
      <Form.Field>
        <Radio
          label='Male'
          name='radioGroup'
          value='male'
          checked={value === 'male'}
          onChange={handleChange}
        />

        <Radio
          className='gender'
          label='Female'
          name='radioGroup'
          value='female'
          checked={value === 'female'}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
}

export default Gender;
