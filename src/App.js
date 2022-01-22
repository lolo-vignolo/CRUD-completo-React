import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {v4 as uuidv4} from "uuid";
import './App.css';
import { EditUserForm } from './components/EditUserForm';
import { Pagination } from './components/Pagination';
import { Search } from './components/Search';
import { Table } from './components/Table';
import { UserForm } from './components/UserForm';



function App() {

  // const usersData = [
  //   { id: uuidv4() , name: 'Tania', username: 'floppydiskette' },
  //   { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
  //   { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  // ]

  const urls = "https://api.imgflip.com/get_memes"

  
// API Call 
  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(urls);
          //const usersData = (result.data.data.memes);
          setUsers(result.data.data.memes)
          setDinamicUsers(result.data.data.memes)
      };

      fetchData(); 

  }, []) 
  


  // datos estaticos // CRUD and SEARCH
  const [users, setUsers] = useState([])

  //datos dinamicos para busqueda 

 const [dinamicUsers , setDinamicUsers] = useState([])

  //dato busqueda

  const [search , setSerch] = useState("")

  //CRUD
  const [editing, setEditing] = useState(false)

  const initialFormState = {id:null, name: " ", username:" "}

  const [ currentUser, setCurrentUser] = useState(initialFormState)

  //PAGINATION

  const [currentPage, setCurrentpage] = useState(1);

  const [ itemsPerPage, setItemPerPage] = useState(10);


  //ej : estoy pag 5 -> tendré -> indexOfLastPost = 50 / indexOfFirstPost= 40 / current page = slice del total llengo dle 40 al 50.
  const indexOfLastPost = currentPage * itemsPerPage
  const indexOffirtPost = indexOfLastPost - itemsPerPage
  const currentPages = users.slice(indexOffirtPost, indexOfLastPost )

  // paso el slice al component Table.

////*/////

//CRUD Functions

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

  //buscador Functions 

  const handleChange = (e) =>{
      setSerch(e.target.value)
      console.log(e.target.value);
      filtrar(e.target.value)

  }

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=dinamicUsers.filter((user)=>{
      if(user.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return user;
      }
    });
    setUsers(resultadosBusqueda);
  }

  // funcion Pagination -> cmabiara el calculo anterior, por lo que el slice sera de otros posts.
  const handlePagination =(eachPage) =>{
  
    setCurrentpage(eachPage)
  }  




  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
      <div className="flex-large">
          <Search handleChange= {handleChange} search={search} />

      </div>
      </div>

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
            users={currentPages} 
            deleteUser ={deleteUser}
            editUser = {editUser}
             />
        </div>

      </div> 
      <div className="flex-row">
      <div className="flex-large">
          <Pagination
            handlePagination= {handlePagination} 
            itemsPerPage = {itemsPerPage}
            totalUsers ={users.length} />

      </div>
     
      </div>
    </div>
  )
}

export default App;
