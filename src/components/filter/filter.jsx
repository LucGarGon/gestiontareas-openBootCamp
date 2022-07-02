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
    <h4>Filtro</h4>
    <input ref={inputFilter} type="text" name="filter" onChange={handleChange}></input>
 </>
}
