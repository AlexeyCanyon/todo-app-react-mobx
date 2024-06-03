import { action, computed, makeObservable, observable } from "mobx";

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
}

export class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      activeTodos: computed,
      completedTodos: computed,
      addTodo: action.bound,
      deleteTodo: action.bound,
      completeTodo: action.bound,
      clearCompleted: action.bound,
    });
  }

  get activeTodos() {
    return this.todos.filter(item => item.completed === false)
  }
  
  get completedTodos() {
    return this.todos.filter(item => item.completed === true);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    this.todos.filter(item => item.id !== todo.id);
  }

  completeTodo(todo: Todo) {
    this.todos = this.todos.map(item => ({
      ...item,
      completed: item.id === todo.id ? !todo.completed : item.completed
    }))
  }

  clearCompleted() {
    this.todos = this.todos.filter(item => item.completed === false)
  }
}

export const todoStore = new TodoStore();