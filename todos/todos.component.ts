import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
 ngOnInit(): void {
  //  throw new Error('Method not implemented.');
console.log(this.todoService.todoItems);
 }
 todoService = inject(TodosService);
}
