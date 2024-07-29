import React, { useState } from 'react';
import './index.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = { text: newTodo, completed: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            {!todo.completed && (
              <>
                <button onClick={() => handleCompleteTodo(index)}>Complete</button>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </>
            )}
            {todo.completed && <span className="completed-text">Good job!</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
