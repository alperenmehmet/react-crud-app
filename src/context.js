import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const editingUser = users.find((user) => user.id === id);
    setName(editingUser.name);
    setUserName(editingUser.userName);
    setEditId(id);
    setIsEditing(true);
  };

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        userName,
        setUserName,
        users,
        setUsers,
        deleteUser,
        editId,
        setEditId,
        isEditing,
        setIsEditing,
        editUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
