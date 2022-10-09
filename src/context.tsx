import React, { useState, useContext } from 'react'
import { IUser, Props, UserContextType } from './types/interface'

const AppContext = React.createContext<UserContextType | null>(null)

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState<IUser>('')
  const [userName, setUserName] = useState<IUser | string>('')
  const [users, setUsers] = useState([])
  const [editId, setEditId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const deleteUser = (id: number) => {
    setUsers(users.filter((user: IUser) => user.id !== id))
  }

  const editUser = (id: number) => {
    const editingUser = users.find((user: IUser) => user.id === id)
    setName(editingUser.name)
    setUserName(editingUser.userName)
    setEditId(id)
    setIsEditing(true)
  }

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
        editUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext) as UserContextType
}
