import React, { useState } from 'react'
import './App.css'
const TableColumnSearch = () => {
  const [inputdata,setinputdata]=useState("")
  const rec_data=[
    {
    "userId":"1",
    "id":"10",
    "title":"sai"
    },
    {
    "userId":"2",
    "id":"20",
    "title":"bhanu"
    },
    {
    "userId":"3",
    "id":"30",
    "title":"bandi"
    },
    {
    "userId":"4",
    "id":"40",
    "title":"reddy"
    }

  ]
  
  const change_handler1=(e)=>{
    setinputdata(e.target.value)
    rec_data.map((item)=>{
      if(item.userId===inputdata)
      {
        console.log("UserId is Matched");
        e.preventDefault()
      }
    })
  }
  const change_handler2=(e)=>{
    setinputdata(e.target.value)
    rec_data.map((item)=>{
      if(item.id===inputdata)
      {
        console.log("Id is Matched");
        e.preventDefault()
      }
    })
  }
  const change_handler3=(e)=>{
    setinputdata(e.target.value)
    rec_data.map((item)=>{
      if(item.title===inputdata)
      {
        console.log("Title is Matched");
        e.preventDefault()
      }
    })
  }
  
  return (
    <div>    
      <center>
        <h2>Table with Column Search</h2>
      <table>
        <tr>
        <th><input type="search" onChange={change_handler1}/></th>
        <th><input type="search" onChange={change_handler2}/></th>
        <th><input type="search" onChange={change_handler3}/></th>
        </tr>
        <tr>
        <th>UserId</th>
        <th>Id</th>
        <th>Title</th>
        </tr>
        <tr>
        <td> {rec_data.map(item=>
          <ul key={item.userId}>{item.userId}</ul>
        )}
        </td>
         <td> {rec_data.map(item=>
            <ul key={item.id}>{item.id}</ul>
          )}
          </td>
          <td> {rec_data.map(item=>
          <ul key={item.title}>{item.title}</ul>
        )}
        </td>
        </tr>
      </table>
      </center>
    </div>
  )
}

export default TableColumnSearch