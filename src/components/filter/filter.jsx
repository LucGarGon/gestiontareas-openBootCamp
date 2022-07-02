import React, { useRef } from 'react'

export default function Filter({ filter, tasks }) {
  const inputFilter = useRef(null);
  const handleChange = (event) => {
    filter({
      originalTasks: tasks,
      tasksToFilter: [],
      query: event.target.value,
    })
  }
  return <>
    <input className='filter' ref={inputFilter} type="text" name="filter" onChange={handleChange} placeholder="Filtrar"></input>
 </>
}
