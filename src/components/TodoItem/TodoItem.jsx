import Checkbox from "../Checkbox/Checkbox";
import "./TodoItem.css";

function TodoItem({ taskName, done, onDelete, onDone }) {

  return (
    <li className="item">
      <Checkbox checked={done} onClick ={() => onDone(!done)}/>
      <p className="item-title">{taskName}</p>
      <button className="delete-button" 
        onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
