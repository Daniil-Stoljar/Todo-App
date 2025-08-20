import type { Task } from "./Types";
import TodoItem from "./ToDoItem";

interface TodoListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TodoList({
  tasks,
  toggleTask,
  deleteTask,
}: TodoListProps) {
  if (tasks.length === 0) {
    return <p className="text-center mt-4 text-gray-500">No tasks found</p>;
  }

  return (
    <ul className="mt-4 divide-y">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={() => toggleTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
}
