import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../Model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');
 ngOnInit(): void {
  //  throw new Error('Method not implemented.');
  // Avoiding this two lines for the HTTP Methods 
// console.log(this.todoService.todoItems);
// this.todoItems.set(this.todoService.todoItems);
// Avoiding this two lines for the HTTP Methods 
// ------------------------------------------------------------------
// For HTTP methods the code start from Here
 this.todoService.getTodosFromAPI().pipe(
  catchError((err) => {
    console.error(err);
    throw err;
  })
 ).subscribe((todos) => {
  this.todoItems.set(todos);
 })
// For HTTP methods the code start from Here 
 }
 
 updateTodoItem(todoItem: Todo) {
 this.todoItems.update((todos) => {
  return todos.map(todo => {
    if(todo.id === todoItem.id) {
      return {
        ...todo,
        completed: !todo.completed
      }
    } 
    return todo;
    
  })
 })
 }
}
