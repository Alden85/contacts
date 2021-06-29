import React, { useState } from 'react';
import { Button, Modal, Input, Checkbox } from 'semantic-ui-react';
import './UpdateModal.css';
import DepDropdown from '../Modal/DepDropdown';
import Contribution from '../Modal/Contribution';
import Gender from '../Modal/Gender';
import Active from '../Modal/Active';
import axios from 'axios';

function UpdateModal({ usersList, user }) {
  const [open, setOpen] = React.useState(false);
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [gender, setGender] = useState('');
  let [email, setEmail] = useState('');
  let [department, setDepartment] = useState('');
  let [contribution, setContribution] = useState('');
  let [isActive, setIsActive] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(() => e.target.value);
  };

  const handleContribution = (e) => {
    setContribution(() => e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(() => e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const userToPatch = {
    first_name: firstName,
    last_name: lastName,
    gender: gender,
    email: email,
    department: department,
    isActive: isActive,
    contribution: contribution,
  };

  const patchUser = async () => {
    const res = await axios.patch(
      `https://reqres.in/api/users/${user.id}`,
      userToPatch
    );
    console.log(res.data);
    alert(`Please check the console to see the object sent to to the API.`);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={usersList}
    >
      <Modal.Header>
        Edit Contact {`"${user.first_name} ${user.last_name}"`}
      </Modal.Header>
      <Modal.Content>
        <Input
          label='First Name'
          size='mini'
          className='firstName'
          onChange={handleFirstName}
        />
        <Input
          label='Last Name'
          size='mini'
          className='lastName'
          onChange={handleLastName}
        />
        <br />
        {`Gender: `}
        <br />
        <Gender setGender={setGender} />

        <br />
        <Input
          label='E-mail'
          size='mini'
          placeholder='example@email.com'
          className='email'
          onChange={handleEmail}
        />
        <br />
        <div>
          <div>
            <span>Department</span>
            <span className='contribution'>Contribution</span>
          </div>
        </div>
        <br />
        <div>
          <span>
            <DepDropdown onChange={handleDepartment} />
          </span>
          <span className='dep'>
            <Contribution onChange={handleContribution} />
          </span>
        </div>
        <br />
        <Active isActive={isActive} setIsActive={setIsActive} />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button
          content='Save'
          labelPosition='right'
          icon='checkmark'
          onClick={() => {
            setOpen(false);
            return patchUser();
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default UpdateModal;
