import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { Tasks } from '../components/app-list/interf_tasks';
const URL = 'https://62b49373da3017eabb0d8683.mockapi.io/api/tasks' ;

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {
private refresh$ = new Subject<void>();
  constructor(private http:HttpClient) { }

  public getAll():Observable<Tasks[]>{
    return this.http.get<Tasks[]>(URL) ;
  }
  public insert(task:Tasks[]):Observable<Tasks[]>{
    return this.http.post<Tasks[]>(URL , task)
    .pipe(
      tap(
        () => {
          this.refresh$.next() ;
        }
      )
    )
  }
  public update(id:string , task:Tasks[]):Observable<Tasks[]>{
    return this.http.put<Tasks[]>(`${URL}/${id}` , task)
    .pipe(
      tap(
        () => {
          this.refresh$.next() ;
        }
      )
    )
  }
  public delete(id:string):Observable<Tasks[]>{
    return this.http.delete<Tasks[]>(`${URL}/${id}`) 
    .pipe(
      tap(
        () => {
          this.refresh$.next() ;
        }
      )
    )
  }
  public finalize(id:string , task:Tasks[]):Observable<Tasks[]>{
    return this.http.put<Tasks[]>(`${URL}/${id}` , task)
    .pipe(
      tap(tasks => {
          tasks.forEach(t => {
            t.finalizada = true;
            this.refresh$.next() ;
          })
      })
    )
  }
  
  public getRefresh():Subject<void>{
    return this.refresh$;
  }
}
