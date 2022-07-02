/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react'
import { TaskContext } from '../../hooks/taskContext'
import EliminarButton from '../buttons/eliminar-button'
import Task from './task'


export default function TaskListComponent() {
  const { tasks, deleteTask } = useContext(TaskContext)

  const isTaskFilterOrOriginal = () => {
    console.log(tasks.tasksToFilter.length > 0  ? tasks.tasksToFilter : tasks.originalTasks)
    return tasks.tasksToFilter.length > 0  ? tasks.tasksToFilter : tasks.originalTasks
  }

  
  return <>
 {
 
 isTaskFilterOrOriginal().map((task) => (
      <div className="task_filter" key={task.id}>
      <Task  task={task}></Task>
      <EliminarButton task={task} deleteTask={deleteTask}></EliminarButton>
      </div>
 )
  )}
  </>
}
