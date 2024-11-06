import { memo } from "react";

interface ITodos {
  todos: string[];
  addToDo: () => void;
}

const Todos = (props: ITodos) => {
  const { todos, addToDo } = props;
  console.log("child render");

  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addToDo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);
