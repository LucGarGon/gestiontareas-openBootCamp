/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from 'react'
import TaskListComponent from '../../components/task-list-component/task-list-component';
import FormCreate from '../../components/form-create/form-create'
import Filter from '../../components/filter/filter'
import { reducerTask, actions} from '../../hooks/reducer'
import { Card, Container } from '@mui/material';
import { styleContainer, styleContainerFather } from './task-list.style';

export default function TaskList() {
  const [tasks, dispatch] = useReducer(reducerTask, {
    originalTasks: [],
    tasksToFilter: []
  });
  const {createTask, deleteTask, filterTask} = actions(dispatch) 

  return <>

  <Container style={styleContainerFather}>
    <Card style={styleContainer}>
    <FormCreate create={ createTask } ></FormCreate>
    <Filter filter={ filterTask } tasks={tasks} ></Filter>
    <TaskListComponent tasks={ tasks } deleteTask = {deleteTask} ></TaskListComponent>
    </Card>
    </Container>
  </>
}
