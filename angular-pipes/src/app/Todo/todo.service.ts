import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';


@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    constructor(private http: HttpClient) { }

    findAll():Observable<Array<Todo>> {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        return this.http.get<Array<Todo>>(url);
    }
}