import React from 'react'

export interface IUser {
  user: any
  id: number
  name: string
  userName: string
}

export interface UserContextType {
  users: IUser[]
  editUser: (id: number) => void
  editId: any
  isEditing: boolean
}

export interface Props {
  children: React.ReactNode
}
