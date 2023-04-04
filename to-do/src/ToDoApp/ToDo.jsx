import React, { useEffect, useState } from 'react'
import Add from './Add'
import List from './List'
import './ToDo.css'

const ToDo = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    document.title=`you have ${task.length} pending task(s)`
   })

  const addTask = (title) => {
    const newTask = [...task,{title}]
    setTask(newTask)
  }

  const removeTask = ()=> {
      const newTask = [...task]
      newTask.splice(0,1);
      setTask(newTask)

  }
  return (
    <div className='todo-container'>
    <div className='header'>TODO APP</div>

    <div className='add-task'><Add addTask={addTask}/> </div>
      
    <div className='tasks'>{task.map((task, index) => <List task={task} removeTask={removeTask} index={index} key={index} />)}</div>
    
    </div>
  )
}

export default ToDo