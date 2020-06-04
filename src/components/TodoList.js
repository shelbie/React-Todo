// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
    return (
        <div className="todo-list">
            {props.allItems.map(todo => (
                <ToDo key={todo.id} todo={todo} toggleToDo={props.toggleToDo} />
            ))}
            <button className="clear-btn" onClick={props.clearToDo}>
                Clear To-Do
            </button>
        </div>
    )
}

export default ToDoList;