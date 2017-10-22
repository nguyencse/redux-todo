import * as types from '../constants/action-types'

var initialState = {
  allTasks: [],
  filter: types.FILTER_TASK_ALL
}

const task = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_TASK:
    {
      let newState = {...state}
      newState.allTasks.push(action.task)
      return newState
    }
    
    case types.TOGGLE_TASK:
    {
      let newState = {...state}
      let taskIndex = newState.allTasks.findIndex((task) => task.id === action.taskId)
      newState.allTasks[taskIndex].status = !newState.allTasks[taskIndex].status
      return newState
    }

    case types.FILTER_TASK:
    {
      let newState = {...state}
      newState.filter = action.filterType
      return newState
    }

    default: return state
  }
}

export default task