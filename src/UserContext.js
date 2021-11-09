import { createContext, useState } from 'react';
import data from './components/data';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState(data);
  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
