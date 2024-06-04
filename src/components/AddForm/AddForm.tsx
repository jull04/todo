import React, { useState, FormEvent, ChangeEvent } from "react";
import "./AddForm.css";

export type AddFormProps = {
  handleAdd: (taskName: string) => void;
  tasksFilter: (done: boolean | "all") => void;
  onDelete: () => void;
}

function AddForm({ handleAdd, tasksFilter, onDelete }: AddFormProps) {
  const [taskName, setTaskName] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<boolean | "all">("all");

  const setFilter = (filter: boolean | "all") => {
    setActiveFilter(filter);
  };

  function onAdd(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (taskName !== "") {
      handleAdd(taskName);
      setSearchError("");
      setTaskName("");
    } else {
      setSearchError("Input must be filled in");
    }
  }

  function onTaskNameChange(evt: ChangeEvent<HTMLInputElement>) {
    setTaskName(evt.target.value);
    setSearchError("");
  };

  return (
    <section className="search">
      <form className="inputForm" name="search" onSubmit={onAdd} noValidate>
        <input
          className="input"
          type="text"
          name="add"
          placeholder="Enter a task..."
          value={taskName}
          onChange={onTaskNameChange}
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
