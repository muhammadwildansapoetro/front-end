import { useRef, useState } from "react";
import Todos from "./components/todos";
import { ITodo } from "./types/todo";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Eat", isDone: true },
    { id: 2, desc: "Learn React", isDone: false },
    { id: 3, desc: "Learn Tailwind", isDone: false },
    { id: 4, desc: "Sleep", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    if (inputRef.current) {
      if (inputRef.current.value == "") return alert("Please enter a task");
      const newTodo: ITodo = {
        id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
        desc: inputRef.current.value,
        isDone: false,
      };
      setTodo((todo) => [...todo, newTodo]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const handleDone = (id: number) => {
    const newTodo = todo.map((item) => {
      if (item.id == id) {
        return { ...item, isDone: !item.isDone };
      }
      return { ...item };
    });
    setTodo(newTodo);
  };

  return (
    <div className="flex flex-col items-center p-10 bg-slate-800 h-screen">
      <h1 className="text-[60px] font-bold text-white">
        To <span className="text-teal-500">Do</span> List
      </h1>
      <Todos todos={todo} handleDelete={handleDelete} handleDone={handleDone} />
      <div className="flex mt-10 min-w-[400px] gap-4">
        <input
          ref={inputRef}
          type="text"
          placeholder=" Please add a new task here"
          className="w-full rounded-md outline-teal-500"
        />
        <button
          onClick={handleAdd}
          className="text-white bg-teal-500 rounded-md px-2 hover:bg-teal-700 hover:scale-110"
        >
          Add
        </button>
      </div>
      <p className="text-white mt-5">
        Done : {todo.filter((item) => item.isDone == true).length}
      </p>
    </div>
  );
}

export default App;
