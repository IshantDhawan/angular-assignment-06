import { Component, OnInit } from '@angular/core';
import {data} from "../data";
import { Todo } from './todo';
import { ToDoService } from './todo.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [` span {
                    display: inline-block;
                    width: 8%;
                  }`
          ],
  providers: [ToDoService]
})
export class TodoComponent implements OnInit {
  todos: any;
  editTodo: Todo;
  item : string;

  sortToDoForm: FormGroup;

  constructor(private TodoService: ToDoService) {}

  ngOnInit() {
    //this.getTodo();
    this.todos = this.TodoService.findAll();
    this.sortToDoForm = new FormGroup({
      sortOption: new FormControl('ascending',  Validators.required )})
  }

  getTodo(): Todo[]{
    return this.todos;
  }
  
  setOrder(order,item){
    this.item = item;
    console.log(order,item);
  }
}