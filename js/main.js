import { getTodosFromLocalStorage } from "/simple-todo/js/storage.js";
import { renderTodos, initTodoHandlers } from "/simple-todo/js/dom.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});
