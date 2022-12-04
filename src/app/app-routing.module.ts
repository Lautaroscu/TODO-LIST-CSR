import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListAppComponent } from './components/todo-list-app/todo-list-app.component';

const routes: Routes = [
  {
    path :'' ,
    redirectTo: 'tasks' ,
    pathMatch: 'full'
  } ,
  {
    path: 'tasks' ,
    component : TodoListAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
