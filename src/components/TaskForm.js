import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/index'

class TaskForm extends Component {

  onSubmitForm = (e) => {
    e.preventDefault()
    let {taskName} = this.refs
    let task = {
      id: new Date().getTime(),
      name: taskName.value,
      status: true
    }
    this.props.addTask(task)
    taskName.value = ""
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input type="text" ref="taskName"/>
        <input type="submit" value="Add Todo" />
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allTasks: state.allTasks
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTask: (task) => {
      dispatch(addTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)