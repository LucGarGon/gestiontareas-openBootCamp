import React from 'react'
import LayersClearIcon from '@mui/icons-material/LayersClear';

export default function EliminarButton({ task, deleteTask }) {
  const handleClick = () => {
    deleteTask(task)
  }
  return (
    <button className="button_eliminar" onClick={handleClick}>
      <LayersClearIcon></LayersClearIcon>
       </button>
  )
}
