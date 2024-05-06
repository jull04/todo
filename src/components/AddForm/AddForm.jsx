import { useState } from "react";
import "./AddForm.css";

function AddForm({handleAdd, tasksFilter}) {

  const [taskName, setTaskName] = useState("");
  const [searchError, setSearchError] = useState("");

  function onAdd(evt) {
    evt.preventDefault();
    if (taskName !== "") {
      handleAdd(taskName);
      setSearchError("");
      setTaskName("");
    }
    else {
      setSearchError("Input must be filled in");
    }
  }

  return (
    <section className="search">
      <form className="inputForm" name="search" onSubmit={onAdd} noValidate>
        <input
          className="input"
          type="text"
          name="add"
          placeholder="Enter a task..."
          value={taskName}
          onChange={(evt) => {
            setTaskName(evt.target.value);
            setSearchError("");
          }}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <span className="input__error">{searchError}</span>
      <div className="input-filter">
        <button className="filter-item" onClick={() => tasksFilter('all')}>All</button>
        <button className="filter-item" onClick={() => tasksFilter(false)}>Active</button>
        <button className="filter-item" onClick={() => tasksFilter(true)}>Completed</button>
      </div>
    </section>
  );
}

export default AddForm;
