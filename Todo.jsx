import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (input === "") return alert("Please Enter a Valid Todo");
    setTodos((prev) => [...prev, { id: Date.now(), title: input, isCompleted: false }]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const newInput = prompt("Edit Todo");
    if (newInput !== null && newInput.trim() !== "") {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, title: newInput.trim() } : todo,
        ),
      );
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Add task here..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        value={input}
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <div>
        <h1>Todos</h1>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleEdit(todo.id)}>✏️</button>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;