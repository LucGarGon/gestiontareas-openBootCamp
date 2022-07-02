import React from 'react'

export default function Task({ task }) {
  return (
  <div>
    <h4>Tarea {task.id}</h4>
    <p>Nombre: { task.name }</p>
    <p>Comentario: { task.comment }</p>
    </div>
  )
}
