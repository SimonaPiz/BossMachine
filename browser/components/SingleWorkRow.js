import React, { useState, useEffect } from 'react';

import SingleWorkRowDescription from './SingleWorkRowDescription';
import SingleWorkRowEdit from './SingleWorkRowEdit';

const SingleWorkRow = ({editing, work, saveNewWork, updateWork, idx}) => {
  let isEditing = editing ? true : false;
  const [newEditing, setNewEditing] = useState(isEditing);
  const [newWork, setNewWork] = useState(null);
  
  handleChange = e => {
    setNewWork( Object.assign(newWork, {
      [e.target.name]: e.target.value,
    }))
  }

  toggleEdit = e => {
    if (newEditing) {
      if (newWork) {
        saveNewWork(newWork);
      } else {
        updateWork(newWork);
      }
    }
    
    setNewEditing(!newEditing);
  }

  return (
        newEditing
        ? <SingleWorkRowEdit work={newWork} idx={idx} handleChange={handleChange} toggleEdit={toggleEdit}/>
        : <SingleWorkRowDescription work={work} idx={idx} toggleEdit={toggleEdit}/>
    )
  

}

export default SingleWorkRow;
