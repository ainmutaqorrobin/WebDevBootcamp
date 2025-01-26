import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getData = async () => {
  try {
    const response = await axios.get(url);
    const todo: Todo = response.data;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
  } catch (error) {
    console.log(error);
  }
};

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log("=====================");
  console.log(`The Todo with ID: ${id}
    Has a title of : ${title}
    Is it finished? ${completed}`);
  console.log("=====================");
};

getData();
