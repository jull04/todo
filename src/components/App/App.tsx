import React from "react";
import { useEffect, useState } from "react";
import AddForm from "../AddForm/AddForm.tsx";
import TodoItem from "../TodoItem/TodoItem.tsx";
import "./App.css";
import { Task } from "../../utils/types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filtered, setFiltered] = useState<Task[]>(tasks);

  function tasksFilter(done: boolean | "all") {
    if (done === "all") {
      setFiltered(tasks)
    } else {
      let newTasks = [...tasks].filter(item => item.done === done);
      setFiltered(newTasks);
  }}

  useEffect(() => {
    setFiltered(tasks)
    if (tasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const storedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  function handleDelete(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleDeleteCompletedTasks () {
    const updatedTasks = tasks.filter(task => !task.done);
    setTasks(updatedTasks);
  }

  function handleDone(index: number, newDone: boolean) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].done = newDone;
      return newTasks; 
    })
  }

  function handleAdd(taskName: string) {
    setTasks(prev => {
      return [{taskName: taskName, done: false}, ...prev];
    })  
  }

  const numberDone = tasks.filter(t => t.done).length;
  const numberAll = tasks.length;

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <h1 className="title">{numberDone}/{numberAll} Complete</h1>
      <AddForm
        handleAdd={handleAdd}
        tasksFilter={tasksFilter}
        onDelete = {handleDeleteCompletedTasks}
      />
      <ul className="list">
      {filtered.map((task, index) => (
        <TodoItem 
        {...task}
        onDone={done => handleDone(index, done)}
        key={index}
        onDelete={() => handleDelete(index)}/>
      ))}
      </ul>
    </div>
  );
}

export default App;
