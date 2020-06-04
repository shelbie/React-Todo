import React from "react";

class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }


handleChanges = e => {
    
    console.log(e.target.value);
    this.setState({ task: e.target.value })
};

submitTask = e => {
    e.preventDefault();
    this.props.addTask(e, this.state.task)
};

render() {
    return (
        <form onSubmit={this.submitTask}>
            <input
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.handleChanges}
            />
            <button>Add</button>
        </form>
    )
}
}
export default TaskForm;