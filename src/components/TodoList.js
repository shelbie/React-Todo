// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Task from "./Task";

const TaskList = props => {
    return (
        <div className="todo-list">
            {props.tasks.map(task => (
                <Task key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
            <button className="clear-btn" onClick={props.clearTask}>
                Clear Task
            </button>
        </div>
    )
}

export default TaskList;