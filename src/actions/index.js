import * as types from '../constants/action-types'

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task
  }
}

export const toggleTask = (taskId) => {
  return {
    type: types.TOGGLE_TASK,
    taskId
  }
}

export const fillerTask = (filterType) => {
  return {
    type: types.FILTER_TASK,
    filterType
  }
}