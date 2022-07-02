import React, { useContext } from 'react'
import LayersClearIcon from '@mui/icons-material/LayersClear';
import { TaskContext } from '../../hooks/taskContext';

export default function EliminarButton({ task }) {
  const { deleteTask } = useContext(TaskContext)
  const handleClick = () => {
    deleteTask(task)
  }
  return (
    <button className="button_eliminar" onClick={handleClick}>
      <LayersClearIcon></LayersClearIcon>
       </button>
  )
}
