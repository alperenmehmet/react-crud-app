import React from 'react';
import { useGlobalContext } from '../context';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserList = () => {
  const { users, deleteUser, editUser } = useGlobalContext();
  if (users.length < 1) {
    return <div className='users-container '>NO USERS FOUND</div>;
  }
  return (
    <>
      {users.length > 0 && (
        <div className='users-container'>
          <div className='titles'>
            <h3>Name</h3>
            <h3>Surname</h3>
            <h3>Actions</h3>
          </div>
          <ul>
            {users.map((user) => {
              const { name, userName, id } = user;
              return (
                <li key={id} className='user'>
                  <p>{name}</p>
                  <p>{userName}</p>
                  <div className='action-buttons'>
                    <button type='type' onClick={() => editUser(id)}>
                      <FaEdit className='edit-button' />
                    </button>
                    <button
                      type='type'
                      onClick={() => {
                        deleteUser(id);
                      }}
                    >
                      <FaTrash className='delete-button' />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default UserList;
