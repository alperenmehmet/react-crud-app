import React, { useState } from 'react';
import UserTable from './components/UserTable';
import data from './components/data';
import { UserProvider } from './UserContext';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <UserProvider>
      <div className='container'>
        <h1>React CRUD App</h1>
        <div className='flex-row'>
          <div className='flex-large'>
            <h2>Add user</h2>
            <AddUserForm />
          </div>
          <div className='flex-large'>
            <h2>View users</h2>
            <UserTable />
          </div>
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
