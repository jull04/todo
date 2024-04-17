import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState(['ddd', 'ddd', 'ddd']);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if(newTask.trim() !== "") {
      setTasks(t => [newTask, ...t]);
      setNewTask("");
    }
    else {
        alert("Enter a task")
    }
  }

  function deleteTask(index) {
    const updatedTaasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTaasks);
  }

  return (
    <div className="todoList">
      <h1 className="title">Todo List</h1>
      <div className="inputForm">
        <input
          className="input"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="list">
        {tasks.map((task, index) => (
          <li className="item" key={index}>
            <p className="item-title">{task}</p>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
