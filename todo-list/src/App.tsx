import { useRef, useState } from "react";
import Todos from "./components/todos";
import { ITodo } from "./types/todo";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Eat", isDone: false },
    { id: 2, desc: "Learn React", isDone: false },
    { id: 3, desc: "Learn Tailwind", isDone: false },
    { id: 4, desc: "Sleep", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    if (inputRef.current) {
      const newTodo: ITodo = {
        id: Math.max(...todo.map((item) => item.id)) + 1,
        desc: inputRef.current.value,
        isDone: false,
      };
      setTodo((todo) => [...todo, newTodo]);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center p-10 bg-slate-800">
      <h1 className="text-[60px] font-bold text-white">
        To <span className="text-teal-500">Do</span> List
      </h1>
      <Todos todos={todo} />
      <div className="flex mt-10 min-w-[400px] gap-4">
        <input
          ref={inputRef}
          className="w-full border border-teal-500 rounded-md"
          type="text"
          placeholder="Add new task here"
        />
        <button
          onClick={handleAdd}
          className="text-white bg-teal-500 rounded-md px-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
