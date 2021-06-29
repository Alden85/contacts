import React, { useState, useEffect } from 'react';
import { Image, List } from 'semantic-ui-react';
import './User.css';
import UpdateModal from '../Modal/UpdateModal';

function User({ data, setData, searchTerm }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    const filteredUser = data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filteredUser);
  }, [data, searchTerm]);

  const dataToBeRendered = !searchTerm ? data : filteredResults;

  const handleUpdate = () => {
    if (!clicked) {
      setClicked((prevClick) => !prevClick);
    }
    console.log(clicked);
  };

  return (
    <div className='user'>
      {dataToBeRendered.map((user) => {
        const userList = (
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
        );
        return (
          <div onClick={handleUpdate} key={user.id}>
            {clicked ? (
              <UpdateModal usersList={userList} user={user} setData={setData} />
            ) : (
              userList
            )}
          </div>
        );
      })}
    </div>
  );
}

export default User;
