import { Component, OnInit } from '@angular/core';
import { TodoModule } from '../to-do.module';
import { ToDo } from 'src/app/models/todo';
//import { TODOS } from 'src/app/mock-data/mock-data';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  item: ToDo;
  tags: string;

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() {
    this.item = new ToDo();
  }
  addClick() {
    this.item.tags = this.tags.split(',');
    this.todoService.addToDo(this.item).subscribe(x => {
      this.router.navigate(['']);
    })
  }

}
