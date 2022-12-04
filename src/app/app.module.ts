import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { TodoListAppComponent } from './components/todo-list-app/todo-list-app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppFormComponent ,
    TodoListAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
     ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
