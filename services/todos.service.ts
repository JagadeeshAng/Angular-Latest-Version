import { Injectable } from '@angular/core';
import { Todo } from '../Model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
 todoItems : Array<Todo> = [{
  title: 'groceries',
  id: 0,
  userId: 1,
  completed: false
 },
 {
  title: 'car Wash',
  id: 1,
  userId: 2,
  completed: false,
 },
]
  constructor() { }
}
