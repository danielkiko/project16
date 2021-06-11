import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Note } from 'src/app/shared/interfaces/note.interface';
import { Type } from '../interfaces/type.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpNoteService {

  constructor(private http: HttpClient) { }

  getNotes():Promise<any> {
    return this.http.get<Note[]>('http://localhost:3000/Notes').toPromise();
  }
  getNote(id:number):Promise<Note>{
    return this.http.get<Note>(`http://localhost:3000/Notes/${id}`).toPromise();
  }
  postNote(data: Note): Promise<Note> {
    return this.http.post<Note>('http://localhost:3000/Notes', data).toPromise();
  }

  deleteNote(index: number){
    return this.http.delete(`http://localhost:3000/Notes/${index}`).toPromise();
  }

  updateNote(index: number, notebody){
    return this.http.put<Note>(`http://localhost:3000/Notes/${index}`,notebody).toPromise();
  }

  getTypes():Promise<any> {
    
    return this.http.get<Type[]>('http://localhost:3000/Types').toPromise();
    
  }
  getType(id:number):Promise<any>{
    return this.http.get<Type>(`http://localhost:3000/Types/${id}`).toPromise();
  }
  postType(data: Type) {
    return this.http.post<Type>('http://localhost:3000/Types', data).toPromise();
  }

  deleteType(index: number){
    return this.http.delete(`http://localhost:3000/Types/${index}`).toPromise();
  }
  updateType(index: number, typebody){
    return this.http.put<Type>(`http://localhost:3000/Types/${index}`,typebody).toPromise();
  }

}
