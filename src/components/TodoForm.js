//this component is the entry form

import React from "react";

// const TodoForm = () => {
//   return <div>TodoForm</div>;
// };

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }

  handleChanges = (e) => {
    this.ListeningStateChangedEvent({
      ...this.state,
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="task"
          value={this.state.newTask}
          onChange={this.handleChanges}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
export default TodoForm;
