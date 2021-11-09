import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const UserTable = () => {
  const [users, setUsers] = useContext(UserContext);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  console.log(users);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.lenght !== 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button>Edit</button>
                <button onClick={(id) => deleteUser(id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
