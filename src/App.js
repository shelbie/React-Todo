import React from 'react';
import ReactDOM from "react-dom";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./components/Todo.css"

const tasks = [
  {
    name: "Wash Dishes",
    id: 1,
    completed: false
  },
  {
    name: "Fold Laundry",
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
      this.state = {
        tasks
      };
  }

  toggleTask = taskId => {
    console.log(taskId);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(taskId === task.id) {
          return {
            ...task,
            completed: !task.completed};
          } else {
            return task;
          }
      })
    });
  };
    addTask = (e, task) => {
      e.preventDefault();
      const newTask = {
        name: task,
        id: Date.now(),
        completed: false
      };
      this.setState({
        tasks: [...this.state.tasks, newTask]
      });
    };

    clearCompleted = e => {
      e.preventDefault();
      this.setState({
        tasks: this.state.tasks.filter(task => !task.completed)
      });
    };



  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TaskForm addTask={this.addTask} />
        </div>
          <TaskList 
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
          tasks={this.state.tasks} 
          />
        </div>
    );
  }
}

export default App;
