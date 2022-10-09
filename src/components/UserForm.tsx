import { useGlobalContext } from '../context'
import React from 'react'
import { IUser } from '../types/interface'

const UserForm = () => {
  const {
    name,
    setName,
    userName,
    setUserName,
    users,
    setUsers,
    editId,
    setEditId,
    isEditing,
    setIsEditing
  } = useGlobalContext()

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault()
    if (name && userName && isEditing) {
      setUsers(
        users.map((user: IUser) => {
          if (user.id === editId) {
            return {
              ...user,
              name,
              userName
            }
          }
          return user
        })
      )
      setEditId('')
      setName('')
      setUserName('')
      setIsEditing(false)
    } else if (name && userName) {
      const newUser = {
        id: new Date().getTime().toString(),
        name,
        userName
      }
      setUsers([...users, newUser])
      setName('')
      setUserName('')
    }
  }

  return (
    <div className="user-section">
      <form className="my-form" onSubmit={submitHandler}>
        <div className="form-action">
          <input
            type="text"
            placeholder="Name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-action">
          <input
            type="text"
            placeholder="User Name"
            className="input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <button className="primary-button" type="submit">
            {isEditing ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
