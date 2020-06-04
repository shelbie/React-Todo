import React from 'react';
import ReactDOM from "react-dom";

import ToDoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const allToDo = [
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
        allToDo
      };
  }

  toggleToDo = todoId => {
    console.log(todoId);
    this.setState({
      allToDo: this.state.allToDo.map(todo => {
        if(todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed};
          } else {
            return todo;
          }
      })
    })
  }
    addToDo = (event, todo) => {
      event.preventDefault();
      const newToDo = {
        name: todo,
        id: Date.now(),
        completed: false
      };
      this.setState({
        allToDo: [...this.state.allToDo, newToDo]
      });
    };

    clearCompleted = event => {
      event.preventDefault();
      this.setState({
        allToDo: this.state.allToDo.filter(todo => !todo.completed)
      });
    };



  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addToDo={this.addToDo} />
        </div>
          <ToDoList 
          toggleToDo={this.toggleToDo}
          clearCompleted={this.clearCompleted}
          allToDo={this.state.allToDo} 
          />
        </div>
    );
  }
}

export default App;
