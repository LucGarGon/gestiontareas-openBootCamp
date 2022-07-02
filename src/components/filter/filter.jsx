import React, { useContext, useRef } from 'react'
import { TaskContext } from '../../hooks/taskContext';

export default function Filter() {
  const {filterTask, tasks} = useContext(TaskContext)
  const inputFilter = useRef(null);
  const handleChange = (event) => {
    filterTask({
      originalTasks: tasks,
      tasksToFilter: [],
      query: event.target.value,
    })
  }
  return <>
    <input className='filter' ref={inputFilter} type="text" name="filter" onChange={handleChange} placeholder="Filtrar"></input>
 </>
}
