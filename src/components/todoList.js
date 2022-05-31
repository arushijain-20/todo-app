import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos,filteredTodos }) => {
  return (
    <div class="todo-container">
      <ul class="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            
            
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
