export class Todo {
  id;
  content;
  completed;
  category;
  tags;

  /**
   * Represents a todo.
   * @typedef {Object} Todo
   * @property {number} id - 할일의 고유 ID.
   * @property {string} content - 할일의 내용.
   * @property {boolean} completed - 완료 여부.
   * @property {string} category - 카테고리.
   * @property {string[] | undefined} tags - 태그 목록.
   *
   * @constructor
   * @param {Todo} todo - 할일 객체.
   */
  constructor(todo) {
    const { id, content, completed, category, tags } = todo;
    if (!id || !content || !completed || !category)
      throw new Error(
        "필수 항목이 누락되었습니다. (id, content, completed, category)"
      );
    this.id = id;
    this.content = content;
    this.completed = completed;
    this.category = category;
    this.tags = tags;
  }
}

export class TodoManager {
  todos = [];

  /**
   * @constructor
   * @param {Todo[]} todos - 할일 객체 목록.
   */
  constructor(todos) {
    this.todos = todos;
  }

  /**
   * Get index of todo.
   * @param {number} id - 할일의 고유 ID.
   */
  index(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1)
      throw new Error("해당 ID를 가진 todo가 존재하지 않습니다.");

    return index;
  }

  /**
   * Create todo.
   * @param {Todo} todo - 할일 객체.
   */
  create(todo) {
    this.todos.push(todo);
  }

  /**
   * Read todo.
   * @param {number} id - 할일의 고유 ID.
   * @returns {Todo[] | Todo} - 할일 객체 목록 또는 할일 객체.
   */
  read(id) {
    if (!id) return this.todos;

    const index = this.index(id);

    return this.todo[index];
  }

  /**
   * Update todo.
   * @param {number} id - 할일 고유 ID.
   * @param {Todo} newTodo - 할일 객체.
   */
  update(id, newTodo) {
    const index = this.index(id);
    this.todos[index] = { ...this.todos[index], ...newTodo, id };
  }

  /**
   * Delete todo.
   * @param {number} id - 할일 고유 ID.
   */
  delete(id) {
    const index = this.index(id);
    this.todos.splice(index, 1);
  }
}
