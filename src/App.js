import React from "react";
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const tasks = [
  {
    task: "Organize Desk",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Buy Groceries",
    id: 1528817084358,
    completed: false,
  },
  {
    task: "Pick up dry cleaning",
    id: 1528817084359,
    completed: false,
  },
  {
    task: "Go for a run",
    id: 1528817084360,
    completed: false,
  },
  {
    task: "Clean the catbox",
    id: 1528817084361,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: tasks,
    };
  }

  toggleCompleted = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    console.log("updated tasks", updatedTasks);
    this.setState({
      ...this.state,
      tasks: updatedTasks,
    });
  };

  addTask = (taskName) => {
    console.log("adding task", taskName);
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask],
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            addTask={this.state.tasks}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
