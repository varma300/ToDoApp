import React from 'react'
import './ToDo.css'

const List = ({task, index, removeTask}) => {
  return (<div>
        <div className='list-task'>
        {task.title}
        <button onClick={()=>{removeTask(index)}} className='dlt-btn'>Delete</button>
        </div>
    </div>
  )
}

export default List