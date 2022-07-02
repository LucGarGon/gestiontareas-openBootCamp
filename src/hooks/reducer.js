/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
const CREATE_TASK = 'CREATE_TASK';
const FILTER_TASK = 'FILTER_TASK';
const DELETE_TASK = 'DELETE_TASK';
let key = 1;
const initialState = {
    originalTasks: [],
    tasksToFilter: []
}
export function reducerTask(state = initialState, action) {
   
    switch (action.type) {
        case DELETE_TASK:

            return {
                tasksToFilter: [],
                originalTasks: [...state.originalTasks.filter(task => task.id !== action.task.id )],
            }
        case FILTER_TASK:
            
            state.tasksToFilter.length !== state.originalTasks.length ?  state.tasksToFilter = [...state.originalTasks] : state.tasksToFilter
            return {
                ...state,
                tasksToFilter: state.tasksToFilter.filter(task => task.name.includes(action.task.query))
                
            }
        case CREATE_TASK:
            let task = {...action.task};
            task.id = key++; 
            return  {
                ...state,
                originalTasks: [...state.originalTasks, task]
            }
        
        default:
            return state;
            
    }
}


export const actions = (dispatch) => ({
    createTask: (task) => dispatch({type: CREATE_TASK, task}),
    deleteTask: (task) => dispatch({type: DELETE_TASK, task}),
    filterTask: (task) => dispatch({type: FILTER_TASK, task})
})