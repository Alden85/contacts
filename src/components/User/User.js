import React, { useState, useEffect } from 'react';
import { Image, List } from 'semantic-ui-react';
import './User.css';

function User({ data, searchTerm }) {
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const filteredUser = data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filteredUser);
  }, [data, searchTerm]);

  const dataToBeRendered = !searchTerm ? data : filteredResults;

  return (
    <div className='user'>
      {dataToBeRendered.map((user) => {
        return (
          <div key={user.id}>
            <List divided verticalAlign='middle'>
              <List.Item>
                <List.Content floated='right'>
                  <div className='email'>{user.email}</div>
                </List.Content>
                <Image size='mini' avatar src={user.avatar} />
                <List.Content>{`${user.first_name} ${user.last_name}`}</List.Content>
              </List.Item>
              <br />
            </List>
          </div>
        );
      })}
    </div>
  );
}

export default User;
