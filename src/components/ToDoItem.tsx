import type { Task } from "./Types";

interface TodoItemProps {
  task: Task;
  toggleTask: () => void;
  deleteTask: () => void;
}

export default function TodoItem({
  task,
  toggleTask,
  deleteTask,
}: TodoItemProps) {
  return (
    <li className="todo-item">
      <div className="flex items-center gap-2 flex-grow">
        <input type="checkbox" checked={task.completed} onChange={toggleTask} />
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
      </div>

      <button className="remove-btn" onClick={deleteTask}>
        ✖
      </button>
    </li>
  );
}
