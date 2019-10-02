import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  BASE_API: string = 'https://localhost:44342/api/';

  constructor(private http: HttpClient) { }
  getToDos(): Observable<any> {
    return this.http.get(this.BASE_API + 'wallet');
  }

  addToDo(item: ToDo): Observable<any> {
    return this.http.post(this.BASE_API + 'wallet/AddSpending',item);
  }
}
