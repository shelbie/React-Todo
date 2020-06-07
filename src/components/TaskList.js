// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Task from "./Task";

const TaskList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="task-list">
      {props.tasks.map(task => (
        <Task key={task.id} task={task} toggleTask={props.toggleTask} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TaskList;
