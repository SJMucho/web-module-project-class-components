import React from "react";

const tasks = [
  {
    task: 'Organize Desk',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Buy Groceries',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Pick up dry cleaning',
    id: 1528817084359,
    completed: false
  },
  {
    task: 'Go for a run',
    id: 1528817084360,
    completed: false
  },
  {
    task: 'Clean the catbox',
    id: 1528817084361,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks:tasks
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
