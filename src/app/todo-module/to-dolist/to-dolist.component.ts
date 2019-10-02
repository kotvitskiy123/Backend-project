import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/todo';
import { HttpClient } from "@angular/common/http";
import { TodoModule } from '../to-do.module';
import { TodoService } from 'src/app/services/todo.service';
//import { TODOS } from '../../mock-data/mock-data';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})
export class ToDOListComponent implements OnInit {

  todos: ToDo[];


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //this.todos = TODOS;
    this.todoService.getToDos().subscribe(data => {
      this.todos = data;
    });
  }

}
