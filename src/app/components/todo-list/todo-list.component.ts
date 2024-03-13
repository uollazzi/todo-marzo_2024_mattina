import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../data/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = TODOS;

  completa(todo: Todo) {
    const t = this.todos.find(x => x.id == todo.id);

    if (t) {
      t.completed = true;
    }
  }

  inserisci(text: string) {
    let todo: Todo = {
      id: new Date().getTime(),
      text: text,
      completed: false
    };

    this.todos.push(todo);
  }
}
