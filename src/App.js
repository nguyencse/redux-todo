import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskForm />
        <TaskList />
        <TaskFilter />
      </div>
    );
  }
}

export default App;
