import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Todo from "./todo";
import AddTodo from "./add-todo";

function Todos() {
  const todos = useStoreState(state => state.todos.list);
  const toggle = useStoreActions(actions => actions.todos.toggle);
  return (
    <>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggle={toggle} />
      ))}
      <AddTodo />
    </>
  );
}

export default Todos;
