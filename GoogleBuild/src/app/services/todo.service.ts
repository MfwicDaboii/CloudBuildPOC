import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = [];
  constructor() { }

  setList(list){
    this.todoList = list;
  }

  getTasks(){
    
  }
  
}
