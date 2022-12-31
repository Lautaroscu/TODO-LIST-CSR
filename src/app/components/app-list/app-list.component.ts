import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServiceListService } from 'src/app/services/service-list.service';
import { Tasks } from './interf_tasks';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  id!:string ;
  editMode:boolean = false;
  @ViewChild('form') form!:NgForm
tasks:Tasks[] = [] ;
  suscription!:Subscription ;
  constructor(private DataService:ServiceListService) { }

  ngOnInit(): void {
    this.getAll();
    this.suscription = this.DataService.getRefresh().subscribe(() => {
      this.getAll();
    })
    
  }
  public getAll():void{
    this.DataService.getAll()
    .subscribe(
      (tasks) => {
        this.tasks = tasks ;
      }
    )
  }
  public addTask(task:Tasks[]):void{
    if(!this.editMode){
      this.DataService.insert(task) 
      .subscribe();
    }else{
      console.log(this.id)
      this.DataService.update(this.id , task) 
      .subscribe() ;
    }
  }
  showUpdate(id:string):void{
    this.editMode = true;
    let CurrentId = this.tasks.find((p) =>{
      return p.id == id
    })
    if(CurrentId?.id)
    this.id = CurrentId?.id ;
    if(CurrentId){
      this.form.setValue({
     tarea : CurrentId.tarea ,
     prioridad : CurrentId.prioridad ,
     descripcion : CurrentId.descripcion ,
    })
    }
    
  }

  deleteTask(id:string):void{
    this.DataService.delete(id) 
    .subscribe() ;
  }
  finalizar(id:string):void{
    let CurrentId = this.tasks.find((p) =>{
      return p.id == id
    })
    if(CurrentId){
      console.log('sii');

    this.DataService.finalize(CurrentId.id) 
    .subscribe(
      s => {
        console.log(s) ;
      }
    )
  }
    }
    desfinalizar(id:string):void{
      let CurrentId = this.tasks.find((p) =>{
        return p.id == id
      })
      if(CurrentId){
        console.log('sii');
  
      this.DataService.desfinalize(CurrentId.id) 
      .subscribe(
        s => {
          console.log(s) ;
        }
      )
    }
      }
      deleteAll(){
        this.DataService.deleteAll()
        .subscribe();
      }
    
    
}
