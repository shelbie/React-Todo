import React from "react";

const ToDo = props => {
    return (
        <div>
            onClick={() => props.toggleToDo(props.todo.id)}
            className={`todo$
            {props.todo.completed ? "completed" : ""}`}>
            <p>{props.todo.name}</p>
        </div>
    )
}

export default ToDo;