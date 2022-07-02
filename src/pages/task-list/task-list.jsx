/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import TaskListComponent from '../../components/task-list-component/task-list-component';
import FormCreate from '../../components/form-create/form-create'
import Filter from '../../components/filter/filter'
import { Card, Container } from '@mui/material';
import { styleContainer, styleContainerFather } from './task-list.style';
import { TaskContextProvicer } from '../../hooks/TaskContextProvider';

export default function TaskList() {

  return <>
<TaskContextProvicer>
  <Container style={styleContainerFather}>
    <Card style={styleContainer}>
    <FormCreate></FormCreate>
    <Filter></Filter>
    <TaskListComponent></TaskListComponent>
    </Card>
    </Container>
    </TaskContextProvicer>
  </>
}
