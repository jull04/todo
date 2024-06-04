import React from "react";
import Checkbox from "../Checkbox/Checkbox.tsx";
import "./TodoItem.css";

export type TodoItemProps = {
  taskName: string;
  done: boolean;
  onDelete: () => void;
  onDone: (done: boolean) => void;
}

function TodoItem ({ taskName, done, onDelete, onDone }: TodoItemProps) {
  return (
    <li className={`item ${done && 'item-disabled'}`}>
      <Checkbox checked={done} onClick ={() => onDone(!done)}/>
      <p className={`item-title ${done && 'item-title-disabled'}`}>{taskName}</p>
      <button className="delete-button" 
        onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
