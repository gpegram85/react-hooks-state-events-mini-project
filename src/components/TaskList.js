import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {

  const taskArr = tasks.map((task) => 
    (<Task key={task.text} task={task} onDelete={onDelete}/>)
  )

  return (
    <div className="tasks">
      {taskArr}
    </div>
  );
}

export default TaskList;
