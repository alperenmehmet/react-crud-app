import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <main>
      <div className='section-title'>
        <h1>React Crud App</h1>
        <div className='underline'></div>
      </div>
      <div className='container'>
        <div className='form-container'>
          <UserForm />
        </div>
        <div className='user-wrapper'>
          <UserList />
        </div>
      </div>
    </main>
  );
};

export default App;
