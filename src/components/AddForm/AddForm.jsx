import { useState } from "react";
import "./AddForm.css";

function AddForm({ handleAdd, tasksFilter, onDelete }) {
  const [taskName, setTaskName] = useState("");
  const [searchError, setSearchError] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const setFilter = (filter) => {
    setActiveFilter(filter);
  };

  function onAdd(evt) {
    evt.preventDefault();
    if (taskName !== "") {
      handleAdd(taskName);
      setSearchError("");
      setTaskName("");
    } else {
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
        <button
          onClick={() =>  {
            tasksFilter("all")
            setFilter('all')}
          }
          className={`filter-item ${activeFilter === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => {
            tasksFilter(false)
            setFilter(false)
          }}
          className={`filter-item ${activeFilter === false ? "active" : ""}`}
        >
          Active
        </button>
        <button
          onClick={() => {
            tasksFilter(true)
            setFilter(true)
          }}
          className={`filter-item ${activeFilter === true ? "active" : ""}`}
        >
          Completed
        </button>
        <button
          onClick={() => onDelete()}
          className="filter-item delete-all-button"
        >
          Delete All Completed
        </button>
      </div>
    </section>
  );
}

export default AddForm;
