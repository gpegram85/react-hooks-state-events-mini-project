import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [filteredTasks, setFilteredTasks] = useState(TASKS)
  const [tasks, setTasks] = useState(TASKS)

  // callback function to filter tasks and update state
  // takes in category to filter to and either displays "All" of the categories
  // or invokes the .filter() method to display tasks with the matching category query
  // updates state to re-render the component
  const handleFilter = (category) => {
    if (category === "All") { setFilteredTasks(tasks)}
    else {setFilteredTasks(tasks.filter(task => task.category === category))}
  }

  // callback function to handle deletion of a task and update state
  // takes in a task to delete
  // returns a filtered array of all elements NOT equaling the taskToDelete
  // updates state to re-render the component
  const handleDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => task !== taskToDelete)
    setTasks(updatedTasks)
    setFilteredTasks(updatedTasks)
  }

  // callback function to add a task and update state
  // takes in newTask object from the NewTaskForm and adds it to the updatedTasks array along with the current tasks (list)
  // updates state to re=render the component
  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
    setFilteredTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
