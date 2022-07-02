/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from 'react'
import TaskListComponent from '../../components/task-list-component/task-list-component';
import FormCreate from '../../components/form-create/form-create'
import Filter from '../../components/filter/filter'
import { reducerTask, actions} from '../../hooks/reducer'

export default function TaskList() {
  const [tasks, dispatch] = useReducer(reducerTask, {
    originalTasks: [],
    tasksToFilter: []
  });
  const {createTask, deleteTask, filterTask} = actions(dispatch) 

  return <>
    <FormCreate create={ createTask } ></FormCreate>
    <Filter filter={ filterTask } tasks={tasks} ></Filter>
    

      <TaskListComponent tasks={ tasks } deleteTask = {deleteTask} ></TaskListComponent>

  
  </>
}
