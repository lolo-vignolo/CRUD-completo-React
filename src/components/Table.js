
import React from 'react'

export const Table = (props) => {


   
    return(

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                        <button 
                            className="button muted-button m-1"
                            onClick={()=>{props.editUser(user)}}
                            >Edit</button>
                        <button
                            onClick={()=> props.deleteUser(user.id)}
                            className="button muted-button m-1">
                            Delete
                        </button>
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
    )
                }