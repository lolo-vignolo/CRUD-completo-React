import React, { useState } from 'react';

import {v4 as uuidv4} from "uuid";
import './App.css';
import { EditUserForm } from './components/EditUserForm';
import { Table } from './components/Table';
import { UserForm } from './components/UserForm';



function App() {

  const usersData = [
    { id: uuidv4() , name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const [editing, setEditing] = useState(false)

  const initialFormState = {id:null, name: " ", username:" "}

  const [ currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([...users, user])
  }

  const deleteUser = (id) =>{
    setUsers(users.filter((user)=> user.id !== id))
  }

  const editUser = (user) =>{
    setEditing(true);
    setCurrentUser({
      id:user.id,
      name:user.name,
      username:user.username
    })
  }


  const updateUser = (id, updatedUser) =>{
    setEditing(false)
    setUsers(users.map((user)=> (user.id===id? updatedUser: user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
      <div className="flex-large">

        {editing?(
            <div>
            <h2>Edit user</h2>
            <EditUserForm updateUser = {updateUser} currentUser={currentUser} />
          </div> 
          ):(
            <div>
            <h2>Add user</h2>
            <UserForm addUser={addUser} />
          </div>
          )
        }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <Table 
            users={users} 
            deleteUser ={deleteUser}
            editUser = {editUser}
             />
        </div>
      </div>
    </div>
  )
}

export default App;
