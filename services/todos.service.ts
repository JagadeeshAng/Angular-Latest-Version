import { inject, Injectable } from "@angular/core";
import { Todo } from "../Model/todo.type";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  http = inject(HttpClient); // Now by writing this we have the access to HTTP Get,Post, Delete etc...
  // Avoiding this code only for the HTTP Methods
  //  todoItems : Array<Todo> = [{
  //   title: 'groceries',
  //   id: 0,
  //   userId: 1,
  //   completed: false
  //  },
  //  {
  //   title: 'car Wash',
  //   id: 1,
  //   userId: 2,
  //   completed: false,
  //  },
  //  {
  //   title: 'Home Appliances',
  //   id: 2,
  //   userId:3,
  //   completed: true
  //  }
  // ]
  // Avoiding this code only for the HTTP Methods
  // --------------------------------------------------------------------------------------
  // This code for HTTP Methods
  // constructor() { } // Instead of this constructor we have to create the function for the Http client
  getTodosFromAPI() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
  // This code for HTTP Methods
}
