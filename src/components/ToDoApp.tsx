import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

interface ToDo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<ToDo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: ToDo = {
      id: crypto.randomUUID(),
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="todo-app">
      <h1>✅ Todo App</h1>
      <div className="input-section">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="What needs to be done?"
        />
        <button onClick={addTodo} disabled={!newTodo.trim()}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            {...todo}
            onToggle={toggleCompleted}
            onRemove={removeTodo}
          />
        ))}
      </ul>
      {todos.some((t) => t.completed) && (
        <button className="clear-btn" onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TodoApp;
