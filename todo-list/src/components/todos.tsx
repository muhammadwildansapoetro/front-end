import { ITodo } from "../types/todo";

function Todos({ todos }: { todos: ITodo[] }) {
  return (
    <div className="">
      {todos.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex min-w-[400px] justify-between items-center"
          >
            <input type="checkbox" />
            <div className="text-white">{item.desc}</div>
            <button className="text-red-500 border">delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
