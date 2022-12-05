import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { TodoListAppComponent } from './components/todo-list-app/todo-list-app.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    TodoListAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    HttpClientModule ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
