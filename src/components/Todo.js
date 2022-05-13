import { BsTrashFill } from "react-icons/bs";
import { MdDone, MdDoneAll } from "react-icons/md";

const Todo = ({ deleteTodo, completeTodo, todo, index }) => {
  const { title, done } = todo;

  return (
    <div className="py-2 px-3 flex items-center justify-between hover:bg-blue-100">
      <div className="flex items-center w-11/12">
        <button
          className="p-1 bg-white rounded-full shadow border"
          onClick={() => completeTodo(index)}
        >
          {done ? (
            <MdDoneAll className="text-blue-500" />
          ) : (
            <MdDone className="text-blue-300" />
          )}
        </button>
        <p
          className={`capitalize ml-2 text-blue-400 font-semibold break-all ${
            done && "text-gray-500 line-through"
          }`}
        >
          {title}
        </p>
      </div>
      <BsTrashFill
        className="text-red-600 cursor-pointer text-xl hover:text-red-700 hover:text-2xl ease-in-out duration-500"
        onClick={() => deleteTodo(index)}
      />
    </div>
  );
};

export default Todo;
