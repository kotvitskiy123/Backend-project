import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoModule } from './todo-module/to-do.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ToDOListComponent } from './todo-module/to-dolist/to-dolist.component';
import { AboutComponent } from './layout/about/about.component';
import { AddTodoComponent } from './todo-module/add-todo/add-todo.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: '', component: ToDOListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'addTask', component: AddTodoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', redirectTo:'' }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
