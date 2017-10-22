import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fillerTask } from '../actions/index'
import * as types from '../constants/action-types'

class TaskFilter extends Component {
  onHandleClickFilter = (filterType) => {
    this.props.filterTask(filterType)
  }

  render() {
    return (
      <div>Show: <a onClick={()=>this.onHandleClickFilter(types.FILTER_TASK_ALL)}>All</a>, <a onClick={()=>this.onHandleClickFilter(types.FILTER_TASK_PENDING)}>Pending</a>, <a onClick={()=>this.onHandleClickFilter(types.FILTER_TASK_COMPLETED)}>Completed</a></div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterTask: (filterType) => {
      dispatch(fillerTask(filterType))
    }
  }
} 

export default connect(null, mapDispatchToProps)(TaskFilter)