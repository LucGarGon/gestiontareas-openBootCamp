import React from 'react'

export default function EliminarButton({ task, deleteTask }) {
  const handleClick = () => {
    deleteTask(task)
  }
  return (
    <button onClick={handleClick}>eliminar tarea {task.id}</button>
  )
}
