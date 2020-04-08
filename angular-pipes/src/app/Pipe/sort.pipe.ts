import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../Todo/todo';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(todos: Array<Todo>, [order,item]): Array<Todo>{
    if(order=='asc')
        todos.sort((a,b) => a[item] < b[item] ? -1: 1);
    else if(order=='desc')
        todos.sort((a,b) => a[item] < b[item] ? 1: -1);
    return todos;
  }
}