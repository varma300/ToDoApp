import React from 'react'
import './ToDo.css'
import { useState } from 'react'

const Add = ({addTask}) => {
  const [value, setValue]= useState("");

  const addIteam = () => {
    addTask(value);
    setValue("")
  };
  return (
    <>
    <div className='input-container'>
    <input type='text' className='input' value={value} placeholder='Add task' onChange={(e)=>setValue(e.target.value)
    }/>
    <button onClick={addIteam} className='add-btn'>Add</button>
    </div>
    </>
  )
}

export default Add