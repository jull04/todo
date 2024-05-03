import { useState } from "react";
import "./AddForm.css";

function AddForm({handleAdd}) {

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
    </section>
  );
}

export default AddForm;
