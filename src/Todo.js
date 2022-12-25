import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(todos.length);
  const [todoTitle, setTodoTitle] = useState("");
  const handleFormChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todoId, title: todoTitle, status: "notStarted" },
    ]);
    setTodoId(todoId + 1);
    setTodoTitle("");
  };

  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo));
  };

  const handeStatusChange = (targetTodo, e) => {
    const newTodos = todos.map((todo) => ({ ...todo }));
    setTodos(
      newTodos.map((todo) =>
        todo.id === targetTodo.id ? { ...todo, status: e.target.value } : todo
      )
    );
    console.log(newTodos);
  };
  return (
    <>
      <input
        type="text"
        name=""
        value={todoTitle}
        onChange={handleFormChange}
      />
      <button type="text" onClick={handleAddTodo}>
        作成
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <select
              value={todo.status}
              onChange={(e) => handeStatusChange(todo, e)}
            >
              <option value="notStarted">未着手</option>
              <option value="InProgress">作業中</option>
              <option value="done">完了</option>
            </select>
            <button type="text" onClick={() => handleDeleteTodo(todo)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
