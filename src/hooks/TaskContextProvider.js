import { useReducer } from "react";
import { actions, reducerTask } from "./reducer";
import { TaskContext } from "./taskContext";

function TaskContextProvicer({ children })  {
    const [tasks, dispatch] = useReducer(reducerTask, {
        originalTasks: [],
        tasksToFilter: []
      });
      const {createTask, deleteTask, filterTask} = actions(dispatch) 

      return(
        <TaskContext.Provider value={{ createTask, deleteTask, filterTask, tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
      )
};

export { TaskContextProvicer }