import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import users from './data';

const AddUserForm = () => {
  const [user, setUser] = useState({ id: 'null', name: '', username: '' });
  const [users, setUsers] = useContext(UserContext);

  const addUser = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      user.id = users.length + 1;
      setUsers([...users, user]);
      setUser({ name: '', username: '' });
    }
  };

  const onSubmitHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form>
      <label>Name:</label>
      <input
        type='text'
        name='name'
        value={users.name}
        onChange={onSubmitHandler}
      />
      <label>User Name:</label>
      <input
        type='text'
        name='username'
        value={users.username}
        onChange={onSubmitHandler}
      />
      <button type='submit' onClick={addUser}>
        Add New User
      </button>
    </form>
  );
};

export default AddUserForm;
