import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';

const Active = ({ setIsActive }) => {
  let [checked, setChecked] = useState(false);
  const handleChange = (e, { checked }) => {
    setChecked(checked);
    setIsActive(checked);
  };
  return (
    <Checkbox
      value='isActive'
      label={<label>Is Active</label>}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default Active;
