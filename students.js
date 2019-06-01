import React, { Component } from 'react'; 

const Students = ({ppl})=>{
  return(
    ppl.length ? <ul>
      {ppl.map(item => <li key={item.email}>{item.email}</li>)} 
    </ul> : "No enrollments yet"
  )
}

export default Students;