import React, { useState } from "react";

function CategoryFilter({ categories, onFilter }) {

  const [selected, setSelected] = useState("")
  const handleClick = (e) => {

    // Preventing reload of component
    // Declare and assign category to target value
    // Updating stateful variable to targeted category

    e.preventDefault()
    const category = e.target.value
    setSelected(category)
    onFilter(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>

    {/* Mapping and displaying the category buttons
        Assigning callback function
        Setting className based on stateful variable selected
        This could allow for individual styling of the button */}

      {categories.map((category) => (
    <button 
      key={category} 
      value={category} 
      onClick={handleClick}
      className={selected === category ? "selected" : ""}
      >
        {category}
      </button>
    ))}
    </div>
  );
}

export default CategoryFilter;
