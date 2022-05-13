const getTodos = () => {
  if (localStorage.hasOwnProperty("todoList")) {
    return JSON.parse(localStorage.getItem("todoList"));
  } else return [];
};

const setTodoList = (list) => {
  return localStorage.setItem("todoList", JSON.stringify(list));
};

const todoItems = (arr, val) => {
  let todoArray = [];
  if (val === "all") {
    todoArray = arr;
  } else if (val === "done") {
    todoArray = arr.filter((item) => item.done === true);
  } else todoArray = arr.filter((item) => item.done === false);
  return todoArray;
};

export { getTodos, setTodoList, todoItems };
