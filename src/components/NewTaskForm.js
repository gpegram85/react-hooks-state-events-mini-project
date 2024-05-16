import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  // declaring a default category to prevent a task being submitted with a blank category entry
  const defaultCategory = categories.find(category => category !== "All")

  const [detail, setDetail] = useState("")
  const [category, setCategory] = useState(defaultCategory)

  // filtering "All" from the categories array to populate the <options> in the <select> element
  const optionCategories = categories.map((category) => {
    if (category === "All") return null 
    return  <option key={category} value={category} >
              {category}
            </option>
  })

  const handleDetailSet = (e) => {
    setDetail(e.target.value)
  }

  const handleCategorySet = (e) => {
    setCategory(e.target.value)
  }

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // declaring newTask object 
    // assigning it to the detail value and either the user-input category or the default category
    // calling onTaskFormSubmit callback function to push to parent component, update state here and in parent
    // re-render component after resetting form fields
    const newTask = { text: detail, category: category || defaultCategory }
    onTaskFormSubmit(newTask)
    setDetail("")
    setCategory(defaultCategory)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailSet} value={detail} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategorySet} value={category} >
          {optionCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
