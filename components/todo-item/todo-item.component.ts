import { Component, input, output } from '@angular/core';
import { Todo } from '../../Model/todo.type';
import { HighlightCompletedVideoDirective } from '../../../directives/highlight-completed-video.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedVideoDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
 todo = input.required<Todo>();
 todoToggled = output<Todo>();

 todoClicked() {
  this.todoToggled.emit(this.todo());
 }
}
