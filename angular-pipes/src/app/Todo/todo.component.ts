import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { ToDoService } from './todo.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ToDoService]
})
export class TodoComponent implements OnInit {
  todos: Observable<Array<Todo>>;
  item : string;
  order: string;

  sortToDoForm: FormGroup;

  constructor(private TodoService: ToDoService) {}
  
  ngOnInit() {
    this.todos = this.TodoService.findAll();
    this.sortToDoForm = new FormGroup({
      sortOption: new FormControl('asc',  Validators.required )})
  }

  setOrder(order,item){
    this.order = order;
    this.item = item;
    console.log(order,item);
  }
}