import { getTodosFromLocalStorage } from "./simple-todo/storage.js";
import { renderTodos, initTodoHandlers } from "./simple-todo/dom.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});
