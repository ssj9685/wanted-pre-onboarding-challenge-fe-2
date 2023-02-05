import { Todo, TodoManager } from "./model/todo/index.js";

for (let i = 0; i < 10; ++i) {
  const random = Math.floor(Math.random() * 4);
  const todo = new Todo({
    id: i,
    content: `할일${i}`,
    completed: false,
    category: `카테고리${random}`,
    tags: [`태그${random}`],
  });

  todoManager.create(todo);
}
const todoManager = new TodoManager();
