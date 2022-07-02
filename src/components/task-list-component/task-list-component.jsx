/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import EliminarButton from '../buttons/eliminar-button'
import Task from './task'


export default function TaskListComponent({ tasks, deleteTask }) {

  const isTaskFilterOrOriginal = () => {
    console.log(tasks.tasksToFilter.length > 0  ? tasks.tasksToFilter : tasks.originalTasks)
    return tasks.tasksToFilter.length > 0  ? tasks.tasksToFilter : tasks.originalTasks
  }

  
  return <>
 {
 
 isTaskFilterOrOriginal().map((task, index) => (
      <div className="task_filter" key={task.id}>
      <Task  task={task}></Task>
      <EliminarButton task={task} deleteTask={deleteTask}></EliminarButton>
      </div>
 )
  )}
  </>
}
