import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../Todo/todo';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(todolist: any, [order, item]): any{
    //if()
    todolist.sort((a,b)=>{
      if(order == "desc"){
        return b[item]-a[item];
      }else{
        return a[item]-b[item];
      }
      //if(order==='asc'){return todolist.sort()}
     // else{return todolist.sort().reverse();}
    })
    return todolist;
  }

}