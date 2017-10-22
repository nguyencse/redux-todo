import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTask } from '../actions/index'
import * as types from '../constants/action-types'

class TaskList extends Component {
  handleClickTask = (taskId) => {
    this.props.toggleTask(taskId)
  }

  filterTask = (filterType) => {
    switch (filterType) {
      case types.FILTER_TASK_PENDING:
        return this.props.task.allTasks.filter((task) => task.status)
      case types.FILTER_TASK_COMPLETED:
        return this.props.task.allTasks.filter((task) => !task.status)
      default: return this.props.task.allTasks
    }
  }

  render() {
    var allTasks = this.filterTask(this.props.task.filter).map((task, index) => {
      return <li key={index} style={{ textDecoration: !task.status ? 'line-through' : 'none' }} onClick={() => this.handleClickTask(task.id)}>{task.name}</li>
    })
    return (
      <ul>
        {allTasks}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    task: state.task
  }
}

const mapDispatchTpoProps = (dispatch, ownProps) => {
  return {
    toggleTask: (task) => {
      dispatch(toggleTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchTpoProps)(TaskList)