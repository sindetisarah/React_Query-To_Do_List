import axios from "axios";

const todo_api = axios.create({
  baseURL: "http://localhost:3800",
});

export const getToDo = async () => {
  const response = await todo_api.get("/todos");
  return response.data;
};
export const addToDo = async (todo) => {
  const response = await todo_api.post("/todos", todo);
  return response;
};
export const updateToDo = async (todo) => {
  const response = await todo_api.patch(`/todos${todo.id}`, todo);
  return response;
};
export const removeToDo = async ({ todo_id }) => {
  const response = await todo_api.delete(`/todos${todo_id}`, todo_id);
  return response;
};
