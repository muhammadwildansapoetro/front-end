import { ITodo } from "../types/todo";

interface IProps {
  todos: ITodo[];
  handleDelete: (id: number) => void;
  handleDone: (id: number) => void;
}

function Todos({ todos, handleDelete, handleDone }: IProps) {
  return (
    <div className="">
      {todos.map((item, index) => {
        return (
          <div
            key={index}
            className="flex min-w-[400px] justify-between items-center py-1"
          >
            <input
              onClick={() => handleDone(item.id)}
              checked={item.isDone}
              type="checkbox"
              className="w-4 h-4 accent-teal-500"
            />
            <div className="text-white">{item.desc}</div>
            <button
              onClick={() => handleDelete(item.id)}
              className="hover:scale-110 border border-red-500 rounded-md p-1 opacity-50 hover:opacity-100"
            >
              <img
                src="./src/assets/delete-red.png"
                alt="delete icon"
                className="max-w-[20px]"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
