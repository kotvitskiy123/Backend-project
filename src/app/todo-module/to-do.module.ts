import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDOListComponent } from './to-dolist/to-dolist.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from '../services/todo.service';



@NgModule({
  declarations: [ToDOListComponent, ToDoItemComponent, AddTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  exports:[ToDOListComponent,ToDoItemComponent]
})
export class TodoModule { }
