import React from 'react'

export default function Task({ task }) {
  return <>
    <h1>Tarea {task.id}</h1>
    <div>Nombre: { task.name }</div>
    <div>Comentario: { task.comment }</div>
  </>
}
