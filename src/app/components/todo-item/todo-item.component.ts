import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todo?: Todo;

  @Output()
  onRichiestaCompletamento = new EventEmitter<Todo>();

  richiediCompletamento() {
    this.onRichiestaCompletamento.emit(this.todo);
  }
}
