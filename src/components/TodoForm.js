import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }


handleChanges = event => {
    
    console.log(event.target.value);
    this.setState({ todo: event.target.value })
};

submitToDo = event => {
    event.preventDefault();
    this.props.addToDo(event, this.state.todo)
};

render() {
    return (
        <form onSubmit={this.submitToDo}>
            <input
            type="text"
            value={this.state.todo}
            name="todo"
            onChange={this.handleChanges}
            />
            <button>Add</button>
        </form>
    )
}
}
export default TodoForm;