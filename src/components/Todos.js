import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { RiTodoLine } from "react-icons/ri";
import { MdAddCircle } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

import Todo from "./Todo";
import noData from "../data/noData.json";
import LottieAnimation from "./shared/LottieAnimation";
import { getTodos, setTodoList, todoItems } from "../utils";

const Todos = () => {
  const [todoArray, setTodoArray] = useState(getTodos());
  const [todo, setTodo] = useState({ title: "", done: false });
  const [value, setValue] = useState("all");
  const arrayOfTodos = todoItems(todoArray, value);
  let todoList = getTodos();

  const handleInput = (e) => {
    let todoObj = {};
    todoObj["title"] = e.target.value;
    todoObj["done"] = false;
    setTodo(todoObj);
  };

  const addTodo = () => {
    if (todo.title !== "") {
      todoList.unshift(todo);
      setTodoList(todoList);
      setTodo({ title: "", done: false });
      toast.success("Todo Added Successfully");
    } else {
      toast.error("Please Give a Todo");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completeTodo = (i) => {
    if (todoList[i]["done"] === true) {
      todoList[i]["done"] = false;
      toast.info(`${todoList[i]["title"].toUpperCase()} Marked as Not Done`);
    } else {
      todoList[i]["done"] = true;
      toast.info(`${todoList[i]["title"].toUpperCase()} Marked as Done`);
    }
    setTodoList(todoList);
    setTodoArray(todoList);
  };

  const deleteTodo = (id) => {
    todoList.splice(id, 1);
    setTodoList(todoList);
    setTodoArray(todoList);
    toast.success("Deleted Todo Successfully");
  };

  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setTodoArray(todoList);
  }, [todoList, completeTodo, deleteTodo]);

  return (
    <>
      <ToastContainer />
      <p className="text-4xl uppercase text-center text-white font-thin tracking-widest my-5">
        Todo List
      </p>
      <div className="mt-1 flex rounded-md shadow-lg">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <RiTodoLine className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="todoInput"
            className="font-semibold focus:outline-none block w-full rounded-l-sm pl-10 sm:text-sm border-gray-300"
            placeholder="Enter Your Next Todo"
            value={todo.title}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          type="button"
          id="addTodoBtn"
          onClick={addTodo}
          className="-ml-px relative inline-flex items-center space-x-2 px-3 py-2 border border-gray-300 text-sm rounded-r-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
          <MdAddCircle className="h-6 w-6 text-blue-400" aria-hidden="true" />
        </button>
      </div>
      <div className="bg-white rounded-sm mt-5 shadow-lg divide-y divide-slate-200">
        <div className="px-3 py-1 flex items-center justify-between px-3">
          <FaTasks className="text-blue-400 text-xl" />
          <div className="flex justify-center">
            <div className="w-28 ">
              <select
                className="form-select block w-full px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                value={value}
                onChange={handleSelect}
              >
                <option value="all">All</option>
                <option value="done">Done</option>
                <option value="notDone">Not Done</option>
              </select>
            </div>
          </div>
        </div>
        {arrayOfTodos?.length > 0 ? (
          <>
            {arrayOfTodos.map((todo, i) => (
              <Todo
                key={i}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                todo={todo}
                index={i}
              />
            ))}
          </>
        ) : (
          <div className="py-2 px-3">
            <LottieAnimation data={noData} height={100} width={120} />
            <p className="text-center font-semibold text-blue-600">No Todos</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Todos;
