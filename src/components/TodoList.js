// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//this component will map over list items

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoList;
