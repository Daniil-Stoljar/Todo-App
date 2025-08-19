import React from "react";

interface ToDoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onRemove,
}) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={completed ? "completed" : ""}>{text}</span>
      <button className="remove-btn" onClick={() => onRemove(id)}>
        ✖
      </button>
    </li>
  );
};

export default ToDoItem;
